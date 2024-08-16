import { HassEntity } from 'home-assistant-js-websocket';
import { ArmActions, AlarmStates } from '../const';
import { CardConfig } from '../types';
import { calcStateConfig } from './config';
import { isEmpty } from '../helpers';
import { LocalizeFunc, computeDomain } from 'custom-card-helpers';

export const calcSupportedActions = (stateObj: HassEntity) => {
  if (!stateObj) return [];
  const supportedFeatures = stateObj.attributes.supported_features || 0;
  let actions: ArmActions[] = [];
  if (supportedFeatures & 2) actions.push(ArmActions.ArmAway);
  if (supportedFeatures & 1) actions.push(ArmActions.ArmHome);
  if (supportedFeatures & 4) actions.push(ArmActions.ArmNight);
  if (supportedFeatures & 32) actions.push(ArmActions.ArmVacation);
  if (supportedFeatures & 16) actions.push(ArmActions.ArmCustomBypass);
  return actions;
};

export const computeStateDisplay = (stateObj: HassEntity, localize: LocalizeFunc, config?: CardConfig) => {
  const domain = computeDomain(stateObj.entity_id);
  const deviceClass = stateObj.attributes.device_class;
  const state = stateObj.state;

  if ((Object.values(AlarmStates) as string[]).includes(state) && config) {
    const stateConfig = calcStateConfig(state as AlarmStates, config);
    if (!isEmpty(stateConfig.state_label)) return stateConfig.state_label;
  }
  let translation = '';
  if (deviceClass)
    translation = localize(`component.${domain}.entity_component.${deviceClass}.state.${stateObj.state}`);
  if (!translation) translation = localize(`component.${domain}.entity_component._.state.${stateObj.state}`);
  return translation;
};

export const computeNameDisplay = (stateObj: HassEntity, config: CardConfig) => {
  return !isEmpty(config.name) ? config.name : stateObj.attributes.friendly_name;
};

export const codeRequired = (stateObj: HassEntity) => {
  return stateObj.attributes.code_format !== null;
};

export const computeStateColor = (stateObj: HassEntity) => {
  if (!stateObj || !stateObj.state) return 'var(--state-unavailable-color)';

  const state = stateObj.state;
  if (state == AlarmStates.Disarmed)
    return 'var(--state-alarm_control_panel-disarmed-color, var(--state-alarm_control_panel-inactive-color, var(--state-inactive-color)))';
  if (Object.values(AlarmStates).includes(state as any))
    return `var(--state-alarm_control_panel-${state}-color, var(--state-alarm_control_panel-active-color, var(--state-active-color)))`;

  return 'var(--disabled-color, var(--state-inactive-color))';
};
