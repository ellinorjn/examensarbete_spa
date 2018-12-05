import React from 'react';

function bookButton(props){
    return(
        <button className="bookButton" onClick={props.event}>BOKA</button>
    )
}

export default bookButton;