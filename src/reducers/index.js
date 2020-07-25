import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";
import employeeReducer from "./employeeReducer";
import baseReducer from "./baseReducer";

const rootReducers = combineReducers({
  campaign: campaignReducer,
  employee: employeeReducer,
  base: baseReducer,
});

export default rootReducers;
