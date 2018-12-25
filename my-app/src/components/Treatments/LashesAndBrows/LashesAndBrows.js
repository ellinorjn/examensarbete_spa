import React from "react";

function lashesAndBrows(props) {
  return (
    <div>
      <h2>FRANSAR OCH BRYN</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Fransar </h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Fransar"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Bryn</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Bryn"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Fransar & Bryn</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Fransar och Bryn"
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

export default lashesAndBrows;