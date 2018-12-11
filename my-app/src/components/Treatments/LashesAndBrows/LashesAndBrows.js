import React from "react";

function lashesAndBrows(props) {
  return (
    <div>
      <ul>
        <li>
          Fransar
          <button
            className={props.treatmentButtonClass}
            value="Fransar"
            onClick={props.event}>
            Välj
          </button>
        </li>
        <li>
          Bryn
          <button
            className={props.treatmentButtonClass}
            value="Bryn"
            onClick={props.event}>
            Välj
          </button>
        </li>
        <li>
          Fransar och Bryn
          <button
            className={props.treatmentButtonClass}
            value="Fransar och Bryn"
            onClick={props.event}>
            Välj
          </button>
        </li>
      </ul>
    </div>
  );
}

export default lashesAndBrows;
