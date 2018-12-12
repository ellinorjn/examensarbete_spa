import React from 'react';

function bookingForm(props){
    return(
        <form onSubmit={props.preventDefaultBehaviorSubmit}>
            Namn:<br/>
            <input type="text" name="name" onChange={props.handleChange} required/><br/>
            Email:<br/>
            <input type="text" name="email" onChange={props.handleChange} required/><br/>
            
            <input type="submit" value="Bekräfta personuppgifter" onClick={props.preventDefaultBehaviorSubmit}/>
        </form>
    )
}

export default bookingForm;