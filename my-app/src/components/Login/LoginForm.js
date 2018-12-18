import React from "react";

function loginForm(props) {
  return (
    <div id="login-form">
      <h1>Logga in</h1>
      <form onSubmit={props.preventDefaultBehaviorSubmit}>
        <input
        className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
        />  
        <br />
        <input
        className="form-input"
          type="password"
          name="password"
          placeholder="Lösenord"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="submit"
          value="Logga in"
          id="submit-login"
          onClick={props.event}
        />
      </form>
    </div>
  );
}

export default loginForm;
