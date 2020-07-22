import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";

const rootReducers = combineReducers({
  campaign: campaignReducer
});

export default rootReducers;
