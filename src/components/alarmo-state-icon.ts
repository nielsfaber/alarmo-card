import { LitElement, html, css, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { computeDomain, HomeAssistant } from 'custom-card-helpers';
import { ICONS, PENDING_STATES } from '../const';
import { fetchCountdown } from '../data/websockets';

class AlarmoStateIcon extends LitElement {
  @property()
  hass!: HomeAssistant;

  @property()
  entity!: string;

  duration: number = 0;
  datetime: Date | null = null;
  timer = 0;

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
  }

  async startTimer() {
    clearInterval(this.timer);
    fetchCountdown(this.hass, this.entity)
      .then((countdownConfig) => {
        this.duration = countdownConfig.delay;
        this.datetime = new Date(new Date().getTime() + countdownConfig.remaining * 1000);
      })
      .catch((_e) => {});

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
    if (this.datetime && this.duration) {
      return html` ${Math.max(Math.round(this.getRemaining()), 0)} `;
    } else {
      return html` <ha-icon .icon=${ICONS[state]}></ha-icon> `;
    }
  }

  render() {
    let c = 50;
    let r = 45;
    let arcLength = 2 * Math.PI * r;

    const domain = computeDomain(this.entity);
    const stateObj = this.hass.states[this.entity];
    const timerRunning = this.datetime && this.duration;

    return html`
      <ha-tile-icon
        data-domain=${domain}
        data-state=${stateObj?.state}
      >
        <ha-state-icon
          slot="icon"
          .stateObj=${stateObj}
          .hass=${this.hass}
        ></ha-state-icon>
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
      </ha-tile-icon>
    `;
  }

  static get styles() {
    return css`
        ha-tile-icon {
            position: relative;
            --tile-icon-color: var(--tile-color);
        }
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"] ha-state-icon,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"] ha-state-icon,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"] ha-state-icon {
            animation: pulse 1s infinite;
        }
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"] svg,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"] svg,
        ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"] svg {
            opacity: 1;
        }

        svg {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            transform: rotateZ(90deg) scale(1, -1);
            transition: 0.3s ease opacity;
            opacity: 0;
        }

        .track {
            stroke-width: 6px;
            stroke-linecap: round;
            stroke: var(--disabled-text-color);
            fill: none;
        }

        .track .remaining {
            transition: 0.3s linear stroke;
            stroke: var(--tile-color);
        }

        .track.arming .remaining,
        .track.pending .remaining {
            transition: 1s linear stroke-dasharray;
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
customElements.define('alarmo-state-icon', AlarmoStateIcon);
