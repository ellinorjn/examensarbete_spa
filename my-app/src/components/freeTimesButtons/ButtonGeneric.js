import React from 'react';

function buttonGeneric(props){
    return(
        <div>
        <button id={props.buttonTen} className="timeButtons" value='10:00:00' onClick={props.event}>10:00</button>
        <button id={props.buttonEleven} className="timeButtons" value='11:00:00' onClick={props.event}>11:00</button>
        <button id={props.buttonTwelve} className="timeButtons" value='12:00:00' onClick={props.event}>12:00</button>
        <button id={props.buttonFourteen} className="timeButtons" value='14:00:00' onClick={props.event}>14:00</button>
        <button id={props.buttonFifteen} className="timeButtons" value='15:00:00' onClick={props.event}>15:00</button>
        <button id={props.buttonSixteen} className="timeButtons" value='16:00:00' onClick={props.event}>16:00</button>
        </div>
    )
}

export default buttonGeneric;