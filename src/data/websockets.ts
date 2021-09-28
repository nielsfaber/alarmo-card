import { HomeAssistant } from "custom-card-helpers";
import { AlarmoEntry } from "../types";

export const fetchEntities = (hass: HomeAssistant): Promise<AlarmoEntry[]> =>
  hass.callWS({
    type: "alarmo/entities",
  });
