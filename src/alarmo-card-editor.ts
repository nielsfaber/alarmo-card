import { LitElement, html, TemplateResult, CSSResult, css, nothing } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { mdiArrowLeft, mdiPencil } from '@mdi/js';
import { AlarmoEntity, CardConfig, StateConfig, AlarmoConfig } from './types';
import { localize } from './localize/localize';
import {
  maxButtonScale,
  minButtonScale,
  ActionToState,
  AlarmStates,
  ArmActions,
  FORMAT_NUMBER,
  defaultCardConfig,
  ActionToIcon,
  ColorOptions,
} from './const';
import { calcSupportedActions } from './data/entity';
import { calcStateConfig } from './data/config';
import { pick, isEmpty, isDefined } from './helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { fetchEntities, fetchConfig } from './data/websockets';
import { HomeAssistant, LovelaceCardEditor } from './lib/types';
import { fireEvent } from './lib/fire-event';

@customElement('alarmo-card-editor')
export class AlarmoCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false })
  public hass?: HomeAssistant;

  @state()
  private _config?: Partial<CardConfig>;

  @state()
  private _alarmoConfig?: AlarmoConfig;

  @state()
  private _entities: string[] | null = null;

  @state()
  private _editAction: ArmActions | null = null;

  async firstUpdated() {
    fetchEntities(this.hass!)
      .then(res => {
        this._entities = res.map(e => e.entity_id);
      })
      .catch(_e => {
        this.hass?.callService('system_log', 'write', {
          message: `Failed to fetch entities: ${_e}`,
          level: 'error',
        });
      });

    this._alarmoConfig = await fetchConfig(this.hass!);
  }

  public setConfig(config?: Partial<CardConfig> & { button_scale?: any }): void {
    if (!config?.button_scale_actions && config?.button_scale)
      //legacy: button_scale was replaced by button_scale_actions
      config = { ...config, button_scale_actions: config?.button_scale };
    if (!config?.button_scale_keypad && config?.button_scale)
      //legacy: button_scale was replaced by button_scale_keypad
      config = { ...config, button_scale_keypad: config?.button_scale };

    this._config = { ...defaultCardConfig, ...config };
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass || !this._entities) return html``;
    if (!this._entities.length) {
      return html`
        <hui-warning>
          Could not establish a connection with the alarmo integration. Please check if it is installed and running.
        </hui-warning>
      `;
    }
    const stateObj = this._config!.entity ? (this.hass.states[this._config!.entity] as AlarmoEntity) : undefined;
    const hasKeypad =
      this._alarmoConfig?.code_format === FORMAT_NUMBER &&
      (this._alarmoConfig.code_arm_required || this._alarmoConfig.code_disarm_required);

    if (this._editAction !== null) {
      const stateConfig = calcStateConfig(ActionToState[this._editAction], this._config!);

      return html`
        <div class="header">
          <div class="back-title">
            <ha-icon-button
              .label=${this.hass!.localize('ui.common.back')}
              .path=${mdiArrowLeft}
              @click=${this._goBack}
            ></ha-icon-button>
            <span slot="title"
              >${localize(
        'editor.action_dialog.title',
        this.hass.language,
        '{action}',
        this.hass!.localize(`ui.card.alarm_control_panel.${this._editAction}`)
      )}</span
            >
          </div>
        </div>

        <div class="checkbox-item">
          <ha-checkbox
            ?checked=${!stateConfig.hide}
            ?disabled=${(!stateConfig.hide &&
          calcSupportedActions(stateObj!)
            .map(e => ActionToState[e])
            .filter(e => !calcStateConfig(e, this._config!).hide).length == 1) ||
        this._editAction == ArmActions.Disarm}
            @change=${(ev: Event) =>
          this._updateStateConfig(
            ActionToState[this._editAction!],
            (ev.target as HTMLInputElement).checked ? { hide: undefined } : { hide: true }
          )}
          >
          </ha-checkbox>
          <span
            @click=${(ev: Event) => {
          const checkbox = (ev.target as HTMLElement).previousElementSibling as HTMLElement;
          checkbox.click();
          checkbox.blur();
        }}
          >
            ${localize('editor.action_dialog.show_button', this.hass.language)}
          </span>
        </div>

        <div class="grid">
          <ha-textfield
            label="${localize('editor.action_dialog.button_label', this.hass.language)}"
            .value="${stateConfig.button_label || ''}"
            placeholder="${this.hass!.localize(`ui.card.alarm_control_panel.${this._editAction}`)}"
            ?disabled=${stateConfig.hide}
            @input=${(ev: Event) =>
          this._updateStateConfig(ActionToState[this._editAction!], {
            button_label: String((ev.target as HTMLInputElement).value).trim(),
          })}
          ></ha-textfield>

          <ha-icon-picker
            .hass=${this.hass}
            label="${localize('editor.action_dialog.button_icon', this.hass.language)}"
            .value="${stateConfig.button_icon || ActionToIcon[this._editAction]}"
            ?disabled=${stateConfig.hide}
            @value-changed=${(ev: CustomEvent) =>
          this._updateStateConfig(ActionToState[this._editAction!], {
            button_icon: ev.detail.value,
          })}
            >
          </ha-icon-picker>

          <ha-textfield
            label="${localize('editor.action_dialog.state_label', this.hass.language)}"
            .value="${stateConfig.state_label || ''}"
            placeholder="${this.hass.localize(
            `component.alarm_control_panel.entity_component._.state.${ActionToState[this._editAction]}`
          )}"
            @input=${(ev: Event) =>
          this._updateStateConfig(ActionToState[this._editAction!], {
            state_label: String((ev.target as HTMLInputElement).value).trim(),
          })}
          ></ha-textfield>

          <ha-select
            .icon=${isDefined(stateConfig.color)}
            label="${localize('editor.action_dialog.color', this.hass.language)}"
            .value=${stateConfig.color}
            @closed=${(ev: Event) => { ev.stopPropagation() }}
            @selected=${(ev: InputEvent) => {
          ev.stopPropagation();
          const value = (ev.target as HTMLInputElement).value;
          this._updateStateConfig(ActionToState[this._editAction!], {
            color: value || undefined,
          });
        }}
            fixedMenuPosition
            naturalMenuWidth
            clearable
          >
          ${stateConfig.color
          ? html`
              <span slot="icon">
                <span class="circle-color" style="--circle-color: ${Object.values(ColorOptions).includes(stateConfig.color as ColorOptions) ? `var(--${stateConfig.color}-color)` : stateConfig.color}">
                </span>
              </span>
            `
          : nothing}
            ${isDefined(stateConfig.color) && stateConfig.color.length && !Object.values(ColorOptions).includes(stateConfig.color as ColorOptions)
          ? html`
                <ha-list-item .value=${stateConfig.color} graphic="icon">
                  ${stateConfig.color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${stateConfig.color}">
                    </span>
                  </span>
                </ha-list-item>
            ` : nothing}
            ${Object.values(ColorOptions).map(color => {
            return html`
                <ha-list-item .value=${color} graphic="icon">
                  ${this.hass!.localize(
              `ui.components.color-picker.colors.${color}`
            ) || color}
                  <span slot="graphic">
                    <span class="circle-color" style="--circle-color: ${`var(--${color}-color)`}">
                    </span>
                  </span>
                </ha-list-item>
              `;
          })}
          </ha-select>
        </div>
      `;
    }

    return html`
      <div class="card-config">
        <div class="grid">
          <ha-entity-picker
            .label="${this.hass.localize('ui.panel.lovelace.editor.card.generic.entity')} (${this.hass.localize(
      'ui.panel.lovelace.editor.card.config.required'
    )})"
            .hass=${this.hass}
            .value="${this._config!.entity || ''}"
            .includeDomains=${['alarm_control_panel']}
            .entityFilter=${(e: HassEntity) => this._entities!.includes(e.entity_id)}
            @change=${(ev: Event) => this._updateConfig('entity', (ev.target as HTMLInputElement).value)}
            allow-custom-entity
          ></ha-entity-picker>

          <ha-textfield
            .label="${this.hass.localize('ui.panel.lovelace.editor.card.generic.name')} (${this.hass.localize(
      'ui.panel.lovelace.editor.card.config.optional'
    )})"
            .value="${this._config!.name || ''}"
            @input=${(ev: Event) => this._updateConfig('name', String((ev.target as HTMLInputElement).value).trim())}
          ></ha-textfield>
        </div>

        ${stateObj
        ? html`
              <div class="config-item">
                <span>${localize('editor.available_actions', this.hass.language)}</span>
              </div>
              <div class="config-row checkbox-list">
                ${[ArmActions.Disarm, ...calcSupportedActions(stateObj)].map(e => {
          const supportedStates = calcSupportedActions(stateObj).map(e => ActionToState[e]);
          const isHidden = calcStateConfig(ActionToState[e], this._config!).hide;
          return html`
                    <div class="checkbox-item ${isHidden ? 'disabled' : ''}">
                      <ha-checkbox
                        ?checked=${!isHidden}
                        ?disabled=${(!isHidden &&
              supportedStates.filter(el => !calcStateConfig(el, this._config!).hide).length == 1) ||
            e == ArmActions.Disarm}
                        @change=${(ev: Event) =>
              this._updateStateConfig(
                ActionToState[e],
                (ev.target as HTMLInputElement).checked ? { hide: undefined } : { hide: true }
              )}
                      >
                      </ha-checkbox>
                      <span
                        @click=${(ev: Event) => {
              const checkbox = (ev.target as HTMLElement).previousElementSibling as HTMLElement;
              checkbox.click();
              checkbox.blur();
            }}
                      >
                        ${this.hass!.localize(`ui.card.alarm_control_panel.${e}`)}
                      </span>
                      <ha-icon-button
                        .path=${mdiPencil}
                        style="color: var(--secondary-text-color); --mdc-icon-button-size: 42px"
                        ?disabled=${calcStateConfig(ActionToState[e], this._config!).hide}
                        @click=${() => this._editActionClick(e)}
                      >
                      </ha-icon-button>
                    </div>
                  `;
        })}
              </div>
            `
        : ''}

        <div class="grid">
          <ha-formfield .label=${localize('editor.button_scale_actions', this.hass.language)}>
            <ha-slider
              .value=${this._config!.button_scale_actions || 1}
              @change=${(ev: Event) =>
        this._updateConfig('button_scale_actions', Number((ev.target as HTMLInputElement).value))}
              min="${minButtonScale}"
              max="${maxButtonScale}"
              step="0.1"
              labeled
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${localize('editor.button_scale_keypad', this.hass.language)}>
            <ha-slider
              .value=${this._config!.button_scale_keypad || 1}
              @change=${(ev: Event) =>
        this._updateConfig('button_scale_keypad', Number((ev.target as HTMLInputElement).value))}
              min="${minButtonScale}"
              max="${maxButtonScale}"
              step="0.1"
              labeled
              ?disabled=${!stateObj || !hasKeypad || this._config?.use_code_dialog}
            ></ha-slider>
          </ha-formfield>

          <ha-formfield .label=${localize('editor.hide_keypad', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.hide_keypad}
              @change=${(ev: Event) => this._updateConfig('hide_keypad', (ev.target as HTMLInputElement).checked)}
              ?disabled=${!stateObj || !hasKeypad}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${localize('editor.keep_keypad_visible', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.keep_keypad_visible}
              @change=${(ev: Event) =>
        this._updateConfig('keep_keypad_visible', (ev.target as HTMLInputElement).checked)}
              ?disabled=${!stateObj ||
      !hasKeypad ||
      this._alarmoConfig?.code_arm_required == this._alarmoConfig?.code_disarm_required ||
      this._config?.use_code_dialog ||
      this._config?.hide_keypad}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${localize('editor.use_code_dialog', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.use_code_dialog}
              @change=${(ev: Event) => this._updateConfig('use_code_dialog', (ev.target as HTMLInputElement).checked)}
              ?disabled=${!stateObj || !hasKeypad || this._config.hide_keypad}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${localize('editor.show_messages', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.show_messages || !isDefined(this._config!.show_messages)}
              @change=${(ev: Event) => this._updateConfig('show_messages', (ev.target as HTMLInputElement).checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${localize('editor.show_ready_indicator', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.show_ready_indicator}
              @change=${(ev: Event) =>
        this._updateConfig('show_ready_indicator', (ev.target as HTMLInputElement).checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield .label=${localize('editor.show_bypassed_sensors', this.hass.language)}>
            <ha-switch
              .checked=${this._config!.show_bypassed_sensors}
              @change=${(ev: Event) =>
        this._updateConfig('show_bypassed_sensors', (ev.target as HTMLInputElement).checked)}
            ></ha-switch
          ></ha-formfield>

          <ha-formfield></ha-formfield>
        </div>
      </div>
    `;
  }

  private _updateConfig(property: string, value: any) {
    if (!this.hass) return;
    this._config = { ...this._config, [property]: value };
    if (property == 'entity') {
      const stateObj = this._config!.entity ? (this.hass.states[this._config!.entity] as AlarmoEntity) : undefined;
      if (!stateObj || stateObj.attributes.code_arm_required == stateObj.attributes.code_disarm_required)
        this._config = {
          ...this._config,
          keep_keypad_visible: false,
        };
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _updateStateConfig(state: AlarmStates, config: Partial<StateConfig>) {
    const removeUndefined = obj =>
      pick(
        obj,
        Object.keys(obj).filter(e => isDefined(obj[e] || typeof obj[e] === 'string'))
      );

    let stateConfig = this._config?.states || {};

    const stateEntry = removeUndefined({ ...stateConfig[state], ...config });
    stateConfig = removeUndefined({ ...stateConfig, [state]: stateEntry });

    this._updateConfig('states', stateConfig);
  }

  _editActionClick(action: ArmActions) {
    this._editAction = action;
  }

  _goBack() {
    this._editAction = null;
  }

  static get styles(): CSSResult {
    return css`
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
      ha-textfield {
        width: 100%;
      }
      div.grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px 8px;
      }
      div.grid > * {
        display: flex;
        flex-direction: column;
        flex: 1 0 300px;
      }
      div.checkbox-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0px 8px;
      }
      div.checkbox-item {
        display: flex;
        flex-direction: row;
        flex: 1 0 49%;
        font-size: 0.875rem;
        align-items: center;
      }
      div.checkbox-item.disabled {
        color: var(--disabled-text-color);
      }
      .checkbox-item span {
        cursor: pointer;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .back-title {
        display: flex;
        align-items: center;
        font-size: 18px;
      }
      .circle-color {
        display: block;
        background-color: var(--circle-color, var(--divider-color));
        border: 1px solid var(--outline-color);
        border-radius: var(--ha-border-radius-pill);
        width: 20px;
        height: 20px;
        box-sizing: border-box;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'alarmo-card-editor': AlarmoCardEditor;
  }
}