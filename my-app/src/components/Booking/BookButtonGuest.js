import React from 'react';

function bookButtonGuest(props){
    return(
        <button className="bookButtonGuest" onClick={props.event}>BOKA SOM GÄST</button>
    )
}

export default bookButtonGuest;