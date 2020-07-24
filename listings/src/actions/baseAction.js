import {ActionType} from "./types";

export const toggleModal = (showModal, type, meta) => {
  return {
    type: ActionType.SHOW_MODAL,
    payload: {
      showModal,
      type,
      meta,
    }
  };
}
