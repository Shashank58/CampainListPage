import React, {Fragment, useState} from "react";
import styles from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import {toggleModal} from "../../actions/baseAction";
import {updateCampaign} from "../../actions/campaignActions";
import {ModalDataType} from "../../constants";

const Modal = (props) => {
  const [input, setInput] = useState(props.meta?.title);
  const dispatch = useDispatch();
  if (props.showModal) {
    return (
        <div
            role="button"
            className={styles.modalWrapper}
            onClick={e => e.stopPropagation()}
        >
          <div
              role="button"
              className={styles.modal}
          >
            <input className={styles.input} onChange={e => setInput(e.target.value)} defaultValue={props.meta?.title} />
            <div className={styles.actionsContainer}>
              <button className={styles.cancelButton} onClick={() => dispatch(toggleModal(false))}>Cancel</button>
              <button className={styles.saveButton} onClick={() => {
                if (ModalDataType.CAMPAIGN) {
                  dispatch(updateCampaign(props.meta?.pageNumber, props.meta?.index, input));
                } else {
                  dispatch();
                }
                dispatch(toggleModal(false));
              }}>Save</button>
            </div>
          </div>
        </div>
    );
  }
  return null;
}

export default Modal;
