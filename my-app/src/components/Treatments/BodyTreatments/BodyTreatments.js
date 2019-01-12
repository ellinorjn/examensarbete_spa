import React from "react";

function bodyTreatments(props) {
  return (
    <div id="body-treatments-list">
      <h2>KROPPSBEHANDLINGAR</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Kroppsbehandling 1</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 1"
            onClick={props.event}
            id="body-1"
            disabled={props.disabled === "body-1"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Kroppsbehandling 2</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehangling 2"
            onClick={props.event}
            id="body-2"
            disabled={props.disabled === "body-2"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Kroppsbehandling 3</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 3"
            onClick={props.event}
            id="body-3"
            disabled={props.disabled === "body-3"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
      </ul>
    </div>
  );
}

export default bodyTreatments;
