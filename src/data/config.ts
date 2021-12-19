import { AlarmStates, minButtonScale, maxButtonScale } from '../const';
import { CardConfig, StateConfig } from '../types';
import { computeDomain } from 'custom-card-helpers';
import { isDefined } from '../helpers';

export const validateConfig = (config?: Partial<CardConfig>) => {
  if (!config || !config.entity || computeDomain(config.entity) !== 'alarm_control_panel') {
    throw new Error('Invalid configuration provided for entity');
  } else if (
    isDefined(config.button_scale) &&
    (typeof config.button_scale !== 'number' ||
      config.button_scale < minButtonScale ||
      config.button_scale > maxButtonScale)
  ) {
    throw new Error('Invalid configuration provided for button_scale');
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
