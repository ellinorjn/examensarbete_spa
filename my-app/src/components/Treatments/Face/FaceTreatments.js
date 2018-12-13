import React from "react";

function faceTreatments(props) {
  return (
    <div>
      <h2>ANSIKTSBEHANDLINGAR</h2>
      <ul>
        <li>
          <p>Ansiktsbehandling 1</p>
          <button
            className={props.treatmentButtonClass}
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Ansiktsbehandling 2</p>
          <button
            className={props.treatmentButtonClass}
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Ansiktsbehandling 3</p>
          <button
            className={props.treatmentButtonClass}
            value="Ansiktsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
      </ul>
    </div>
  );
}

export default faceTreatments;
