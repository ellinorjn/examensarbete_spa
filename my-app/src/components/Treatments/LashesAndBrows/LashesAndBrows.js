import React from "react";

function lashesAndBrows(props) {
  return (
    <div>
      <h2>FRANSAR OCH BRYN</h2>
      <ul>
        <li>
          <p>Fransar</p>
          <button
            className={props.treatmentButtonClass}
            value="Fransar"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Bryn</p>
          <button
            className={props.treatmentButtonClass}
            value="Bryn"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Fransar och Bryn</p>
          <button
            className={props.treatmentButtonClass}
            value="Fransar och Bryn"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
      </ul>
    </div>
  );
}

export default lashesAndBrows;
