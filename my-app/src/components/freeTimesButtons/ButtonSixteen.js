import React from 'react';

function buttonSixteen(props){
    return(
        <button id={props.buttonSixteen} className="timeButtons" value='16:00:00' onClick={props.event}>16:00</button>
    )
}

export default buttonSixteen;