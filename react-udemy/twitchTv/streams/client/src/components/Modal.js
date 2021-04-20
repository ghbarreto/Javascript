import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={
        /* How to close modal when use clicks outside the modal */
        props.onDismiss
      }
      className="ui dimmer modals visible active"
    >
      <div
        onClick={
          /* How to prevent modal from closing when clicking inside of it */ e =>
            e.stopPropagation()
        }
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    // display on top of the div root so the modal appears in front of everything
    // create a div with another ID inside the index.html file inside the public directory
    document.querySelector("#modal")
  );
};

export default Modal;
