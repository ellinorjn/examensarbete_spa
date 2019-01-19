import React from "react";

function faceTreatments(props) {
  return (
    <div>
      <h2>ANSIKTSBEHANDLINGAR</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Klassisk ansiktsbehandling</h3>
            <p>
            En klassisk ansiktsbehandling som innehåller rengöring, hudanalys, peeling samt ansiktsmassage{" "}
              <span>- 50 min - 900:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 1"
            onClick={props.event}
            id="face_1"
            disabled={props.disabled === "face_1"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>

        <li>
          <div className="treatment-summary">
            <h3>Djuprengörande ansiktsbehandling</h3>
            <p>
            En ansiktsbehandling med fokus på djuprengöring{" "}
              <span>- 55 min - 900:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 2"
            onClick={props.event}
            id="face_2"
            disabled={props.disabled === "face_2"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>

        <li>
          <div className="treatment-summary">
            <h3>Fuktbomb</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min - 900:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Ansiktsbehandling 3"
            onClick={props.event}
            id="face_3"
            disabled={props.disabled === "face_3"}
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
