import React from "react";

function buttonEleven(props) {
  return (
    <button
      id={props.buttonEleven}
      className="timeButtons"
      value="11:00:00"
      onClick={props.event}
      disabled={props.disabled === "11:00:00"}
    >
      Kl: 11:00
    </button>
  );
}

export default buttonEleven;
