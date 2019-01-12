import React from "react";

function buttonFourteen(props) {
  return (
    <button
      id={props.buttonFourteen}
      className="timeButtons"
      value="14:00:00"
      onClick={props.event}
      disabled={props.disabled === "14:00:00"}
    >
      Kl: 14:00
    </button>
  );
}

export default buttonFourteen;
