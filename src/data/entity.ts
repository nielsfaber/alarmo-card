import { HassEntity } from 'home-assistant-js-websocket';
import { ArmActions, AlarmStates } from '../const';
import { CardConfig } from '../types';
import { calcStateConfig } from './config';
import { isEmpty } from '../helpers';
import { LocalizeFunc } from 'custom-card-helpers';

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

export const computeStateDisplay = (stateObj: HassEntity, localize: LocalizeFunc, config: CardConfig) => {
  const state = stateObj.state;

  if ((Object.values(AlarmStates) as string[]).includes(state)) {
    const stateConfig = calcStateConfig(state as AlarmStates, config);
    if (!isEmpty(stateConfig.state_label)) return stateConfig.state_label;
  }
  return localize(`component.alarm_control_panel.state._.${stateObj.state}`);
};

export const computeNameDisplay = (stateObj: HassEntity, config: CardConfig) => {
  return !isEmpty(config.name) ? config.name : stateObj.attributes.friendly_name;
};

export const codeRequired = (stateObj: HassEntity) => {
  return stateObj.attributes.code_format !== null;
};
