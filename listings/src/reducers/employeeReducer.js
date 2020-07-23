import {ActionType} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case ActionType.EMPLOYEE_DETAILS:
      return {
        ...state,
        payload: action.payload
      }

    default:
      return state;
  }
}
