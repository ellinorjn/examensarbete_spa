import React from 'react';

/* Creates a pop up with a confirmation on your registration
When the pop up is closed the login form is being shown */
const BookingConfirmation = (props) => {
	return(  
      <div id="booking-confirmation" className="modal">
        
        <div className="modal-content">
          <span id={props.spanID} onClick={props.event} className="close">&times;</span>
            <div id="booking-confirmation-message">
              <h3>Tack för din bokning hos oss på Stockholm Spa!</h3>
              <p>En bokningsbekräftelse har blivit skickad till mailen du angav vid bokning.</p>
              <p>Varmt välkommen till oss!</p>
              <p>Stockholm Spa</p>
            </div>
        </div>
      </div> 
	)
};

export default BookingConfirmation;