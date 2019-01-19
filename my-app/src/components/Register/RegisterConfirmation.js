import React from "react";

/* Creates a pop up with confirmation on your registration
When the pop up is closed the login form is being shown */
const RegisterConfirmation = props => {
  return (
    <div id="register-confirmation" className="modal">
      <div className="modal-content">
        <span id={props.spanID} onClick={props.event} className="close">
          &times;
        </span>
        <div>
          <h1>Tack för att du registrerat dig!</h1>
          <p>
            Du kan nu logga in och få 5% rabatt på alla dina bokningar. Genom
            att stänga den här rutan kommer du direkt till inloggningen{" "}
          </p>
          <p>Varmt välkommen till oss på Stockholm Spa! </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterConfirmation;
