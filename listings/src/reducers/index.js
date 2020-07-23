import { combineReducers } from "redux";
import campaignReducer from "./campaignReducer";
import employeeReducer from "./employeeReducer";

const rootReducers = combineReducers({
  campaign: campaignReducer,
  employee: employeeReducer,
});

export default rootReducers;
