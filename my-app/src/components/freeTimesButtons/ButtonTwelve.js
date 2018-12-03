import React from 'react';

function buttonTwelve(props){
    return(
        <button id={props.buttonTwelve} className="timeButtons" value='12:00:00' onClick={props.event}>12:00</button>
    )
}

export default buttonTwelve;