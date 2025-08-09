import { LitElement, html, css, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ICONS, PENDING_STATES } from '../const';
import { fetchCountdown } from '../data/websockets';
import { HomeAssistant } from '../lib/types';
import { fireEvent } from '../lib/fire-event';

class AlarmoStateBadge extends LitElement {
  @property()
  hass!: HomeAssistant;

  @property()
  entity!: string;

  duration: number = 0;
  datetime: Date | null = null;
  timer = 0;

  private _touchStarted = false;

  @state()
  public _hover = false;

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!changedProps.size) return true;
    const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
    if (!oldHass || oldHass.themes !== this.hass!.themes || oldHass.language !== this.hass!.language) return true;
    if (
      oldHass.states[this.entity].state !== this.hass.states[this.entity].state ||
      oldHass.states[this.entity].attributes.delay !== this.hass.states[this.entity].attributes.delay
    ) {
      const oldState = oldHass.states[this.entity].state;
      const newState = this.hass.states[this.entity].state;
      if (PENDING_STATES.includes(newState)) this.startTimer();
      else if (PENDING_STATES.includes(oldState)) this.stopTimer();
      return true;
    }

    return false;
  }

  firstUpdated() {
    const state = this.hass.states[this.entity].state;
    if (PENDING_STATES.includes(state)) this.startTimer();

    this.addEventListener("click", this.handleClick);
    this.addEventListener("touchstart", () => {
      this._touchStarted = true;
    });
    this.addEventListener("touchend", () => {
      setTimeout(() => {
        this._touchStarted = false;
      }, 10);
    });
    this.addEventListener("mouseenter", () => {
      if (this._touchStarted) return;
      this._hover = true;
    });
    this.addEventListener("mouseleave", () => {
      this._hover = false;
    });
  }

  async startTimer() {
    clearInterval(this.timer);
    fetchCountdown(this.hass, this.entity)
      .then((countdownConfig) => {
        this.duration = countdownConfig.delay;
        this.datetime = new Date(new Date().getTime() + countdownConfig.remaining * 1000);
      })
      .catch((_e) => { });

    this.timer = window.setInterval(() => {
      this.requestUpdate();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.datetime = null;
    this.duration = 0;
  }

  getRemaining(): number {
    if (!this.datetime) return 0;
    const seconds = (this.datetime.getTime() - new Date().getTime()) / 1000;
    if (seconds < 0) {
      clearInterval(this.timer);
      return 0;
    }
    return seconds;
  }

  getFraction() {
    if (!this.duration) return 1;
    return (Math.round(this.getRemaining()) - 1) / this.duration;
  }

  private _stateValue(state: string) {
    if (this._hover && PENDING_STATES.includes(state) && this.timer) {
      return html` <ha-icon icon="mdi:skip-forward"></ha-icon> `;
    }
    else if (this.datetime && this.duration) {
      return html` ${Math.max(Math.round(this.getRemaining()), 0)} `;
    } else {
      return html` <ha-icon .icon=${ICONS[state]}></ha-icon> `;
    }
  }

  handleClick() {
    const state = this.hass.states[this.entity].state;
    if (PENDING_STATES.includes(state) && this.timer) {
      this.hass!.callService('alarmo', 'skip_delay', {
        entity_id: this.entity
      });
    }
    else {
      fireEvent(this, 'hass-more-info', { entityId: this.entity });
    }
  }

  render() {
    let c = 50;
    let r = 45;
    let arcLength = 2 * Math.PI * r;

    const stateObj = this.hass.states[this.entity];
    const timerRunning = this.datetime && this.duration;

    return html`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="track ${stateObj.state.split('_').shift()} ${timerRunning ? 'timer' : ''}">
          <circle cx="${c}" cy="${c}" r="${r}"></circle>
          <path
            stroke-dasharray="${(this.getFraction() * arcLength).toFixed(2)} ${arcLength.toFixed(2)}"
            class="remaining"
            d="
              M ${c}, ${c}
              m -${r}, 0
              a ${r},${r} 0 1,0 90,0
              a ${r},${r} 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <div class="overlay ${stateObj.state.split('_').shift()} ${timerRunning ? 'timer' : ''}">
        <div class="value">${this._stateValue(stateObj.state)}</div>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        width: 60px;
        height: 60px;
        cursor: pointer;
      }
      svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: rotateZ(90deg) scale(1, -1);
      }
      .track {
        stroke-width: 4px;
        stroke-linecap: round;
        stroke: var(--disabled-text-color);
        fill: none;
      }
      .track .remaining {
        transition: 0.3s linear stroke;
        stroke: var(--alarm-state-color);
      }
      .track.arming .remaining,
      .track.pending .remaining {
        transition: 1s linear stroke-dasharray;
      }
      .overlay {
        position: absolute;
        margin-top: -60px;
        margin-left: 0;
        width: 60px;
        height: 60px;
        font-size: 1.5em;
        white-space: nowrap;
      }
      .value {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        color: var(--alarm-state-color);
        transition: 0.3s linear color;
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        justify-content: center;
        font-weight: 500;
      }
      .value ha-icon {
        --mdc-icon-size: 1.2em;
      }
      .disarmed,
      .armed {
        animation: none;
      }
      .triggered,
      .arming,
      .pending {
        animation: pulse 1s infinite;
      }
      .arming.timer,
      .pending.timer {
        animation: none;
      }
      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `;
  }
}
customElements.define('alarmo-state-badge', AlarmoStateBadge);
