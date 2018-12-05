import React from 'react';

function bookingSummary(props){
    return(
        <div id="booking-summary">
        <h1>Tack för din bokning</h1>
            <p>Namn: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Telefon: {props.phone_number}</p>
            <p>Behandling: {props.treatment}</p>
            
            <p>Tid: {props.time}</p>

        </div>
    )
}

export default bookingSummary;

//<p>Datum: {props.date}</p>