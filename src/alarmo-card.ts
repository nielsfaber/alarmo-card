import { css, CSSResult, html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { computeDomain, computeEntity, HomeAssistant } from 'custom-card-helpers';
import { HassEntity, STATE_NOT_RUNNING, UnsubscribeFunc } from 'home-assistant-js-websocket';
import { styleMap } from 'lit/directives/style-map.js';

import {
  ActionToState,
  AlarmoEvents,
  AlarmStates,
  ArmActions,
  BUTTON_ICONS,
  CARD_VERSION,
  defaultArmOptions,
  defaultCardConfig,
  EVENT,
  FORMAT_NUMBER,
} from './const';
import { AlarmoConfig, AlarmoEntity, AlarmoEvent, CardConfig } from './types';

import './alarmo-card-editor';
import './components/alarmo-state-icon';
import './components/alarmo-sensor-badge';
import './components/alarmo-button';

import { SubscribeMixin } from './subscribe-mixin';
import { localize } from './localize/localize';
import { calcSupportedActions, codeRequired, computeStateColor, computeStateDisplay } from './data/entity';
import { calcStateConfig, validateConfig } from './data/config';
import { isEmpty } from './helpers';
import { fetchConfig, fetchEntities, fetchReadyToArmModes } from './data/websockets';
import { mdiDotsVertical } from '@mdi/js';

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
    return !codeRequired(stateObj) && !this._config.keep_keypad_visible ? 4 : 9;
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
              this._config.entity || '[empty]',
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

    const name = this._config.name || stateObj.attributes.friendly_name || '';
    const color = computeStateColor(stateObj);
    const stateDisplay = computeStateDisplay(stateObj, this.hass.localize, this._config);
    const stateWarningDisplay = this.computeWarning();

    const style = {
      '--tile-color': color,
    };

    return html`
      <ha-card style="${styleMap(style)}">
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

        <div class="container">
          <div class="content">
            <alarmo-state-icon
              .hass=${this.hass}
              .entity=${this._config.entity}
            >
            </alarmo-state-icon>

            ${this.warning ? html`
              <ha-tile-info
                id="info"
                .primary=${localize('errors.'+this.warning, this.hass.language)}
                .secondary=${stateWarningDisplay}
              ></ha-tile-info>` : html`
              <ha-tile-info
                id="info"
                .primary=${stateDisplay}
              ></ha-tile-info>`}
          </div>
          <div class="features">
            ${this.renderFeatures()}
          </div>
        </div>
      </ha-card>
    `;
  }


  private renderFeatures() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;

    const actions =
      stateObj.state === AlarmStates.Disarmed
        ? calcSupportedActions(stateObj).filter(e => !calcStateConfig(ActionToState[e], this._config!).hide)
        : [ArmActions.Disarm];

    const showReadyStatus = this._config.show_ready_indicator;

    if (actions.length == 0) {
      return html``;
    }

    return html`
      <div class="actions-container">
        ${actions.map(action => {
          const actionState = ActionToState[action];
          const stateConfig = calcStateConfig(actionState, this._config!);
          const readyStatus = Array.isArray(this.readyForArmModes) && this.readyForArmModes.includes(actionState);

          return html`
            <div role="button" class="action-button"
                 @click=${(ev: Event) => this._handleActionClick(ev, this.hass!, stateObj, action)}
            >
              ${showReadyStatus
                ? html`
                  <ha-icon
                    .icon=${BUTTON_ICONS[actionState]}
                    style="${this.readyForArmModes === null || actionState === AlarmStates.Disarmed
                      ? `color: var(--label-badge-grey)`
                      : readyStatus
                        ? `color: var(--success-color)`
                        : `color: var(--error-color)`}"
                    class="leading"
                  ></ha-icon>
                `
                : ''}
              ${isEmpty(stateConfig.button_label)
                ? html`
                  <span>${this.hass!.localize(`ui.card.alarm_control_panel.${action}`)}</span>
                `
                : html`
                  <span>${stateConfig.button_label}</span>
                `}
            </div>
          `;
        })}
      </div>`;
  }

  private _renderInput() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;

    return !codeRequired(stateObj)
      ? html``
      : html`
        <div id="code_input" class="code-input">

          ${this._input.length ? this._input.split('').map(() => {
            return html`
              <div class="code-char">●</div>`;
          }) : html`
            <div class="code-placeholder">Enter code</div>`}
      `;
  }

  private computeWarning() {
    if (!this.hass || !this._config || !this._config.show_messages) return null;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    if (
      (stateObj.attributes.open_sensors && stateObj.state == AlarmStates.Triggered) ||
      (this.warning == 'blocking_sensors' && stateObj.attributes.open_sensors)
    ) {
      return Object.keys(stateObj.attributes.open_sensors).map((e) => {
        if (!this.subscribedEntities.includes(e)) this.subscribedEntities.push(e);
        const validEntity = e in this.hass!.states;
        let stateObj = { ...this.hass!.states[e] } as HassEntity;
        return validEntity ? stateObj.attributes.friendly_name || computeEntity(stateObj.entity_id) : e;
      });
    }
    if (
      stateObj.state.startsWith('armed_') &&
      stateObj.attributes.bypassed_sensors?.length &&
      this._config.show_bypassed_sensors
    ) {
      return stateObj.attributes.bypassed_sensors.map(e => {
        if (!this.subscribedEntities.includes(e)) this.subscribedEntities.push(e);
        const validEntity = e in this.hass!.states;
        let stateObj = { ...this.hass!.states[e] } as HassEntity;
        return validEntity ? stateObj.attributes.friendly_name || computeEntity(stateObj.entity_id) : e;
      });
    }
    return null;
  }

  private _handlePadClick(e: MouseEvent): void {
    const val = (e.currentTarget! as any).value;
    this._clearCodeError();
    this._input = val === 'clear' ? '' : this._input + val;
  }

  private async _handleActionClick(ev: Event, hass: HomeAssistant, stateObj: any, action: ArmActions) {
    const element = ev.target as Element;
    (ev.target as HTMLElement).blur();
    this._clearCodeError();

    if (action == ArmActions.Disarm) {
      const helpers = await (window as any).loadCardHelpers();

      const response = await helpers.showEnterCodeDialog(element, {
        codeFormat: stateObj.attributes.code_format,
        title: hass.localize(
          `ui.card.alarm_control_panel.disarm`,
        ),
        submitText: hass.localize(
          `ui.card.alarm_control_panel.disarm`,
        ),
      });
      if (response == null) {
        throw new Error('Code dialog closed');
      }

      this.hass!.callService('alarmo', 'disarm', {
        entity_id: this._config!.entity,
        code: response,
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

  static get styles(): CSSResult {
    return css`
        :host {
            --tile-color: var(--state-inactive-color);
            -webkit-tap-highlight-color: transparent;
            --features-background: var(--disabled-color);
            --features-background-opacity: 0.2;
            --features-focused-opacity: 0.15;
            --features-color: var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)));
        }

        ha-card {
            --ha-ripple-color: var(--tile-color);
            --ha-ripple-hover-opacity: 0.04;
            --ha-ripple-pressed-opacity: 0.12;
            height: 100%;
            transition: box-shadow 180ms ease-in-out,
            border-color 180ms ease-in-out;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        ha-card.active {
            --tile-color: var(--state-icon-color);
        }

        .container {
            margin: calc(-1 * var(--ha-card-border-width, 1px));
            display: flex;
            flex-direction: column;
            flex: 1;
        }

        .container.horizontal {
            flex-direction: row;
        }

        .content {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            flex: 1;
            min-width: 0;
            box-sizing: border-box;
            pointer-events: none;
            gap: 10px;
        }

        .features {
            --feature-color: var(--tile-color);
            padding: 0 12px 12px 12px;
        }

        .actions-container {
            position: relative;
            display: flex;
            gap: 10px;
            height: 42px;
            border-radius: 12px;
            overflow: hidden;
        }

        .actions-container::before {
            position: absolute;
            content: "";
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            background: var(--features-background);
            opacity: var(--features-background-opacity);
        }

        .action-button {
            --mdc-icon-size: 20px;
            cursor: pointer;
            position: relative;
            flex: 1;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            overflow: hidden;
            z-index: 0;
            font-weight: 500;
            gap: 8px;
        }

        .action-button::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: var(--features-color);
            opacity: 0;
            transition: background-color ease-in-out 180ms, opacity ease-in-out 80ms;
        }

        .action-button:hover::before {
            opacity: var(--features-focused-opacity);
        }

        ha-tile-icon {
            position: relative;
            padding: 6px;
            margin: -6px;
        }

        ha-tile-badge {
            position: absolute;
            top: 3px;
            right: 3px;
            inset-inline-end: 3px;
            inset-inline-start: initial;
        }

        ha-tile-info {
            position: relative;
            min-width: 0;
            transition: background-color 180ms ease-in-out;
            box-sizing: border-box;
        }

        ha-button-menu {
            position: absolute;
            right: 4px;
            top: 4px;
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
  'color: white; font-weight: bold; background: dimgray',
);

/* OLD
<div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${() => fireEvent(this, 'hass-more-info', { entityId: this._config!.entity })}
              style="--alarm-state-color: ${computeStateColor(stateObj)}"
            >
            </alarmo-state-badge>
          </div>
          <div class="summary">
            ${this._config.show_name ? html`
              <div class="primary">
                ${computeNameDisplay(stateObj, this._config)}
              </div>
            ` : ''}
            <div class="${this._config.show_name ? 'secondary' : 'primary'}">
              ${computeStateDisplay(stateObj, this.hass.localize, this._config)}
            </div>
          </div>
        </div>

        ${this._renderWarning()}

        ${this._renderActions()}

        ${this._renderInput()}

        ${(!codeRequired(stateObj) && !this._config.keep_keypad_visible) ||
        this._alarmoConfig?.code_format !== FORMAT_NUMBER
          ? html``
          : html`
            <div id="keypad" style="max-width: ${this._config.button_scale_keypad * 300}px">
              ${BUTTONS.map(value => {
                return value === 'disarm'
                  ? html`
                    <alarmo-button
                      ?disabled="${stateObj.state === AlarmStates.Disarmed}"
                      style="--content-scale: ${this._config!.button_scale_keypad}"
                      ?scaled=${this._config!.button_scale_keypad != 1}
                      @click=${(ev: Event) => this._handleActionClick(ev, ArmActions.Disarm)}
                    >
                      <span>${this.hass!.localize(`ui.card.alarm_control_panel.disarm`)}</span>
                    </alarmo-button>
                  `
                  : html`
                    <alarmo-button
                      .value="${value}"
                      @click=${this._handlePadClick}
                      ?disabled=${!codeRequired(stateObj)}
                      class="${value !== 'clear' ? 'numberKey' : ''}"
                      style="--content-scale: ${this._config!.button_scale_keypad}"
                      ?scaled=${this._config!.button_scale_keypad != 1}
                    >
                      ${value === 'clear'
                        ? this._config!.use_clear_icon
                          ? html`
                            <ha-icon icon="hass:backspace-outline"></ha-icon>
                          `
                          : html`
                            <span>${this.hass!.localize(`ui.card.alarm_control_panel.clear_code`)}</span>
                          `
                        : html`
                          <span>${value}</span>
                        `}
                    </alarmo-button>
                  `;
              })}
            </div>
          `}
 */