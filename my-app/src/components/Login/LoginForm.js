import React from "react";

function loginForm(props) {
  return (
    <div className="modal-content" id="login-popup">
      <span id={props.spanID} /*onClick={props.event}*/ className="close">
        &times;
      </span>
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
    </div>
  );
}

export default loginForm;
