import {ActionType} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case ActionType.SHOW_MODAL:
      return {
        ...state,
        payload: { ...action.payload },
      }

    default:
      return state;
  }
}
