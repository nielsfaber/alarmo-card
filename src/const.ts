import { CardConfig } from './types';

export const CARD_VERSION = 'v1.5.0';

export const BUTTONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'clear'];

export const FORMAT_NUMBER = 'number';

export enum AlarmStates {
  Disarmed = 'disarmed',
  Arming = 'arming',
  Pending = 'pending',
  Triggered = 'triggered',
  ArmedAway = 'armed_away',
  ArmedHome = 'armed_home',
  ArmedNight = 'armed_night',
  ArmedVacation = 'armed_vacation',
  ArmedCustomBypass = 'armed_custom_bypass',
}

export const ICONS: Record<AlarmStates, string> = {
  [AlarmStates.ArmedAway]: 'hass:shield-lock',
  [AlarmStates.ArmedHome]: 'hass:shield-home',
  [AlarmStates.ArmedNight]: 'hass:shield-moon',
  [AlarmStates.ArmedVacation]: 'hass:shield-airplane',
  [AlarmStates.ArmedCustomBypass]: 'hass:security',
  [AlarmStates.Disarmed]: 'hass:shield-off',
  [AlarmStates.Arming]: 'hass:shield-outline',
  [AlarmStates.Pending]: 'hass:shield-outline',
  [AlarmStates.Triggered]: 'hass:bell-ring',
};

export enum ArmActions {
  ArmAway = 'arm_away',
  ArmHome = 'arm_home',
  ArmNight = 'arm_night',
  ArmVacation = 'arm_vacation',
  ArmCustomBypass = 'arm_custom_bypass',
  Disarm = 'disarm',
}

export const ActionToState = {
  [ArmActions.ArmAway]: AlarmStates.ArmedAway,
  [ArmActions.ArmHome]: AlarmStates.ArmedHome,
  [ArmActions.ArmNight]: AlarmStates.ArmedNight,
  [ArmActions.ArmVacation]: AlarmStates.ArmedVacation,
  [ArmActions.ArmCustomBypass]: AlarmStates.ArmedCustomBypass,
  [ArmActions.Disarm]: AlarmStates.Disarmed,
};

export enum AlarmoEvents {
  Arm = 'arm',
  Trigger = 'trigger',
  FailedToArm = 'failed_to_arm',
  CommandNotAllowed = 'command_not_allowed',
  NoCodeProvided = 'no_code_provided',
  InvalidCodeProvided = 'invalid_code_provided',
  TriggerTimeExpired = 'trigger_time_expired',
}

export const EVENT = 'alarmo_updated';

export const PENDING_STATES = ['arming', 'pending'];

export const defaultCardConfig: CardConfig = {
  type: '',
  entity: '',
  name: '',
  keep_keypad_visible: false,
  use_clear_icon: false,
  button_scale_actions: 1,
  button_scale_keypad: 1,
  states: {},
  show_messages: true,
};

export const minButtonScale = 1;
export const maxButtonScale = 2.5;

export const defaultArmOptions = {
  skip_delay: false,
  force: false,
};
