import { LitElement, html, TemplateResult, PropertyValues, CSSResult, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { STATE_NOT_RUNNING, UnsubscribeFunc } from 'home-assistant-js-websocket';

import {
  CARD_VERSION,
  FORMAT_NUMBER,
  defaultCardConfig,
  ActionToState,
  ArmActions,
  AlarmoEvents,
  AlarmStates,
  EVENT,
  defaultArmOptions,
} from './const';
import { CardConfig, AlarmoEvent, AlarmoEntity, AlarmoConfig } from './types';

import './alarmo-card-editor';
import './components/alarmo-state-badge';
import './components/alarmo-sensor-badge';
import './components/alarmo-button';
import './components/alarmo-code-dialog';
import './components/alarmo-actions-bar';

import { SubscribeMixin } from './subscribe-mixin';
import { localize } from './localize/localize';
import {
  computeStateDisplay,
  computeNameDisplay,
  codeRequired,
  computeStateColor,
} from './data/entity';
import { validateConfig } from './data/config';
import { fetchEntities, fetchConfig, fetchReadyToArmModes } from './data/websockets';
import { mdiDotsVertical } from '@mdi/js';
import { CodeDialogParams } from './components/alarmo-code-dialog';
import { HomeAssistant } from './lib/types';
import { computeDomain } from './lib/compute-domain';
import { fireEvent } from './lib/fire-event';

const BUTTONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'clear'];

@customElement('alarmo-card')
export class AlarmoCard extends SubscribeMixin(LitElement) {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: CardConfig;

  @state()
  private _alarmoConfig?: AlarmoConfig;

  @state()
  private _input = '';

  @state()
  private warning = '';

  @state()
  private area_id: string | number | null | undefined = undefined;

  @state()
  armOptions = { ...defaultArmOptions };

  @state()
  readyForArmModes: AlarmStates[] | null = null;

  @state()
  backendConnection: boolean | null = null;

  @state()
  showBypassedSensors = false;

  subscribedEntities: string[] = [];

  _codeClearTimer = 0;

  _last_command?: string;
  _last_code?: string;

  public static async getConfigElement() {
    await import('./alarmo-card-editor');
    return document.createElement('alarmo-card-editor');
  }

  public static async getStubConfig(hass: HomeAssistant): Promise<Partial<CardConfig>> {
    let defaultEntity = Object.keys(hass.states).find(e => computeDomain(e) == 'alarm_control_panel');

    await fetchEntities(hass).then(res => {
      const sorted = res.sort((a, b) => Number(a.area_id) - Number(b.area_id));
      if (sorted.length) defaultEntity = sorted[0].entity_id;
    });

    return {
      type: `custom:alarmo-card`,
      entity: defaultEntity,
    };
  }

  public async getCardSize(): Promise<number> {
    if (!this._config || !this.hass) return 9;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    if (!stateObj || this._alarmoConfig?.code_format !== FORMAT_NUMBER) return 4;
    return (!codeRequired(stateObj) && !this._config.keep_keypad_visible || this._config.use_code_dialog) ? 4 : 9;
  }

  public setConfig(config?: CardConfig & { button_scale?: any }): void {
    if (!config?.button_scale_actions && config?.button_scale)
      //legacy: button_scale was replaced by button_scale_actions
      config = { ...config, button_scale_actions: config?.button_scale };
    if (!config?.button_scale_keypad && config?.button_scale)
      //legacy: button_scale was replaced by button_scale_keypad
      config = { ...config, button_scale_keypad: config?.button_scale };

    validateConfig(config);
    this._config = { ...defaultCardConfig, ...config };
  }

  public hassSubscribe(): Promise<UnsubscribeFunc>[] {
    return [
      this.hass!.connection.subscribeMessage(ev => this._fetchData((ev as unknown) as AlarmoEvent), { type: EVENT }),
    ];
  }

  async firstUpdated() {
    //load the checkbox element
    const ch = await (window as any).loadCardHelpers();
    const c = await ch.createCardElement({ type: 'entities', entities: [] });
    await c.constructor.getConfigElement();
    await this.loadBackendConfig();
  }

  async loadBackendConfig() {
    if (this.backendConnection) return;
    fetchEntities(this.hass!)
      .then(res => {
        const match = res.find(e => e.entity_id == this._config!.entity);
        if (match) this.area_id = match.area_id ? match.area_id : null;
      })
      .then(() => fetchConfig(this.hass!))
      .then(res => {
        this._alarmoConfig = res;
        this.backendConnection = true;
      })
      .then(() => fetchReadyToArmModes(this.hass!, this._config!.entity))
      .then(res => {
        this.readyForArmModes = res.modes;
      })
      .catch(_e => {
        this.backendConnection = false;
      });
  }

