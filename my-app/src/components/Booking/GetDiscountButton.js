import React from 'react';

function getDiscountButton(props){
    return(
        <div>
           <button onClick={props.event}>JAG VILL LOGGA IN ELLER REGISTRERA MIG OCH FÅ 5% RABATT</button>
        </div>
    )
}

export default getDiscountButton;