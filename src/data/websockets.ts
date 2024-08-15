import { HomeAssistant } from 'custom-card-helpers';
import { AlarmoEntry, AlarmoConfig, CountdownConfig, ReadyToArmModesConfig } from '../types';

export const fetchEntities = (hass: HomeAssistant): Promise<AlarmoEntry[]> =>
  hass.callWS({
    type: 'alarmo/entities',
  });

export const fetchConfig = (hass: HomeAssistant): Promise<AlarmoConfig> =>
  hass.callWS({
    type: 'alarmo/config',
  });

export const fetchCountdown = (hass: HomeAssistant, entity_id: string): Promise<CountdownConfig> =>
  hass.callWS({
    type: 'alarmo/countdown',
    entity_id: entity_id,
  });

export const fetchReadyToArmModes = (hass: HomeAssistant, entity_id: string): Promise<ReadyToArmModesConfig> =>
  hass.callWS({
    type: 'alarmo/ready_to_arm_modes',
    entity_id: entity_id,
  });
