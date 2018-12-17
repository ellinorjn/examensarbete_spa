import React from "react";

function faceTreatments(props) {
  return (
    <div>
      <h2>ANSIKTSBEHANDLINGAR</h2>
      <ul>
        <li>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            <p>
              Ansiktsbehandling 1 -{" "}
              <span className="treatment-summary">
                här är en ansiktsbehandling
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            <p>
              Ansiktsbehandling 2 -{" "}
              <span className="treatment-summary">
                här är en ansiktsbehandling
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            <p>
              Ansiktsbehandling 3 -{" "}
              <span className="treatment-summary">
                här är en ansiktsbehandling
              </span>
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default faceTreatments;
