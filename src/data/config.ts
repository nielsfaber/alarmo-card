import { AlarmStates, minButtonScale, maxButtonScale, minAutoSubmitRateLimit, maxAutoSubmitRateLimit } from '../const';
import { CardConfig, StateConfig } from '../types';
import { isDefined } from '../helpers';
import { computeDomain } from '../lib/compute-domain';

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
  } else if (
    isDefined(config.auto_submit_rate_limit) &&
    (typeof config.auto_submit_rate_limit !== 'number' ||
      !Number.isInteger(config.auto_submit_rate_limit) ||
      config.auto_submit_rate_limit < minAutoSubmitRateLimit ||
      config.auto_submit_rate_limit > maxAutoSubmitRateLimit)
  ) {
    throw new Error(
      `Invalid configuration provided for auto_submit_rate_limit (${minAutoSubmitRateLimit}-${maxAutoSubmitRateLimit})`
    );
  }
};

export const calcStateConfig = (state: AlarmStates, config: Partial<CardConfig>) => {
  let result: Partial<StateConfig> = {
    hide: false
  };

  if ((config.states || {}).hasOwnProperty(state)) result = { ...result, ...config.states![state] };

  return result;
};
