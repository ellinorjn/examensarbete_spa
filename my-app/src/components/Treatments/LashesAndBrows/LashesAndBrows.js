import React from "react";

function lashesAndBrows(props) {
  return (
    <div>
      <h2>FRANSAR OCH BRYN</h2>
      <ul>
        <li>
          <button
            className="treatmentButtonClass"
            value="Fransar"
            onClick={props.event}
          >
            <p>
              Fransar -{" "}
              <span className="treatment-summary">
                gör fransar
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Bryn"
            onClick={props.event}
          >
            <p>
              Bryn -{" "}
              <span className="treatment-summary">
                gör bryn
              </span>
            </p>
          </button>
        </li>
        <li>
          <button
            className="treatmentButtonClass"
            value="Fransar och Bryn"
            onClick={props.event}
          >
            <p>
              Fransar & Bryn -{" "}
              <span className="treatment-summary">
                gör fransar och bryn
              </span>
            </p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default lashesAndBrows;
