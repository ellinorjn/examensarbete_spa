import React from 'react';

function loginForm(props){
    return(
        <form onSubmit={props.preventDefaultBehaviorSubmit}>
            Username:<br/>
            <input type="text" name="email" onChange={props.handleChange}/><br/>
            Password:<br/>
            <input type="password" name="password" onChange={props.handleChange}/><br/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default loginForm;