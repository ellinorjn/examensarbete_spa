import React from 'react';

function bodyTreatments(props){
    return(
        <div>
            <ul>
                <li>Kroppsbehandling 1
                    <button className={props.treatmentButtonClass} value="Kroppsbehandling 1" onClick={props.event}>Välj</button>
                </li>
                <li>Kroppsbehandling 2
                    <button className={props.treatmentButtonClass} value="Kroppsbehandling 2" onClick={props.event}>Välj</button>
                </li>
                <li>Kroppsbehandling 3
                    <button className={props.treatmentButtonClass} value="Kroppsbehandling 3" onClick={props.event}>Välj</button>
                </li>
            </ul>
        </div>
    )
}

export default bodyTreatments;