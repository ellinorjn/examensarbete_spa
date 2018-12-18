import React from "react";

function readMoreTreatment(props) {
  return (
    <button className="read-more-button" value="body" onClick={props.event}>
      Visa alla
    </button>
  );
}

export default readMoreTreatment;
