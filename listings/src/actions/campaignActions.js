import data from '../data.json';
import {ActionType} from "./types";

export const getCampaigns = () => {
  return {
    type: ActionType.CAMPAIGN_DETAILS,
    payload: data.slice(0, 10),
  }
}
