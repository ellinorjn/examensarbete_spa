import React from 'react';

function buttonNewUser(props){
    return(
        <button id="button-new-user" onClick={props.event}>Har du inte bokat behandling tidigare? Klicka här</button>
    )
}

export default buttonNewUser;