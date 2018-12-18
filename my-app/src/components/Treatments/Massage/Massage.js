import React from "react";

function massage(props) {
  return (
    <div>
      <h2>MASSAGE</h2>
      <ul>
      <li>
          <div className="treatment-summary">
            <h3>Massage 1</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Massage 1"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Massage 2</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Massage 2"
            onClick={props.event}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Massage 3</h3>
            <p>
              En klassisk ansiktsbehandling med fokus på fukt{" "}
              <span>- 50 min</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Massage 3"
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

export default massage;
