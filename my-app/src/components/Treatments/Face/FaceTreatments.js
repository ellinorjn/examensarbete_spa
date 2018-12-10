import React from 'react';

function faceTreatments(props){
    return(
        <div>
            <ul>
                <li>Ansiktsbehandling 1
                    <button className={props.treatmentButtonClass} value="Ansiktsbehandling 1" onClick={props.event}>Välj</button>
                </li>
                <li>Ansiktsbehandling 2
                    <button className={props.treatmentButtonClass} value="Ansiktsbehandling 2" onClick={props.event}>Välj</button>
                </li>
                <li>Ansiktsbehandling 3
                    <button className={props.treatmentButtonClass} value="Ansiktsbehandling 3" onClick={props.event}>Välj</button>
                </li>
            </ul>
        </div>
    )
}

export default faceTreatments;