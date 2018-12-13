import React from "react";

function GuestFormButton(props) {
  return (
    <button
      id="guest-form-button"
      onClick={props.event}
    >
      Fyll i mina personuppgifter
    </button>
  );
}

export default GuestFormButton;
