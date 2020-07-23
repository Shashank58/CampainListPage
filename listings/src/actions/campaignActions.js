import data from '../data.json';
import {ActionType} from "./types";

const campaignData = [...data];

export const getCampaigns = (pageNumber) => {
  const start = (pageNumber - 1) * 10;
  const end = start + 10;
  const totalItems = campaignData.length;
  const pages = Array.from({length: Math.ceil(totalItems / 10)}, (x, i) => i + 1);
  const data = [];
  campaignData.slice(start, end).forEach((item) => data.push([item.company, item.name, item.type]));
  console.log(data);
  return {
    type: ActionType.CAMPAIGN_DETAILS,
    payload: {
      campaigns: data,
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

export const searchCampaigns = (searchText) => {
  const searchedCampaigns = campaignData.filter((data) => data.company.toLowerCase().includes(searchText.toLowerCase()));
  const totalItems = searchedCampaigns.length;
  const pages = Array.from({length: Math.ceil(totalItems / 10)}, (x, i) => i + 1);
  return {
    type: ActionType.CAMPAIGN_DETAILS,
    payload: {
      campaigns: searchedCampaigns.slice(0, 10),
      totalItems: totalItems + " items",
      pages,
    }
  }
}
