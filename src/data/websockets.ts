import { HomeAssistant } from "custom-card-helpers";
import { AlarmoEntry, AlarmoConfig } from "../types";

export const fetchEntities = (hass: HomeAssistant): Promise<AlarmoEntry[]> =>
  hass.callWS({
    type: "alarmo/entities",
  });

export const fetchConfig = (hass: HomeAssistant): Promise<AlarmoConfig> =>
  hass.callWS({
    type: "alarmo/config",
  });