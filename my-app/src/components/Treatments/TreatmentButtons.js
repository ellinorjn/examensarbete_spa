import React from 'react';

function treatmentButtons(props){
    return(
        <div>
           <button id="face-button" onClick={props.event}>ANSIKTE</button>
           <button id="body-button" onClick={props.event}>KROPPSBEHANDLINGAR</button>
           <button id="massage-button" onClick={props.event}>MASSAGE</button>
           <button id="lashes-button" onClick={props.event}>FRANSAR & BRYN</button>
        </div>
    )
}

export default treatmentButtons;