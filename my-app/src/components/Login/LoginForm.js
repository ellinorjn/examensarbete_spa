import React from "react";

function loginForm(props) {
  return (
      <div id="login-form">
        <h1>Logga in</h1>
        <form onSubmit={props.preventDefaultBehaviorSubmit}>
        <p id="inlog-fail">Du har skrivit fel mail eller lösenord. <br /> Detta meddelande visas också om det är så att du inte har några bokningar!</p>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="Email"
            onChange={props.handleChange}
          />
          <div className="line">
            <hr />
          </div>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Lösenord"
            onChange={props.handleChange}
          />
          <div className="line">
            <hr />
          </div>
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
