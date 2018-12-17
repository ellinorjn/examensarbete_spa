import React from "react";

function massage(props) {
  return (
    <div>
      <h2>MASSAGE</h2>
      <ul>
        <li>
          <button
            className="treatmentButtonClass"
            value="Massage 1"
            onClick={props.event}
          >
            <p>
              Massage 1 -{" "}
              <span className="treatment-summary">
                en skön massage
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Massage 2"
            onClick={props.event}
          >
            <p>
              Massage 2 -{" "}
              <span className="treatment-summary">
                en skön massage
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Massage 3"
            onClick={props.event}
          >
            <p>
              Massage 3 -{" "}
              <span className="treatment-summary">
                en skön massage
              </span>
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default massage;
