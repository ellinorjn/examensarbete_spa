import React from "react";

function GuestFormButton(props) {
  return (
    <div id="guest-form-button-div">
      <button id="guest-form-button" onClick={props.event}>
        Fyll i mina personuppgifter
      </button>
    </div>
  );
}

export default GuestFormButton;
