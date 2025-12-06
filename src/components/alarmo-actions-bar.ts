import { LitElement, html, css, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ActionToIcon, ActionToState, AlarmStates, ArmActions } from '../const';
import { HomeAssistant } from '../lib/types';
import { fireEvent } from '../lib/fire-event';
import { isDefined, isEmpty } from '../helpers';
import { CardConfig } from '../types';
import { calcSupportedActions } from '../data/entity';
import { calcStateConfig } from '../data/config';


@customElement("alarmo-actions-bar")
export class AlarmoActionsBar extends LitElement {

  @property({ attribute: false })
  public hass!: HomeAssistant;

  @property({ attribute: false })
  public config?: CardConfig;

  @property({ attribute: false })
  public readyForArmModes?: AlarmStates[];

  render() {
    if (!this.hass || !this.config) return nothing;

    const stateObj = this.hass.states[this.config.entity];
    let state = stateObj.state as AlarmStates;
    const ArmModes = Object.values(ArmActions).map(e => ActionToState[e]);
    if (!ArmModes.includes(state)) {
      const armMode = stateObj.attributes.arm_mode;
      if (armMode) state = armMode;
    }

    return html`
      <div class="container">
        ${this._renderOptions(state)}
      </div>
    `;
  }

  private _renderOptions(selectedOption: AlarmStates) {

    const stateObj = this.hass.states[this.config!.entity];
    const options = [ArmActions.Disarm, ...calcSupportedActions(stateObj)]
      .filter(e => !calcStateConfig(ActionToState[e], this.config!).hide);
    const hasTextLabel = options.map(e => calcStateConfig(ActionToState[e], this.config!)).some(e => !isDefined(e.button_label) || e.button_label.length);

    options.sort((a, b) => {
      const orderA = calcStateConfig(ActionToState[a], this.config!).button_order;
      const orderB = calcStateConfig(ActionToState[b], this.config!).button_order;
      if (!isDefined(orderA) && !isDefined(orderB)) return 0;
      else if (isDefined(orderA) && !isDefined(orderB)) return -1;
      else if (!isDefined(orderA) && isDefined(orderB)) return 1;
      else return orderA! - orderB!;
    });

    return options.map(e => {
      const isDisabled = isDefined(this.readyForArmModes) && !this.readyForArmModes.includes(ActionToState[e]) && e != ArmActions.Disarm;
      const stateConfig = calcStateConfig(ActionToState[e], this.config!);

      return html`
        <div class="button ${ActionToState[e] == selectedOption ? 'selected' : ''}" @click=${(ev: Event) => this._handleClick(ev, e)}>
          <div class="content ${hasTextLabel ? 'has-text' : ''}">
            <ha-icon icon="${isEmpty(stateConfig.button_icon) ? ActionToIcon[e] : stateConfig.button_icon}"></ha-icon>
            ${ActionToState[e] != selectedOption && isDefined(this.readyForArmModes)
          ? html`
              <ha-icon
                icon="${isDisabled ? 'mdi:circle-medium' : 'mdi:circle-medium'}"
                class="badge ${isDisabled ? 'error' : 'success'}"
              ></ha-icon>
            ` : nothing}
            <span>
              ${!isDefined(stateConfig.button_label)
          ? this.hass!.localize(`ui.card.alarm_control_panel.modes.${ActionToState[e]}`)
          : stateConfig.button_label
        }
            </span>
          </div>
        </div>
      `;
    })
  }

  private _handleClick(ev: Event, action: ArmActions) {
    fireEvent(this, 'button-clicked', { ev: ev, action: action });
  }

  static get styles() {
    return css`
      :host {
        width: 100%;
        display: inline-block;
        padding: 0px 10px;
        box-sizing: border-box;
      }
      div.container {
        position: relative;
        display: flex;
        width: 100%;
        gap: 0px;
        flex-wrap: wrap;
        padding: 4px;
        box-sizing: border-box;
        --selected-color: var(--alarm-state-color);
      }
      div.container::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--primary-text-color);
        opacity: 0.05;
        border-radius: calc(var(--content-scale, 1) * 18px);
      }
      div.button {
        cursor: pointer;
        position: relative;
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        /* For safari border-radius overflow */
        z-index: 0;
      }
      div.content {
        display: flex;
        position: relative;
        inline-size: calc(100% - 4px);
        border-radius: calc(var(--content-scale, 1) * 6px);
        height: calc(var(--content-scale, 1) * 26px);
        color: var(--primary-text-color);
        --mdc-icon-size: calc(var(--content-scale, 1) * 22px);
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-direction: column;
        padding: 8px 2px;
        overvlow: hidden;
        flex: 1;
        gap: 4px;
        transition:
          color ease-in-out 180ms;
      }
      div.content.has-text {
        height: calc(var(--content-scale, 1) * 40px);
      }
      div.content::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: var(--selected-color);
        opacity: 0;
        border-radius: calc(var(--content-scale, 1) * 14px);
        transition:
          background-color ease-in-out 180ms,
          opacity ease-in-out 80ms;
      }
      div.content.focused::before,
      div.content:hover::before {
        opacity: 0.24;
      }
      div.button.selected .content::before {
        opacity: 1;
      }
      div.content ha-icon {
        display: flex;
      }
      div.content span {
        display: flex;
        max-width: calc(100% - 4px);
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        overflow-wrap: break-word;
        text-overflow: clip;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
        word-break: break-word;
        font-weight: 400;
        font-size: calc(var(--content-scale, 1) * 1rem);
      }
      div.button.selected div.content ha-icon, div.button.selected div.content {
        color: white;
      }
      @media (max-width: 280px) {
        div.container {
          flex-direction: column;
        }
      }
      div.content ha-icon.badge {
        position: absolute;
        top: 0px;
        margin-left: calc(var(--content-scale, 1) * 28px);
      }
      div.content ha-icon.success {
        color: var(--green-color);
      }
      div.content ha-icon.error {
        color: var(--red-color);
      }
    `
  }
}