import { HassEvent, HassEntity } from 'home-assistant-js-websocket';
import { AlarmStates, AlarmoEvents } from './const';

export type CardConfig = {
  type: string;
  entity: string;
  name: string;
  keep_keypad_visible: boolean;
  use_clear_icon: boolean;
  button_scale_keypad: number;
  button_scale_actions: number;
  states: Partial<Record<AlarmStates, StateConfig>>;
  show_messages: boolean;
};

export type StateConfig = {
  hide: boolean;
  button_label: string;
  state_label: string;
};

export type AlarmoEvent = HassEvent & {
  data: { [key: string]: any } & {
    event: AlarmoEvents;
    area_id: string;
  };
};

export type AlarmoEntity = HassEntity & {
  attributes: {
    arm_mode?: string;
    open_sensors?: null | { [key: string]: string };
    delay?: number;
    expiration?: string;
    code_format?: string;
    code_arm_required?: boolean;
  };
};
export interface SubElementEditorConfig {
  index?: number;
  elementConfig?: {};
  type: string;
}

export interface AlarmoEntry {
  area_id: string | number;
  entity_id: string;
}

export interface AlarmoConfig {
  code_arm_required: boolean;
  code_disarm_required: boolean;
  code_format: 'number' | 'text';
}

export interface CountdownConfig {
  delay: number;
  remaining: number;
}
