import { AlarmStates, minButtonScale, maxButtonScale } from '../const';
import { CardConfig, StateConfig } from '../types';
import { computeDomain } from 'custom-card-helpers';
import { isDefined } from '../helpers';

export const validateConfig = (config?: Partial<CardConfig> & { button_scale?: any }) => {
  if (!config || !config.entity || computeDomain(config.entity) !== 'alarm_control_panel') {
    throw new Error('Invalid configuration provided for entity');
  } else if (
    isDefined(config.button_scale_keypad) &&
    (typeof config.button_scale_keypad !== 'number' ||
      config.button_scale_keypad < minButtonScale ||
      config.button_scale_keypad > maxButtonScale)
  ) {
    throw new Error('Invalid configuration provided for button_scale_keypad');
  } else if (
    isDefined(config.button_scale_actions) &&
    (typeof config.button_scale_actions !== 'number' ||
      config.button_scale_actions < minButtonScale ||
      config.button_scale_actions > maxButtonScale)
  ) {
    throw new Error('Invalid configuration provided for button_scale_actions');
  }
};

export const calcStateConfig = (state: AlarmStates, config: Partial<CardConfig>) => {
  let result: StateConfig = {
    hide: false,
    button_label: '',
    state_label: '',
  };

  if ((config.states || {}).hasOwnProperty(state)) result = { ...result, ...config.states![state] };

  return result;
};
