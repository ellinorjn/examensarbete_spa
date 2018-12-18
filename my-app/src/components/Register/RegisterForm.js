import React from "react";

function registerForm(props) {
  return (
    <div id="register-form">
    <h1>Registrera dig</h1>
      <form onSubmit={props.preventDefaultBehaviorSubmit}>
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Namn"
          onChange={props.handleChange}
          required
        />
        <br />
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
          required
        />
        <br />
        <input
          className="form-input"
          type="text"
          name="phone_number"
          placeholder="Telefonnummer"
          onChange={props.handleChange}
          required
        />
        <br />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Lösenord"
          onChange={props.handleChange}
          required
        />
        <br />
        <input id="register-button" type="submit" value="Registrera dig" onClick={props.event} />
      </form>
    </div>
  );
}

export default registerForm;
