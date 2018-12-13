import React from "react";

function bodyTreatments(props) {
  return (
    <div>
      <h2>KROPPSBEHANDLINGAR</h2>
      <ul>
        <li>
          <p>Kroppsbehandling 1</p>
          <button
            className={props.treatmentButtonClass}
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Kroppsbehandling 2</p>
          <button
            className={props.treatmentButtonClass}
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Kroppsbehandling 3</p>
          <button
            className={props.treatmentButtonClass}
            value="Kroppsbehandling 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
      </ul>
    </div>
  );
}

export default bodyTreatments;
