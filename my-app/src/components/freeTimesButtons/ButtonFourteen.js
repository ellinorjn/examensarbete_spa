import React from 'react';

function buttonFourteen(props){
    return(
        <button id={props.buttonFourteen} className="timeButtons" value='14:00:00' onClick={props.event}>14:00</button>
    )
}

export default buttonFourteen;