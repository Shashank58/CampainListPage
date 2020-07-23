import React from "react";
import { withRouter } from "react-router-dom";

const Modal = (props) => (
    <div
        role="button"
        className="modalWrapper"
        onClick={() => props.history.goBack()}
    >
      <div
          role="button"
          className="modal"
          onClick={e => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
);

export default withRouter(Modal);
