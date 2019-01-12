import React from "react";

function buttonFifteen(props) {
  return (
    <button
      id={props.buttonFifteen}
      className="timeButtons"
      value="15:00:00"
      onClick={props.event}
      disabled={props.disabled === "15:00:00"}
    >
      Kl: 15:00
    </button>
  );
}

export default buttonFifteen;
