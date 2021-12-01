import { css, html, LitElement, TemplateResult, CSSResult } from "lit";
import { customElement, property, state } from "lit/decorators";
import { HomeAssistant } from "custom-card-helpers";
import { mdiClose } from "@mdi/js";
import { StateConfig } from "../types";
import { ArmActions, ActionToState } from "../const";
import { localize } from "../localize/localize";

export type CustomizeActionDialogConfig = {
  action: ArmActions,
  config: StateConfig,
  confirm: Function
}

@customElement("alarmo-action-config-dialog")
export class AlarmoActionConfigDialog extends LitElement {

  @property({ attribute: false })
  protected hass!: HomeAssistant;

  @state()
  private _params?: CustomizeActionDialogConfig;

  public async showDialog(params: CustomizeActionDialogConfig): Promise<void> {
    this._params = params;
  }

  public closeDialog(): boolean {
    this._params = undefined;
    return true;
  }

  private _createCloseHeading() {
    return html`
  <span class="header_title">${localize("editor.action_dialog.title", this.hass.language, "{action}", this.hass!.localize(`ui.card.alarm_control_panel.${this._params!.action}`))}</span>
  <ha-icon-button
    aria-label=${this.hass.localize("ui.dialogs.generic.close")}
    dialogAction="close"
    class="header_button"
    .path=${mdiClose}
  >
  </ha-icon-button>
`;
  }

  protected render(): TemplateResult {
    if (!this._params) {
      return html``;
    }

    return html`
      <ha-dialog
        open
        scrimClickAction
        .heading=${this._createCloseHeading()}
        @keydown=${this._ignoreKeydown}
        @closed=${this._cancel}
      >

      <paper-input
        label="${localize("editor.action_dialog.button_label", this.hass.language)}"
        .value="${this._params.config.button_label || ""}"
        placeholder="${this.hass!.localize(`ui.card.alarm_control_panel.${this._params!.action}`)}"
        @change=${(ev: Event) => this._updateConfig({ button_label: String((ev.target as HTMLInputElement).value).trim() })}
      ></paper-input>

      <paper-input
        label="${localize("editor.action_dialog.state_label", this.hass.language)}"
        .value="${this._params.config.state_label || ""}"
        placeholder="${this.hass.localize(`component.alarm_control_panel.state._.${ActionToState[this._params!.action]}`)}"
        @change=${(ev: Event) => this._updateConfig({ state_label: String((ev.target as HTMLInputElement).value).trim() })}
      ></paper-input>
        
        <div slot="primaryAction">
          <mwc-button @click=${this._cancel}>
            ${this.hass!.localize("ui.common.cancel")}
          </mwc-button>
        </div>
        <div slot="secondaryAction">
          <mwc-button @click=${this._save}>
            ${this.hass!.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-dialog>
    `;
  }

  private _ignoreKeydown(ev: KeyboardEvent) {
    ev.stopPropagation();
  }

  private _cancel(ev?: Event) {
    if (ev) ev.stopPropagation();
    this.closeDialog();
  }

  private _save(ev?: Event) {
    if (ev) ev.stopPropagation();
    this._params?.confirm(this._params.config);
    this.closeDialog();
  }

  private _updateConfig(changes: Partial<StateConfig>) {
    if (!this._params) return;

    this._params = {
      ...this._params,
      config: {
        ...this._params.config,
        ...changes
      }
    };
  }

  static get styles(): CSSResult {
    return css`
        paper-dialog-scrollable {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: auto;
          }
        }
        /* force smooth scrolling for iOS 10 */
        paper-dialog-scrollable.can-scroll {
          --paper-dialog-scrollable: {
            -webkit-overflow-scrolling: touch;
          }
        }
        .paper-dialog-buttons {
          align-items: flex-end;
          padding: 8px;
          padding-bottom: max(env(safe-area-inset-bottom), 8px);
        }
        @media all and (min-width: 450px) and (min-height: 500px) {
          ha-paper-dialog {
            min-width: 400px;
          }
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          paper-dialog,
          ha-paper-dialog {
            margin: 0;
            width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            min-width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            max-width: calc(
              100% - env(safe-area-inset-right) - env(safe-area-inset-left)
            ) !important;
            max-height: calc(100% - var(--header-height));
            position: fixed !important;
            bottom: 0px;
            left: env(safe-area-inset-left);
            right: env(safe-area-inset-right);
            overflow: scroll;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          }
        }
        /* mwc-dialog (ha-dialog) styles */
        ha-dialog {
          --mdc-dialog-min-width: 400px;
          --mdc-dialog-max-width: 600px;
          --mdc-dialog-heading-ink-color: var(--primary-text-color);
          --mdc-dialog-content-ink-color: var(--primary-text-color);
          --justify-action-buttons: space-between;
        }
        ha-dialog .form {
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        a {
          color: var(--primary-color);
        }
        /* make dialog fullscreen on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
            --mdc-dialog-min-width: calc(
              100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
            );
            --mdc-dialog-max-width: calc(
              100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
            );
            --mdc-dialog-min-height: 100%;
            --mdc-dialog-max-height: 100%;
            --mdc-shape-medium: 0px;
            --vertial-align-dialog: flex-end;
          }
        }
        mwc-button.warning {
          --mdc-theme-primary: var(--error-color);
        }
        .error {
          color: var(--error-color);
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }
        @media all and (min-width: 850px) {
          ha-dialog {
            --mdc-dialog-min-width: 550px;
          }
        }
        ha-dialog {
          --mdc-dialog-max-width: 550px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .spinner, ha-card {
          width: calc(50% - 8px);
          text-align: center;
          margin: 4px;
        }
        ha-card {
          box-sizing: border-box;
          padding: 8px;
          color: var(--secondary-text-color);
          font-size: 16px;
          cursor: pointer;
        }
        ha-svg-icon {
          padding-bottom: 4px;
          --mdc-icon-size: 38px;
        }
        span.header {
          font-weight: 600;
        }
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "alarmo-action-config-dialog": AlarmoActionConfigDialog;
  }
}