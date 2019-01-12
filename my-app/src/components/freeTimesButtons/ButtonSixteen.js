import React from "react";

function buttonSixteen(props) {
  return (
    <button
      id={props.buttonSixteen}
      className="timeButtons"
      value="16:00:00"
      onClick={props.event}
      disabled={props.disabled === "16:00:00"}
    >
     Kl: 16:00
    </button>
  );
}

export default buttonSixteen;