  private async _fetchData(ev: AlarmoEvent): Promise<void> {
    if (ev.data.area_id !== this.area_id) return;
    switch (ev.data.event) {
      case AlarmoEvents.Arm:
        this._clearCode();
        break;
      case AlarmoEvents.Trigger:
        break;
      case AlarmoEvents.InvalidCodeProvided:
      case AlarmoEvents.NoCodeProvided:
        this._showCodeError();
        this.subscribedEntities = [];
        break;
      case AlarmoEvents.FailedToArm:
        this.warning = 'blocking_sensors';
        this._last_command = ev.data.command;
        this._last_code = this._input;
        this._clearCode();
        break;
      case AlarmoEvents.CommandNotAllowed:
        this._clearCode();
        break;
      case AlarmoEvents.TriggerTimeExpired:
        break;
      case AlarmoEvents.ReadyToArmModesChanged:
        this.readyForArmModes = ev.data.modes;
        break;
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) return true;

    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (
      !oldHass ||
      oldHass.themes !== this.hass!.themes ||
      oldHass.language !== this.hass!.language ||
      oldHass.config.state !== this.hass!.config.state
    )
      return true;
    if (oldHass.states[this._config!.entity] !== this.hass!.states[this._config!.entity]) {
      const oldState = oldHass.states[this._config!.entity] as AlarmoEntity;
      const newState = this.hass!.states[this._config!.entity] as AlarmoEntity;
      if (this.backendConnection === false) (async () => await this.loadBackendConfig())();
      this.processStateUpdate(oldState, newState);
      return true;
    }
    if (this.subscribedEntities.length) {
      if (this.subscribedEntities.some(e => oldHass.states[e] !== this.hass!.states[e])) return true;
    }
    return false;
  }

