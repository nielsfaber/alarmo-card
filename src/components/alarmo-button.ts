import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

class AlarmoButton extends LitElement {
  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: Boolean })
  scaled: boolean = false;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }

  protected handleFocus(ev: Event) {
    (ev.target as HTMLInputElement).blur();
  }

  static get styles() {
    return css`
      button {
        position: relative;
        width: 100%;
        border: 1px solid var(--outline-color);
        border-radius: 4px;
        background: transparent;
        color: var(--wa-color-brand-on-normal);
        padding: calc(var(--content-scale, 1) * 0.875rem);
        font-size: calc(var(--content-scale, 1) * 1rem);
        letter-spacing: 0.04em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        z-index: 1;
        transition: border-color 0.1s ease;
      }
      button:before {
        position: absolute;
        pointer-events: none;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: '';
        border-radius: 4px;
        background: var(--primary-color);
        opacity: 0;
        z-index: -2;
        transition: opacity 0.1s ease-in-out;
      }
      button:not(:disabled) {
        cursor: pointer;
      }
      button:disabled {
        color: var(--disabled-text-color);
        border: none;
      }
      button:not(:disabled):hover {
        border: 1px solid var(--outline-color);
      }
      button:not(:disabled):hover:before {
        opacity: 0.12;
      }
      button:not(:disabled):active {
        border: 1px solid var(--outline-hover-color);
      }
      button:not(:disabled):active:before {
        opacity: 0.24;
      }
      button:focus {
        outline: none;
      }
      ::slotted(ha-icon) {
        --mdc-icon-size: calc(var(--content-scale, 1) * 1.5rem);
        margin: calc(var(--content-scale, 1) * -0.25rem) 0px;
        display: flex;
      }
      ::slotted(ha-icon.leading) {
        margin-left: calc(var(--content-scale, 1) * -0.3rem);
        margin-right: calc(var(--content-scale, 1) * 0.3rem);
      }
      ::slotted span {
        display: flex;
      }
    `;
  }
}
customElements.define('alarmo-button', AlarmoButton);
