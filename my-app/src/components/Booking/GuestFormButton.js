import React from "react";

function GuestFormButton(props) {
  return (
    <div className="guest-form-button-div">
      <button id="guest-person-info-button" onClick={props.event}>
        Fyll i mina personuppgifter
      </button>
    </div>
  );
}

export default GuestFormButton;
