import React from 'react';

function registerForm(props){
    return(
        <form onSubmit={props.preventDefaultBehaviorSubmit}>
            Namn:<br/>
            <input type="text" name="name" onChange={props.handleChange} required/><br/>
            Email:<br/>
            <input type="text" name="email" onChange={props.handleChange} required/><br/>
            Telefonnummer:<br/>
            <input type="text" name="phone_number" onChange={props.handleChange} required/><br/>
            Lösenord:<br/>
            <input type="password" name="password" onChange={props.handleChange} required/><br/>
            
            <input type="submit" value="Registrera dig" onClick={props.preventDefaultBehaviorSubmit}/>
        </form>
    )
}

export default registerForm;