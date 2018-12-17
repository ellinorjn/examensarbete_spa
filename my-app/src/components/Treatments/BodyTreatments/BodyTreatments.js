import React from "react";

function bodyTreatments(props) {
  return (
    <div id="body-treatments-list">
      <h2>KROPPSBEHANDLINGAR</h2>
      <ul>
        <li>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            <p>
              Kroppsbehandling 1 -{" "}
              <span className="treatment-summary">
                här är en ansiktsbehandling
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            <p>
              Kroppsbehandling 2 -{" "}
              <span className="treatment-summary">
                här är en ansiktsbehandling
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            <p>
              Kroppsbehandling 1 -{" "}
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

export default bodyTreatments;