  private processStateUpdate(oldState: AlarmoEntity, newState: AlarmoEntity) {
    if (newState.state != oldState.state) {
      //stop watching entities (blocking or triggered sensors)
      this.subscribedEntities = [];
    }

    if (newState.state == AlarmStates.Disarmed) {
      //wipe code in every card update (except InvalidCodeProvided/NoCodeProvided)
      this._clearCode();
    } else if (newState.last_changed !== oldState.last_changed) {
      //assume the state was changed although not detected
      this._clearCode();
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass || this.backendConnection === null) {
      return html``;
    }
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;

    if (!stateObj) {
      return html`
        <hui-warning>
          ${this.hass.config.state !== STATE_NOT_RUNNING
          ? this.hass.localize(
            'ui.panel.lovelace.warning.entity_not_found',
            'entity',
            this._config.entity || '[empty]'
          )
          : this.hass.localize('ui.panel.lovelace.warning.starting')}
        </hui-warning>
      `;
    }
    if (this.backendConnection === false) {
      return html`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and the correct
          entity is selected in the card settings.
        </hui-warning>
      `;
    }

    return html`
      <ha-card>
        ${stateObj.state === AlarmStates.Disarmed
        ? html`
              <ha-button-menu
                corner="BOTTOM_START"
                multi
                @action=${this._toggleArmOptions}
                @click=${(ev: Event) => ev.preventDefault()}
              >
                <ha-icon-button slot="trigger" .label=${this.hass.localize('ui.common.menu')} .path=${mdiDotsVertical}>
                </ha-icon-button>
                <mwc-list-item noninteractive>
                  <span class="title">
                    ${localize('arm_options.heading', this.hass.language)}
                  </span>
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.skip_delay ? 'mdi:check' : ''}"
                    @click=${(ev: Event) => {
            (ev.target as HTMLInputElement).parentElement?.click();
            ev.stopPropagation();
          }}
                  ></ha-icon>
                  ${localize('arm_options.skip_delay', this.hass.language)}
                </mwc-list-item>
                <mwc-list-item graphic="icon">
                  <ha-icon
                    slot="graphic"
                    icon="${this.armOptions.force ? 'mdi:check' : ''}"
                    @click=${(ev: Event) => {
            (ev.target as HTMLInputElement).parentElement?.click();
            ev.stopPropagation();
          }}
                  ></ha-icon>
                  ${localize('arm_options.force', this.hass.language)}
                </mwc-list-item>
              </ha-button-menu>
            `
        : ''}

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              style="--alarm-state-color: ${computeStateColor(stateObj)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            <div class="name">
              ${computeNameDisplay(stateObj, this._config)}
            </div>
            <div class="state">
              ${computeStateDisplay(stateObj, this.hass.localize, this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        <div id="actions" class="actions">
          ${this._renderActions()}
        </div>

        ${(!codeRequired(stateObj) && !this._config.keep_keypad_visible) || this._config.use_code_dialog
        ? html``
        : html`
              <ha-textfield
                .value=${this._input}
                .label=${this.hass.localize('ui.card.alarm_control_panel.code')}
                ?disabled=${!codeRequired(stateObj)}
                @input=${(ev: Event) => {
            this._clearCodeError();
            this._input = (ev.target as HTMLInputElement).value;
            this._setCodeClearTimer();
          }}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${this._alarmoConfig?.code_format === FORMAT_NUMBER ? 'numeric' : 'text'}
              ></ha-textfield>
            `}
        ${(!codeRequired(stateObj) && !this._config.keep_keypad_visible) ||
        this._alarmoConfig?.code_format !== FORMAT_NUMBER ||
        this._config.use_code_dialog ||
        this._config.hide_keypad
        ? html``
        : html`
          <div id="keypad" class="keypad" style="max-width: ${this._config.button_scale_keypad * 300}px">
            ${BUTTONS.map(value => {
          return value === ''
            ? html`
              <alarmo-button
                disabled
                style="--content-scale: ${this._config!.button_scale_keypad}"
                ?scaled=${this._config!.button_scale_keypad != 1}
                class="placeholder"
              ></alarmo-button>
            `
            : html`
              <alarmo-button
                .value="${value}"
                @click=${this._handlePadClick}
                ?disabled=${!codeRequired(stateObj) || value === 'clear' && !this._input.length}
                class="${value !== 'clear' ? 'numberKey' : 'clear'}"
                style="--content-scale: ${this._config!.button_scale_keypad}"
                ?scaled=${this._config!.button_scale_keypad != 1}
              >
                ${value === 'clear'
                ? html`<ha-icon icon="mdi:close" style="--mdc-icon-size: calc(${this._config!.button_scale_keypad} * 24px)"></ha-icon>`
                : html` <span>${value}</span>`}
              </alarmo-button>
            `;
        })}
          </div>
        `}
      </ha-card>
    `;
  }

  private _renderActions() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    const showReadyStatus = this._config.show_ready_indicator;

    return html`
      <alarmo-actions-bar
        @button-clicked=${(ev: CustomEvent) => this._handleActionClick(ev, ev.detail.action)}
        .hass=${this.hass}
        .config=${this._config}
        .readyForArmModes=${showReadyStatus ? this.readyForArmModes : undefined}
        style="--content-scale: ${this._config!.button_scale_actions}"
      ></alarmo-actions-bar>
    `;
  }

  private _renderWarning() {
    if (!this.hass || !this._config || !this._config.show_messages) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    if (
      (stateObj.attributes.open_sensors && stateObj.state == AlarmStates.Triggered) ||
      (this.warning == 'blocking_sensors' && stateObj.attributes.open_sensors)
    ) {
      return html`
        <div class="messagebox">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${this.warning == 'blocking_sensors'
          ? localize('errors.blocking_sensors', this.hass.language)
          : localize('errors.triggered_sensors', this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${Object.entries(stateObj.attributes.open_sensors).map(([e]) => {
            if (!this.subscribedEntities.includes(e)) this.subscribedEntities.push(e);
            return html`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `;
          })}
            </div>
          ${this.warning == 'blocking_sensors' && stateObj.attributes.open_sensors
          ? html`
            <alarmo-button
              @click=${this._forceRetryClick}
              style="--content-scale: ${this._config!.button_scale_actions}"
              ?scaled=${this._config!.button_scale_actions != 1}
            >
              <span>${localize('arm_options.force', this.hass.language)}</span>
            </alarmo-button>
          ` : ''}
          </div>
          <div class="messagebox-right"></div>
        </div>
      `;
    }
    if (
      stateObj.state.startsWith('armed_') &&
      stateObj.attributes.bypassed_sensors?.length &&
      this._config.show_bypassed_sensors
    ) {
      return html`
        <div class="messagebox warning">
          <div class="messagebox-left"></div>
          <div class="messagebox-inner">
            <div class="description">
              <div class="description-filler"></div>
              <span>
                <ha-icon icon="hass:alert"></ha-icon>
                ${localize('errors.bypassed_sensors', this.hass.language)}
              </span>
              <div class="description-filler"></div>
            </div>
            <div class="content">
              ${stateObj.attributes.bypassed_sensors.map(e => {
        if (!this.subscribedEntities.includes(e)) this.subscribedEntities.push(e);
        return html`
                  <div class="badge">
                    <alarmo-sensor-badge .hass=${this.hass} .entity=${e}> </alarmo-sensor-badge>
                  </div>
                `;
      })}
            </div>
          </div>
          <div class="messagebox-right"></div>
        </div>
      `;
    }
    return html``;
  }

  private _handlePadClick(e: MouseEvent): void {
    const val = (e.currentTarget! as any).value;
    this._clearCodeError();
    this._input = val === 'clear' ? '' : this._input + val;
  }

  private async _handleActionClick(ev: Event, action: ArmActions): Promise<void> {
    (ev.target as HTMLElement).blur();
    this._clearCodeError();
    const stateObj = this.hass!.states[this._config!.entity] as AlarmoEntity;

    if (this._config?.use_code_dialog && !this._config.hide_keypad && codeRequired(stateObj)) {
      const res = await new Promise(resolve => {
        const element = ev.target as HTMLElement;
        const params: CodeDialogParams = {
          code_format: this._alarmoConfig!.code_format,
          area_id: this.area_id,
          entity_id: this._config!.entity,
          action: action,
          armOptions: this.armOptions,
          cancel: () => {
            resolve(null);
          },
          confirm: (ev: AlarmoEvents) => {
            resolve(ev);
          },
        };
        fireEvent(element, 'show-dialog', {
          dialogTag: 'alarmo-code-dialog',
          dialogImport: () => import('./components/alarmo-code-dialog'),
          dialogParams: params
        });
      });
      if (res == AlarmoEvents.Arm || res == AlarmoEvents.Disarm) {
        //(dis)arming successful
        this.warning = '';
        this.armOptions = { ...defaultArmOptions };
      }
    }
    else {
      if (action == ArmActions.Disarm) {
        this.hass!.callService('alarmo', 'disarm', {
          entity_id: this._config!.entity,
          code: this._input,
        });
      } else {
        this.hass!.callService('alarmo', 'arm', {
          ...this.armOptions,
          entity_id: this._config!.entity,
          mode: ActionToState[action],
          code: this._input,
        });
      }
      this.warning = '';
      this.armOptions = { ...defaultArmOptions };
    }
  }

  private _showCodeError() {
    const inputField = this.shadowRoot?.querySelector('#code_input');
    if (inputField) {
      inputField.classList.remove('error');
      inputField.classList.add('error');
      (inputField as any).invalid = true;
    }
  }

  private _clearCodeError() {
    const inputField = this.shadowRoot?.querySelector('#code_input');
    if (inputField && inputField.classList.contains('error')) {
      inputField.classList.remove('error');
      (inputField as any).invalid = false;
      this._input = '';
      this._cancelCodeClearTimer();
    }
  }

  private _clearCode() {
    this._input = '';
    this._clearCodeError();
    this._cancelCodeClearTimer();
  }

  private _setCodeClearTimer() {
    this._cancelCodeClearTimer();
    if (this._input.length) {
      this._codeClearTimer = window.setTimeout(() => {
        this._clearCode();
      }, 120000); //clear code after 120 sec inactivity
    }
  }

  private _cancelCodeClearTimer() {
    if (this._codeClearTimer) {
      clearTimeout(this._codeClearTimer);
    }
  }

  private _toggleArmOptions(ev: CustomEvent) {
    switch (ev.detail.index) {
      case 0:
        this.armOptions = { ...this.armOptions, skip_delay: !this.armOptions.skip_delay };
        break;
      case 1:
        this.armOptions = { ...this.armOptions, force: !this.armOptions.force };
        break;
    }
    ev.preventDefault();
    const el = ev.target as HTMLElement;
    setTimeout(() => {
      (el.firstElementChild as HTMLElement).blur();
    }, 50);
  }

  private _forceRetryClick() {
    if (!this.hass || !this._config || !this._last_command) return;
    let action = this._last_command;

    this.hass!.callService('alarmo', 'arm', {
      entity_id: this._config!.entity,
      mode: ActionToState[action],
      code: this._last_code,
      force: true,
    });
    this._last_command = undefined;
    this._last_code = undefined;
  }

  static get styles(): CSSResult {
    return css`
      ha-card {
        padding-bottom: 16px;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }
      .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        padding: 20px 0px;
        box-sizing: border-box;
        gap: 20px;
        margin: 0px 50px;
      }
      .header .icon {
        display: flex;
      }
      .header .summary {
        display: flex;
        flex-direction: column;
      }
      .header .name {
        font-size: 24px;
        display: flex;
      }
      .header .state {
        font-size: 14px;
        display: flex;
      }
      .actions {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .actions alarmo-button {
        margin: 0 8px 8px;
      }
      ha-textfield {
        margin: 15px auto;
        max-width: 200px;
        text-align: center;
        margin-left: calc(50% - 200px / 2);
        margin-right: calc(50% - 200px / 2);
      }
      ha-textfield.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        direction: ltr;
        display: grid;
        grid-template-columns: repeat(3, auto);
        grid-auto-rows: auto;
        grid-gap: var(--ha-space-4, 16px);
      }
      #keypad alarmo-button {
        width: calc(var(--content-scale, 1) * 56px);
        height: calc(var(--content-scale, 1) * 56px);
        --alarmo-button-font-size: 24px;
        --alarmo-button-background-color: var(--primary-text-color);
        --alarmo-button-background-opacity: 0.05;
        --alarmo-button-border-radius: 50%;
        --alarmo-button-border-color: none;
        --alarmo-button-color: var(--primary-text-color);
        font-weight: 500;
      }
      #keypad alarmo-button.clear:not([disabled]) {
        --alarmo-button-background-color: var(--red-color);
        --alarmo-button-color: var(--red-color);
        --alarmo-button-background-opacity: 0.10;
      }
      #keypad alarmo-button.placeholder {
        visibility: hidden;
      }
      @keyframes shake {
        0% {
          margin-left: calc(50% - 200px / 2);
        }
        25% {
          margin-left: calc(50% - 200px / 2 + 10px);
        }
        75% {
          margin-left: calc(50% - 200px / 2 - 10px);
        }
        100% {
          margin-left: calc(50% - 200px / 2);
        }
      }
      div.messagebox {
        width: 90%;
        margin: 0px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: stretch;
        --border-color: var(--label-badge-red);
      }
      div.messagebox.warning {
        --border-color: var(--label-badge-yellow);
      }
      div.messagebox.warning alarmo-sensor-badge {
        --label-badge-red: var(--label-badge-yellow);
      }
      div.messagebox-left {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 0px 1px 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      div.messagebox-right {
        display: flex;
        width: 10px;
        border: 1px solid var(--border-color);
        border-width: 1px 1px 1px 0px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      div.messagebox-inner {
        flex-direction: column;
        border-bottom: 1px solid var(--border-color);
        flex: 1 1;
      }
      div.messagebox .description {
        display: flex;
        flex-direction: row;
      }
      div.messagebox .description span {
        color: var(--label-badge-red);
        font-weight: 500;
        display: flex;
        margin-top: -10px;
        padding: 0px 5px;
        flex-shrink: 2;
      }
      div.messagebox.warning .description span {
        color: #d0863d;
      }
      div.messagebox .description-filler {
        flex: 1;
        border-top: 1px solid var(--border-color);
        min-width: 5px;
      }
      div.messagebox .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 4px 0px 0px;
      }
      div.messagebox .content {
        display: flex;
        flex-basis: 100%;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.messagebox .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
      div.messagebox alarmo-button {
        display: flex;
        justify-self: center;
        margin-bottom: 10px;
      }
      ha-button-menu {
        position: absolute;
        right: 4px;
        top: 4px;
      }
      @media all and (max-width: 250px) {
        ha-button-menu {
          display: none;
        }
      }
      mwc-list-item {
        --mdc-theme-secondary: var(--primary-color);
        --mdc-list-item-graphic-margin: 16px;
      }
      mwc-list-item .title {
        font-weight: 500;
        font-size: 1.1em;
      }
    `;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'alarmo-card',
  name: 'Alarmo Card',
  description: 'Card for operating Alarmo through Lovelace.',
  preview: true,
});

console.info(
  `%c  ALARMO-CARD  \n%c  Version: ${CARD_VERSION.padEnd(7, ' ')}`,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);