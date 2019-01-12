import React from "react";

function buttonTwelve(props) {
  return (
    <button
      id={props.buttonTwelve}
      className="timeButtons"
      value="12:00:00"
      onClick={props.event}
      disabled={props.disabled === "12:00:00"}
    >
     Kl: 12:00
    </button>
  );
}

export default buttonTwelve;
