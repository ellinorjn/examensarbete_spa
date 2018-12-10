import React from 'react';

function massage(props){
    return(
        <div>
            <ul>
                <li>Massage 1
                    <button className={props.treatmentButtonClass} value="Massage 1" onClick={props.event}>Välj</button>
                </li>
                <li>Massage 2
                    <button className={props.treatmentButtonClass} value="Massage 2" onClick={props.event}>Välj</button>
                </li>
                <li>Massage 3
                    <button className={props.treatmentButtonClass} value="Massage 3" onClick={props.event}>Välj</button>
                </li>
            </ul>
        </div>
    )
}

export default massage;