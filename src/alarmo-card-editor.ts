import { LitElement, html, TemplateResult, CSSResult, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardEditor, fireEvent } from 'custom-card-helpers';
import { AlarmoEntity, CardConfig, SubElementEditorConfig, StateConfig } from './types';
import { localize } from './localize/localize';
import { maxButtonScale, minButtonScale, ActionToState, AlarmStates, ArmActions } from './const';
import { calcSupportedActions } from './data/entity';
import { calcStateConfig } from './data/config';
import { pick, isEmpty } from './helpers';
import { CustomizeActionDialogConfig } from './components/dialog-action-config';

import "./components/dialog-action-config";
import { HassEntity } from 'home-assistant-js-websocket';
import { fetchEntities } from './data/websockets';

@customElement('alarmo-card-editor')
export class AlarmoCardEditor extends LitElement implements LovelaceCardEditor {

  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: Partial<CardConfig>;

  @state()
  private _entities: string[] = [];

  async firstUpdated() {
    fetchEntities(this.hass!)
      .then(res => {
        this._entities = res.map(e => e.entity_id);
      })
      .catch(_e => { });
  }

  public setConfig(config?: Partial<CardConfig>): void {
    this._config = { ...config };
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;
    if (!this._entities.length) {
      return html`
        <hui-warning>
         Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;
    }
    const stateObj = this._config!.entity ? this.hass.states[this._config!.entity] as AlarmoEntity : undefined;
    return html`
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value="${this._config!.entity || ""}"
          .includeDomains=${["alarm_control_panel"]}
          .entityFilter=${(e: HassEntity) => this._entities.includes(e.entity_id)}
          @change=${(ev: Event) => this._updateConfig("entity", (ev.target as HTMLInputElement).value)}
          allow-custom-entity
        ></ha-entity-picker>

        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._config!.name || ""}"
          @change=${(ev: Event) => this._updateConfig("name", String((ev.target as HTMLInputElement).value).trim())}
        ></paper-input>

        ${stateObj ? html`
          <div class="config-item">
            <span>${localize("editor.available_actions", this.hass.language)}</span>
          </div>
          <div class="config-row">
    ${[...calcSupportedActions(stateObj), ArmActions.Disarm].map(e => {
      const supportedStates = calcSupportedActions(stateObj).map(e => ActionToState[e]);
      const isHidden = calcStateConfig(ActionToState[e], this._config!).hide;
      return html`
        <div class="config-item-50 ${isHidden ? "disabled" : ""}">
          <ha-checkbox
            ?checked=${!isHidden}
            ?disabled=${!isHidden && supportedStates.filter(e => !calcStateConfig(e, this._config!).hide).length == 1 || e == ArmActions.Disarm}
            @change=${(ev: Event) => this._updateStateConfig(ActionToState[e], (ev.target as HTMLInputElement).checked ? { hide: undefined } : { hide: true })}
          >
          </ha-checkbox>
          ${this.hass!.localize(`ui.card.alarm_control_panel.${e}`)}
          <ha-icon-button
            icon="hass:pencil"
            style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
            ?disabled=${calcStateConfig(ActionToState[e], this._config!).hide}
            @click=${(ev: Event) => this._openActionLabelDialog(ev, e)}
          >
          </ha-icon-button>
        </span>
      `})}
          </div>
        `
        : ''}
        ${
      stateObj
        && (stateObj.attributes.code_arm_required !== stateObj.attributes.code_disarm_required)
        ? html`
        <ha-formfield
          .label=${localize("editor.keep_keypad_visible", this.hass.language)}
        >
          <ha-switch
            .checked=${this._config!.keep_keypad_visible}
            @change=${(ev: Event) => this._updateConfig("keep_keypad_visible", (ev.target as HTMLInputElement).checked)}
          ></ha-switch
        ></ha-formfield>`
        : ''
      }
        <ha-formfield
          .label=${localize("editor.button_scale", this.hass.language)}
        >
          <ha-slider
            value=${this._config!.button_scale || 1}
            @change=${(ev: Event) => this._updateConfig("button_scale", Number((ev.target as HTMLInputElement).value))}
            min="${minButtonScale}"
            max="${maxButtonScale}"
            step="0.1"
            pin
          ></ha-slider>
        </ha-formfield>

        <ha-formfield
          .label=${localize("editor.use_clear_icon", this.hass.language)}
        >
          <ha-switch
            .checked=${this._config!.use_clear_icon}
            @change=${(ev: Event) => this._updateConfig("use_clear_icon", (ev.target as HTMLInputElement).checked)}
          ></ha-switch
        ></ha-formfield>
      </div>
    `;
  }

  private _updateConfig(property: string, value: any) {
    if (!this.hass) return;
    this._config = { ...this._config, [property]: value };
    if (property == "entity") {
      const stateObj = this._config!.entity ? this.hass.states[this._config!.entity] as AlarmoEntity : undefined;
      if (!stateObj
        || (stateObj.attributes.code_arm_required == stateObj.attributes.code_disarm_required)
      ) this._config = {
        ...this._config,
        keep_keypad_visible: false
      }
    }
    fireEvent(this, "config-changed", { config: this._config });
  }


  private _updateStateConfig(state: AlarmStates, config: Partial<StateConfig>) {
    const removeUndefined = obj => pick(obj, Object.keys(obj)
      .filter(e => !isEmpty(obj[e])));

    let stateConfig = this._config?.states || {};

    const stateEntry = removeUndefined({ ...stateConfig[state], ...config });
    stateConfig = removeUndefined({ ...stateConfig, [state]: stateEntry });

    this._updateConfig("states", stateConfig);
  }

  _openActionLabelDialog(ev: Event, action: ArmActions) {
    const params: CustomizeActionDialogConfig = {
      action: action,
      config: calcStateConfig(ActionToState[action], this._config!),
      confirm: (config: Partial<StateConfig>) => {
        this._updateStateConfig(ActionToState[action], config);
      }
    }
    fireEvent(ev.target as HTMLElement, "show-dialog", {
      dialogTag: "alarmo-action-config-dialog",
      dialogImport: () => import("./components/dialog-action-config"),
      dialogParams: params
    })
  }

  static get styles(): CSSResult {
    return css`
      ha-formfield {
        padding: 20px 0px;
      }
      div.config-row {
        font-size: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 12px;
      }
      div.config-item {
        padding-top: 20px;
      }
      div.config-row > * {
        display: flex;
        align-items: center;
      }
      div.config-item-50 {
        width: 50%;
      }
      @media all and (max-width: 300px) {
        div.config-item-50 {
          width: 100%;
        }
      }
      span.disabled { 
        color: var(--disabled-text-color);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "alarmo-card-editor": AlarmoCardEditor;
  }
}