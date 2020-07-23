import data from '../data.json';
import {ActionType} from "./types";

const campaignData = [...data];

export const getCampaigns = (pageNumber) => {
  const start = (pageNumber - 1) * 10;
  const end = start + 10;
  const totalItems = campaignData.length;
  const pages = Array.from({length: Math.ceil(totalItems / 10)}, (x, i) => i + 1);
  return {
    type: ActionType.CAMPAIGN_DETAILS,
    payload: {
      campaigns: campaignData.slice(start, end),
      totalItems: totalItems + " items",
      pages,
    }
  }
}

export const deleteCampaign = (pageNumber, index) => {
  const dataIndex = (index) * pageNumber;
  campaignData.splice(dataIndex, 1);
  return getCampaigns(pageNumber);
}
