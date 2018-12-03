import React from 'react';

function faceTreatments(props){
    return(
        <div>
            <button className="faceTreatments" value="Ansiktsbehandling 1" onClick={props.event}>ANSIKTSBEHANDLING 1</button>
            <button className="faceTreatments" value="Ansiktsbehandling 2" onClick={props.event}>ANSIKTSBEHANDLING 2</button>
            <button className="faceTreatments" value="Ansiktsbehandling 3" onClick={props.event}>ANSIKTSBEHANDLING 3</button>
        </div>
    )
}

export default faceTreatments;