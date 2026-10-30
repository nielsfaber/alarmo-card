import { mdiCheck, mdiClose } from "@mdi/js";
import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { UnsubscribeFunc } from "home-assistant-js-websocket";
import { AlarmoEntity, AlarmoEvent } from "../types";
import {
  ActionToState,
  AlarmoEvents,
  AlarmStates,
  ArmActions,
  AUTO_SUBMIT_MAX_INPUT,
  EVENT,
  FORMAT_NUMBER,
} from '../const';
import { SubscribeMixin } from "../subscribe-mixin";
import { HomeAssistant } from "../lib/types";
import { localize } from "../localize/localize";
import {
  AutoSubmitQueue,
  DigitRateLimiter,
  commonPrefixLength,
  isAutoSubmitContext,
  newInputCandidates,
} from '../auto-submit';

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
  // Set when numeric codes are submitted automatically: the code lengths of the users allowed to perform the action.
  auto_submit?: {
    lengths: number[];
    anywhere: boolean;
    limiter: DigitRateLimiter;
  };
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

  // Part of the input already checked by auto_submit.
  private _processedInput = '';

  // Seconds until digits may be typed again (0 when not limited).
  @state() private _rateLimitWait = 0;

  private _rateLimitTimer = 0;

  private _autoQueue = new AutoSubmitQueue(
    (code, contextId) => this._callService(code, contextId),
    () => {
      this._input = '';
      this._processedInput = '';
      this._showCodeError(localize('errors.auto_submit_too_fast', this.hass!.language));
    },
    () => {
      this._showCodeError(localize('errors.auto_submit_failed', this.hass!.language));
    },
    (target) => !!this._params?.auto_submit && this._autoSubmitTarget() === target
  );

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
        // Failed automatic attempts stay silent.
        if (isAutoSubmitContext(ev.data.context_id)) break;
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
    else if (changedProps.has('_input') || changedProps.has('_rateLimitWait')) return true;
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
    this._autoQueue.cancel();
    this._params = dialogParams;
    this._input = "";
    this._processedInput = '';
    this._narrow = matchMedia(
      "all and (max-width: 450px), all and (max-height: 500px)"
    ).matches;
    // The limit is shared with the card, so it may still apply from earlier input.
    if (dialogParams.auto_submit?.limiter.waitTime()) this._startRateLimitTimer();
    await this.updateComplete;
  }

  public closeDialog() {
    this._autoQueue.cancel();
    this._stopRateLimitTimer();
    this._params = undefined;
    this._showClearButton = false;
    return true;
  }

  private _showCodeError(message = localize('errors.invalid_pin', this.hass!.language)) {
    const inputField = this.shadowRoot?.querySelector('#code');
    if (inputField) {
      inputField.classList.remove('error');
      inputField.classList.add('error');
      (inputField as any).hint = message;
    }
  }

  private _clearCodeError() {
    const inputField = this.shadowRoot?.querySelector('#code');
    if (inputField && inputField.classList.contains('error')) {
      inputField.classList.remove('error');
      (inputField as any).hint = '';
      this._input = '';
      this._processedInput = '';
      this._cancelCodeClearTimer();
    }
  }

  private _clearCode() {
    this._input = '';
    this._processedInput = '';
    this._autoQueue.cancel();
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
    this._callService(code);
  }

  private _callService(code: string, contextId?: number): Promise<unknown> {
    const context = contextId === undefined ? {} : { context_id: contextId };
    if (this._params!.action == ArmActions.Disarm) {
      return this.hass!.callService('alarmo', 'disarm', {
        entity_id: this._params!.entity_id,
        code: code,
        ...context,
      });
    } else {
      return this.hass!.callService('alarmo', 'arm', {
        ...this._params!.armOptions,
        entity_id: this._params!.entity_id,
        mode: ActionToState[this._params!.action],
        code: code,
        ...context,
      });
    }
  }

  // Queued attempts are only sent while the dialog is open for the same entity and action.
  private _autoSubmitTarget(): string {
    return `${this._params?.entity_id}|${this._params?.action}`;
  }

  private _autoSubmit(): void {
    const auto = this._params?.auto_submit;
    if (!auto || this._params!.code_format !== FORMAT_NUMBER) {
      this._processedInput = this._input;
      return;
    }
    const steps = newInputCandidates(this._processedInput, this._input, auto.lengths, auto.anywhere);
    for (const codes of steps) {
      // Saturated: the queue was reset and the input cleared.
      if (!this._autoQueue.add(codes, this._autoSubmitTarget())) return;
    }
    this._input = this._input.slice(-Math.max(AUTO_SUBMIT_MAX_INPUT, ...auto.lengths));
    this._processedInput = this._input;
  }

  // Records typed digits for the rate limit and returns how many are allowed.
  private _consumeDigits(count: number): number {
    const limiter = this._params?.auto_submit?.limiter;
    if (!limiter || this._params!.code_format !== FORMAT_NUMBER) return count;
    const allowed = limiter.consume(count);
    if (allowed < count) this._startRateLimitTimer();
    return allowed;
  }

  private _startRateLimitTimer() {
    const update = () => {
      this._rateLimitWait = Math.ceil((this._params?.auto_submit?.limiter.waitTime() || 0) / 1000);
      if (!this._rateLimitWait) this._stopRateLimitTimer();
    };
    update();
    if (this._rateLimitWait && !this._rateLimitTimer) this._rateLimitTimer = window.setInterval(update, 1000);
  }

  private _stopRateLimitTimer() {
    if (this._rateLimitTimer) clearInterval(this._rateLimitTimer);
    this._rateLimitTimer = 0;
    this._rateLimitWait = 0;
  }

  private _handleCodeInput(ev: Event): void {
    const field = ev.target as HTMLInputElement;
    const previous = this._input;
    let value = field.value;
    // Every character after the start shared with the previous input is checked again, so it counts for the rate
    // limit (also when typed text replaces a selection). Rejected characters are dropped.
    const common = commonPrefixLength(previous, value);
    const changed = value.length - common;
    if (changed > 0) {
      const allowed = this._consumeDigits(changed);
      if (allowed < changed) {
        value = value.slice(0, common + allowed);
        field.value = value;
        if (value === previous) return;
      }
    }
    this._clearCodeError();
    this._input = value;
    this._setCodeClearTimer();
    this._autoSubmit();
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
    if (!this._consumeDigits(1)) return;
    this._clearCodeError();
    this._setCodeClearTimer();
    this._input = this._input + val;
    this._showClearButton = true;
    this._autoSubmit();
  }

  private _clear(): void {
    this._autoQueue.cancel();
    this._input = "";
    this._processedInput = '';
    this._showClearButton = false;
  }

  private _renderRateLimited() {
    if (!this._rateLimitWait) return nothing;
    return html`
      <div class="rate-limited">
        ${localize('errors.auto_submit_rate_limited', this.hass!.language, '{seconds}', String(this._rateLimitWait))}
      </div>
    `;
  }

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
          header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
          width="small"
        >
          <ha-input
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
          ></ha-input>
          <ha-dialog-footer>
            <ha-button slot="secondaryAction" data-dialog="close" appearance="plain">
              ${this.hass.localize("ui.common.cancel")}
            </ha-button>
            <ha-button @click=${this._submit} slot="primaryAction">
              ${this.hass.localize("ui.common.submit")}
            </ha-button>
          </ha-dialog-footer>
        </ha-dialog>
      `;
    }

    return html`
      <ha-dialog
        open
        header-title="${this.hass.localize("ui.dialogs.enter_code.title")}"
        @closed=${this._cancel}
        width="small"
      >
        <div class="container">
          <ha-input
            class="input"
            ?dialogInitialFocus=${!this._narrow}
            .value=${this._input}
            id="code"
            .label=${this.hass.localize("ui.dialogs.enter_code.input_label")}
            type="password"
            inputmode="numeric"
            @input=${this._handleCodeInput}
            @focus=${this._clearCodeError}
          ></ha-input>
          ${this._renderRateLimited()}
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
                          .disabled=${this._rateLimitWait > 0}
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
    ha-input {
      width: 100%;
      max-width: 240px;
      margin: 0px auto;
      text-align: center;
      margin-left: calc(50% - 240px / 2);
      margin-bottom: 18.5px;
    }
    ha-input.error {
      animation: shake 0.2s ease-in-out 0s 2;
      margin-bottom: 0px;
      --ha-color-border-neutral-loud: var(--ha-color-on-danger-quiet);
    }
    ha-input.error:not([value='']) {
      --secondary-text-color: var(--ha-color-on-danger-quiet);
    }
    ha-input.error::part(wa-hint) {
      color: var(--ha-color-on-danger-quiet);
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
    .rate-limited {
      font-size: 14px;
      text-align: center;
      color: var(--error-color);
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