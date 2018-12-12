import React from "react";

function treatmentButtons(props) {
  return (
    <div className="flex-container">
      <button
        className="treatment-button"
        id="face-button"
        onClick={props.event}
      >
        ANSIKTE
      </button>
      <button
        className="treatment-button"
        id="body-button"
        onClick={props.event}
      >
        KROPPSBEHANDLINGAR
      </button>
      <button
        className="treatment-button"
        id="massage-button"
        onClick={props.event}
      >
        MASSAGE
      </button>
      <button
        className="treatment-button"
        id="lashes-button"
        onClick={props.event}
      >
        FRANSAR & BRYN
      </button>
    </div>
  );
}

export default treatmentButtons;
