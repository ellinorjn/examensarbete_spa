import React from "react";

function faceTreatments(props) {
  return (
    <div>
      <h2>ANSIKTSBEHANDLINGAR</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Ansiktsbehandling 1</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Ansiktsbehandling 2</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 2"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Ansiktsbehandling 3</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 3"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
      </ul>
    </div>
  );
}

export default faceTreatments;
