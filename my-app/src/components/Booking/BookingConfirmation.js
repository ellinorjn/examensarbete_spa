import React from 'react';

/* Creates a pop up with a confirmation on your registration
When the pop up is closed the login form is being shown */
const BookingConfirmation = (props) => {
	return(  
      <div id="booking-confirmation" className="modal">
        
        <div className="modal-content">
          <span id={props.spanID} onClick={props.event} className="close">&times;</span>
            <div>
              <p>tack för din bokning</p>
            </div>
        </div>
      </div> 
	)
};

export default BookingConfirmation;