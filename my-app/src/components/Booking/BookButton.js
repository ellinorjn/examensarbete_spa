import React from 'react';

function bookButton(props){
    return(
        <button className="book-button" onClick={props.event}>BOKA</button>
    )
}

export default bookButton;