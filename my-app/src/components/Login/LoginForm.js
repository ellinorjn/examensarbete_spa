import React from 'react';

function loginForm(props){
    return(
        <div>
        <form onSubmit={props.preventDefaultBehaviorSubmit}>
            Username:<br/>
            <input type="text" name="email" onChange={props.handleChange}/><br/>
            Password:<br/>
            <input type="password" name="password" onChange={props.handleChange}/><br/>
            <input type="submit" value="Login"/>
        </form>
    
        <button onClick={props.event}>Har du inte bokat behandling tidigare? Klicka här</button>
        </div>
    )
}

export default loginForm;