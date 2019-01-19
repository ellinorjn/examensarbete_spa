import React from "react";
import { Link } from "react-router-dom";

/* Creates a pop up with booking confirmation 
When the pop up is closed you will return to home page */
const BookingConfirmation = props => {
  return (
    <div id="booking-confirmation" className="modal">
      <div className="modal-content">
        <Link to="/">
          <span id={props.spanID} onClick={props.event} className="close">
            &times;
          </span>
        </Link>
        <div id="booking-confirmation-message">
          <h3>Tack för din bokning hos oss på Stockholm Spa!</h3>
          <p>
            En bokningsbekräftelse har blivit skickad till mailen du angav vid
            bokning.
          </p>
          <p>Varmt välkommen till oss!</p>
          <p>Stockholm Spa</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
