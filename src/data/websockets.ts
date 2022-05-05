import { HomeAssistant } from 'custom-card-helpers';
import { AlarmoEntry, AlarmoConfig, CountdownConfig } from '../types';

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
