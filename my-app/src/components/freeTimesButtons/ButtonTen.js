import React from "react";

function buttonTen(props) {
  return (
    <button
      id={props.buttonTen}
      className="timeButtons"
      value="10:00:00"
      onClick={props.event}
      disabled={props.disabled === "10:00:00"}
    >
      Kl: 10:00
    </button>
  );
}

export default buttonTen;
