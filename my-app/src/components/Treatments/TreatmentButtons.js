import React from "react";

function treatmentButtons(props) {
  return (
    <div className="flex-container">
      <div className="face-button-div">
      <button
        className="treatment-button"
        id="face-button"
        onClick={props.event}
      >
        <div className="treatment-button-text">ANSIKTE</div>
      </button>
      </div>
      <div className="body-treatment-button-div">
      <button
        className="treatment-button"
        id="body-button"
        onClick={props.event}
      >
        <div className="treatment-button-text">KROPPSBEHANDLINGAR</div>
      </button>
      </div>
      <div className="massage-button-div">
      <button
        className="treatment-button"
        id="massage-button"
        onClick={props.event}
      >
        <div className="treatment-button-text">MASSAGE</div>
      </button>
      </div>
      <div className="lashes-button-div">
      <button
        className="treatment-button"
        id="lashes-button"
        onClick={props.event}
      >
        <div className="treatment-button-text">FRANSAR & BRYN</div>
      </button>
      </div>
    </div>
  );
}

export default treatmentButtons;
