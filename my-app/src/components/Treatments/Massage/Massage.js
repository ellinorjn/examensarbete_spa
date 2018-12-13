import React from "react";

function massage(props) {
  return (
    <div>
      <h2>MASSAGE</h2>
      <ul>
        <li>
          <p>Massage 1 </p>
          <button
            className={props.treatmentButtonClass}
            value="Massage 1"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Massage 2</p>
          <button
            className={props.treatmentButtonClass}
            value="Massage 2"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
        <li>
          <p>Massage 3</p>
          <button
            className={props.treatmentButtonClass}
            value="Massage 3"
            onClick={props.event}
          >
            Välj
          </button>
        </li>
      </ul>
    </div>
  );
}

export default massage;
