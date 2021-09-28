import { LitElement, html, TemplateResult, PropertyValues, CSSResult, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { STATE_NOT_RUNNING, UnsubscribeFunc } from "home-assistant-js-websocket";

import { CARD_VERSION, BUTTONS, FORMAT_NUMBER, defaultCardConfig, ActionToState, ArmActions, AlarmoEvents, AlarmStates, EVENT } from './const';
import { CardConfig, AlarmoEvent, AlarmoEntity } from './types';

import "./alarmo-card-editor";
import "./components/alarmo-state-badge";
import "./components/alarmo-sensor-badge";
import "./components/alarmo-button";

import { SubscribeMixin } from './subscribe-mixin';
import { localize } from './localize/localize';
import { calcSupportedActions, computeStateDisplay, computeNameDisplay, codeRequired } from './data/entity';
import { calcStateConfig, validateConfig } from './data/config';
import { isEmpty } from './helpers';
import { fetchEntities } from './data/websockets';

@customElement('alarmo-card')
export class AlarmoCard extends SubscribeMixin(LitElement) {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: CardConfig;

  @state()
  private _input: string = "";

  @state()
  private warning: string = "";

  @state()
  private area_id: string | number | null = null;

  subscribedEntities: string[] = [];

  _codeClearTimer: number = 0;

  public static async getConfigElement() {
    await import("./alarmo-card-editor");
    return document.createElement("alarmo-card-editor");
  }

  public async getCardSize(): Promise<number> {
    if (!this._config || !this.hass) return 9;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    if (!stateObj || stateObj.attributes.code_format !== FORMAT_NUMBER) return 4;
    return (!codeRequired(stateObj) && !this._config.keep_keypad_visible) ? 4 : 9;
  }

  public setConfig(config?: CardConfig): void {
    validateConfig(config);
    this._config = { ...defaultCardConfig, ...config };
  }

  public hassSubscribe(): Promise<UnsubscribeFunc>[] {
    return [
      this.hass!.connection.subscribeMessage(
        (ev) => this._fetchData(ev as unknown as AlarmoEvent),
        { type: EVENT }
      ),
    ];
  }

  async firstUpdated() {
    fetchEntities(this.hass!)
      .then(res => {
        let match = res.find(e => e.entity_id == this._config!.entity);
        if (match) this.area_id = match.area_id;
      })
      .catch(_e => { });
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
        this.warning = "blocking_sensors";
        this._clearCode();
        break;
      case AlarmoEvents.CommandNotAllowed:
        this._clearCode();
        break;
      case AlarmoEvents.TriggerTimeExpired:
        break;
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has("_config")) return true;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (
      !oldHass ||
      oldHass.themes !== this.hass!.themes ||
      oldHass.language !== this.hass!.language
    ) return true;
    if (oldHass.states[this._config!.entity] !== this.hass!.states[this._config!.entity]) {
      const oldState = oldHass.states[this._config!.entity] as AlarmoEntity;
      const newState = this.hass!.states[this._config!.entity] as AlarmoEntity;
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
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;

    if (!stateObj) {
      return html`
        <hui-warning>
         ${this.hass.config.state !== STATE_NOT_RUNNING
          ? this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity || "[empty]")
          : this.hass.localize("ui.panel.lovelace.warning.starting")
        }
        </hui-warning>
      `;
    }
    if (this.area_id === null) {
      return html`
        <hui-warning>
         Could not establish a connection with the alarmo integration. Please check if it is installed and the correct entity is selected in the card settings.
        </hui-warning>
      `;
    }
    return html`
      <ha-card>

        <div class="header">
          <div class="icon">
            <alarmo-state-badge
              .hass=${this.hass}
              .entity=${this._config.entity}
              @click=${() => fireEvent(this, "hass-more-info", { entityId: this._config!.entity })}
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

        <div id="armActions" class="actions">
          ${this._renderActions()}
        </div>

        ${!codeRequired(stateObj) && !this._config.keep_keypad_visible
        ? html``
        : html`
              <paper-input
                .value=${this._input}
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                ?disabled=${!codeRequired(stateObj)}
                @value-changed=${(ev: Event) => {
            this._clearCodeError();
            this._input = (ev.target as HTMLInputElement).value;
            this._setCodeClearTimer();
          }}
                @focus=${this._clearCodeError}
                type="password"
                id="code_input"
                .inputmode=${stateObj.attributes.code_format === FORMAT_NUMBER ? "numeric" : "text"}
              ></paper-input>
            `}
        ${(!codeRequired(stateObj) && !this._config.keep_keypad_visible)
        || stateObj.attributes.code_format !== FORMAT_NUMBER
        ? html``
        : html`
          <div
            id="keypad"
            style="max-width: ${this._config.button_scale * 300}px"
          >
        ${BUTTONS.map((value) => {
          return value === ""
            ? html` 
              <alarmo-button
                disabled
                style="--content-scale: ${this._config!.button_scale}"
                ?scaled=${this._config!.button_scale != 1}
              ></alarmo-button> `
            : html`
              <alarmo-button
                .value="${value}"
                @click=${this._handlePadClick}
                ?disabled=${!codeRequired(stateObj)}
                class="${value !== "clear" ? "numberKey" : ""}"
                style="--content-scale: ${this._config!.button_scale}"
                ?scaled=${this._config!.button_scale != 1}
              >
                ${value === "clear"
                ? this._config!.use_clear_icon
                  ? html`<ha-icon icon="hass:backspace-outline"></ha-icon>`
                  : this.hass!.localize(`ui.card.alarm_control_panel.clear_code`)
                : value}
              </alarmo-button>
            `;
        })}
          </div>
      `}
      </ha-card>
    `
  }

  private _renderActions() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;

    const actions = stateObj.state === AlarmStates.Disarmed
      ? calcSupportedActions(stateObj)
        .filter(e => !calcStateConfig(ActionToState[e], this._config!).hide)
      : [ArmActions.Disarm];

    return actions.map(action => {
      const stateConfig = calcStateConfig(ActionToState[action], this._config!);
      return html`
        <alarmo-button
          @click=${(ev: Event) => this._handleActionClick(ev, action)}
          style="--content-scale: ${this._config!.button_scale}"
          ?scaled=${this._config!.button_scale != 1}
        >
        ${
        isEmpty(stateConfig.button_label)
          ? this.hass!.localize(`ui.card.alarm_control_panel.${action}`)
          : stateConfig.button_label
        }
        </alarmo-button>
        `;
    });
  }

  private _renderWarning() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity] as AlarmoEntity;
    if (
      (stateObj.attributes.open_sensors && stateObj.state == AlarmStates.Triggered) ||
      (this.warning == "blocking_sensors" && stateObj.attributes.open_sensors)
    ) {
      return html`
          <div class="message">
            <div class="description">
              <span>
              <ha-icon icon="hass:alert"></ha-icon>
        ${
        this.warning == "blocking_sensors"
          ? localize("errors.blocking_sensors", this.hass.language)
          : localize("errors.triggered_sensors", this.hass.language)
        }
        </span>
          </div>
          <div class="content">
            ${
        Object.entries(stateObj.attributes.open_sensors).map(([e]) => {
          if (!this.subscribedEntities.includes(e)) this.subscribedEntities.push(e);
          return html`
            <div class="badge">
              <alarmo-sensor-badge
                .hass=${this.hass}
                .entity=${e}
              >
              </alarmo-sensor-badge>
            </div>`
        })
        }
        </div>
          </div>`;
    }
    else {
      return html``;
    }
  }

  private _handlePadClick(e: MouseEvent): void {
    const val = (e.currentTarget! as any).value;
    this._clearCodeError();
    this._input = val === "clear" ? "" : this._input + val;
  }

  private _handleActionClick(ev: Event, action: string): void {
    (ev.target as HTMLElement).blur();
    this._clearCodeError();
    this.hass!.callService("alarm_control_panel", `alarm_${action}`, {
      entity_id: this._config!.entity,
      code: this._input,
    });
    this.warning = "";
  }

  private _showCodeError() {
    const inputField = this.shadowRoot?.querySelector("#code_input");
    if (inputField) {
      inputField.classList.remove("error");
      inputField.classList.add("error");
      (inputField as any).invalid = true;
    }
  }

  private _clearCodeError() {
    const inputField = this.shadowRoot?.querySelector("#code_input");
    if (inputField && inputField.classList.contains("error")) {
      inputField.classList.remove("error");
      (inputField as any).invalid = false;
      this._input = "";
      this._cancelCodeClearTimer();
    }
  }

  private _clearCode() {
    this._input = "";
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
      }
      .header .icon {
        display: flex;
        padding-right: 20px;
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
        margin: 0 4px 4px;
      }
      paper-input {
        margin: 0 auto 8px;
        max-width: 150px;
        text-align: center;
        margin-left: calc(50% - 150px/2);
      }
      paper-input.error {
        animation: shake 0.2s ease-in-out 0s 2;
      }
      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 100%;
      }
      #keypad alarmo-button {
        padding: 4px;
        width: 30%;
        box-sizing: border-box;
      }
      @keyframes shake {
        0% { margin-left: calc(50% - 150px/2); }
        25% { margin-left: calc(50% - 150px/2 + 10px); }
        75% { margin-left: calc(50% - 150px/2 - 10px); }
        100% { margin-left: calc(50% - 150px/2); }
      }
      div.message {
        border-radius: 4px;
        width: 90%;
        margin: 0px auto 20px;
        box-sizing: border-box;
        border: 1px solid var(--label-badge-red);
        display: flex;
        flex-direction: column;
        position: relative;
      }
      div.message .description {
        padding: 5px 5px 0px 5px;
        margin: -15px auto 0px;
        color: var(--label-badge-red);
        font-weight: 500;
      }
      div.message .description span {
        background: var(--card-background-color);
        padding-right: 5px;
      }
      div.message .description ha-icon {
        --mdc-icon-size: 24px;
        margin: 0px 0px 0px 0px;
      }
      div.message .content {
        display: flex;
        padding: 5px;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        color: var(--primary-text-color);
      }
      div.message .content .badge {
        width: 64px;
        margin: 5px 0px;
        justify-content: center;
        align-items: center;
      }
    `;
  }
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'alarmo-card',
  name: 'Alarmo Card',
  description: 'Card for operating Alarmo through Lovelace.',
});

console.info(
  `%c  ALARMO-CARD  \n%c  Version: ${CARD_VERSION.padEnd(7, ' ')}`,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);
