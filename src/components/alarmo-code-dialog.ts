import { mdiCheck, mdiClose } from "@mdi/js";
import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { UnsubscribeFunc } from "home-assistant-js-websocket";
import { AlarmoEntity, AlarmoEvent } from "../types";
import { ActionToState, AlarmoEvents, AlarmStates, ArmActions, EVENT, FORMAT_NUMBER } from "../const";
import { SubscribeMixin } from "../subscribe-mixin";
import { HomeAssistant } from "../lib/types";

type ValidHassDomEvent = keyof HASSDomEvents;

export interface HassDialog<T = HASSDomEvents[ValidHassDomEvent]>
  extends HTMLElement {
  showDialog(params: T);
  closeDialog?: () => boolean;
}

export interface CodeDialogParams {
  code_format: "text" | "number";
  area_id?: string | number | null;
  entity_id: string;
  action: ArmActions;
  armOptions: any;
  confirm?: (ev: AlarmoEvents) => void;
  cancel?: () => void;
}

const BUTTONS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "clear",
  "submit",
];

@customElement("alarmo-code-dialog")
export class AlarmoCodeDialog
  extends SubscribeMixin(LitElement)
  implements HassDialog<CodeDialogParams> {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _params?: CodeDialogParams;

  @state() private _input = '';

  @state() private _showClearButton = false;

  @state() private _narrow = false;

  _codeClearTimer = 0;

  public hassSubscribe(): Promise<UnsubscribeFunc>[] {
    return [this.hass!.connection.subscribeMessage(ev => this._fetchData((ev as unknown) as AlarmoEvent), { type: EVENT })];
  }

  private async _fetchData(ev: AlarmoEvent): Promise<void> {
    if (ev.data.area_id !== this._params?.area_id) return;
    switch (ev.data.event) {
      case AlarmoEvents.Disarm:
        this._confirm(ev.data.event);
        break;
      case AlarmoEvents.Arm:
        this._confirm(ev.data.event);
        break;
      case AlarmoEvents.Trigger:
        this._confirm(ev.data.event);
        break;
      case AlarmoEvents.InvalidCodeProvided:
      case AlarmoEvents.NoCodeProvided:
        this._showCodeError();
        break;
      case AlarmoEvents.FailedToArm:
        this._confirm(ev.data.event);
        break;
      case AlarmoEvents.CommandNotAllowed:
        this._confirm(ev.data.event);
        break;
      case AlarmoEvents.TriggerTimeExpired:
        break;
      case AlarmoEvents.ReadyToArmModesChanged:
        break;
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (changedProps.has('_params') || !this._params) return true;
    else if (changedProps.has('_input')) return true;
    else if (!oldHass) return true;
    else if (oldHass.states[this._params!.entity_id] !== this.hass!.states[this._params!.entity_id]) {
      const oldState = oldHass.states[this._params!.entity_id] as AlarmoEntity;
      const newState = this.hass!.states[this._params!.entity_id] as AlarmoEntity;
      //this.processStateUpdate(oldState, newState);
      return true;
    }
    return false;
  }

  // private processStateUpdate(_oldState: AlarmoEntity, _newState: AlarmoEntity) {
  //   //console.log(`state changed: ${oldState.state} -> ${newState.state}`);
  // }


  protected firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.addEventListener("keypress", (ev) => {
      if (ev.key === "Enter" && this._input.length) {
        this._submit();
      }
    });
  }

  public async showDialog(dialogParams: CodeDialogParams): Promise<void> {
    this._params = dialogParams;
    this._input = "";
    this._narrow = matchMedia(
      "all and (max-width: 450px), all and (max-height: 500px)"
    ).matches;
    await this.updateComplete;
  }

  public closeDialog() {
    this._params = undefined;
    this._showClearButton = false;
    return true;
  }

  private _showCodeError() {
    const inputField = this.shadowRoot?.querySelector('#code');
    if (inputField) {
      inputField.classList.remove('error');
      inputField.classList.add('error');
      (inputField as any).invalid = true;
    }
  }

  private _clearCodeError() {
    const inputField = this.shadowRoot?.querySelector('#code');
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

  private _submit(): void {
    const code = this._input ?? "";
    this._clearCodeError();

    if (this._params!.action == ArmActions.Disarm) {
      this.hass!.callService('alarmo', 'disarm', {
        entity_id: this._params!.entity_id,
        code: code
      });
    } else {
      this.hass!.callService('alarmo', 'arm', {
        ...this._params!.armOptions,
        entity_id: this._params!.entity_id,
        mode: ActionToState[this._params!.action],
        code: code
      });
    }
  }

  private _confirm(ev: AlarmoEvents): void {
    this._params?.confirm?.(ev);
    this.closeDialog();
  }

  private _cancel(): void {
    this._params?.cancel?.();
    this.closeDialog();
  }

  private _numberClick(e: MouseEvent): void {
    const val = (e.currentTarget! as any).value;
    this._clearCodeError();
    this._setCodeClearTimer();
    this._input = this._input + val;
    this._showClearButton = true;
  }

  private _clear(): void {
    this._input = "";
    this._showClearButton = false;
  }

  private createCloseHeading = (
    hass: HomeAssistant | undefined,
    title: string | TemplateResult
  ) => html`
  <div class="header_title">
    <ha-icon-button
      .label=${hass?.localize("ui.common.close") ?? "Close"}
      .path=${mdiClose}
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>
    <span>${title}</span>
  </div>
`;

  protected render() {
    if (!this._params || !this.hass) {
      return nothing;
    }

    const isText = this._params.code_format === "text";

    if (isText) {
      return html`
        <ha-dialog
          open
          @closed=${this._cancel}
          .heading=${this.hass.localize("ui.dialogs.enter_code.title")}
        >
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="text"
            @input=${(ev: Event) => {
          this._clearCodeError();
          this._input = (ev.target as HTMLInputElement).value;
          this._setCodeClearTimer();
        }}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <ha-button slot="secondaryAction" dialogAction="cancel">
            ${this.hass.localize("ui.common.cancel")}
          </ha-button>
          <ha-button @click=${this._submit} slot="primaryAction">
            ${this.hass.localize("ui.common.submit")}
          </ha-button>
        </ha-dialog>
      `;
    }

    return html`
      <ha-dialog
        open
        .heading=${this.createCloseHeading(
      this.hass,
      this.hass.localize("ui.dialogs.enter_code.title")
    )}
        @closed=${this._cancel}
        hideActions
      >
        <div class="container">
          <ha-textfield
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="numeric"
            @input=${(ev: Event) => {
        this._clearCodeError();
        this._input = (ev.target as HTMLInputElement).value;
        this._setCodeClearTimer();
      }}
            @focus=${this._clearCodeError}
          ></ha-textfield>
          <div class="keypad">
            ${BUTTONS.map((value) =>
        value === ""
          ? html`<span></span>`
          : value === "clear"
            ? html`
                      <ha-control-button
                        @click=${this._clear}
                        class="clear"
                        .disabled=${!this._showClearButton}
                        .label=${this.hass!.localize("ui.common.clear")}
                      >
                        <ha-svg-icon path=${mdiClose}></ha-svg-icon>
                      </ha-control-button>
                    `
            : value === "submit"
              ? html`
                        <ha-control-button
                          @click=${this._submit}
                          class="submit"
                          .label=${this.hass!.localize("ui.common.submit")}
                        >
                          <ha-svg-icon path=${mdiCheck}></ha-svg-icon>
                        </ha-control-button>
                      `
              : html`
                        <ha-control-button
                          .value=${value}
                          @click=${this._numberClick}
                          .label=${value}
                        >
                          ${value}
                        </ha-control-button>
                      `
      )}
          </div>
        </div>
      </ha-dialog>
    `;
  }

  static styles = css`
    ha-dialog {
      /* Place above other dialogs */
      --dialog-z-index: 104;
    }
    ha-textfield {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-textfield.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
    }
    @keyframes shake {
      0% {
        margin-left: calc(50% - 240px / 2);
      }
      25% {
        margin-left: calc(50% - 240px / 2 + 10px);
      }
      75% {
        margin-left: calc(50% - 240px / 2 - 10px);
      }
      100% {
        margin-left: calc(50% - 240px / 2);
      }
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .keypad {
      --keypad-columns: 3;
      margin-top: 12px;
      padding: 12px;
      display: grid;
      grid-template-columns: repeat(var(--keypad-columns), auto);
      grid-auto-rows: auto;
      grid-gap: 24px;
      justify-items: center;
      align-items: center;
    }
    .clear {
      grid-row-start: 4;
      grid-column-start: 0;
    }
    @media all and (max-height: 450px) {
      .keypad {
        --keypad-columns: 6;
      }
      .clear {
        grid-row-start: 1;
        grid-column-start: 6;
      }
    }

    ha-control-button {
      width: 56px;
      height: 56px;
      --control-button-border-radius: 28px;
      --mdc-icon-size: 24px;
      font-size: 24px;
    }
    .submit {
      --control-button-background-color: var(--green-color);
      --control-button-icon-color: var(--green-color);
    }
    .clear {
      --control-button-background-color: var(--red-color);
      --control-button-icon-color: var(--red-color);
    }
    .hidden {
      display: none;
    }
    .buttons {
      margin-top: 12px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "alarmo-code-dialog": AlarmoCodeDialog;
  }
}