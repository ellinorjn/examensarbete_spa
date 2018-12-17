import React from "react";

function registerForm(props) {
  return (
    <div id="register-form">
      <form onSubmit={props.preventDefaultBehaviorSubmit}>
        Namn:
        <br />
        <input className="register-form-input" type="text" name="name" onChange={props.handleChange} required />
        <br />
        Email:
        <br />
        <input
        className="register-form-input"
          type="text"
          name="email"
          onChange={props.handleChange}
          required
        />
        <br />
        Telefonnummer:
        <br />
        <input
        className="register-form-input"
          type="text"
          name="phone_number"
          onChange={props.handleChange}
          required
        />
        <br />
        Lösenord:
        <br />
        <input
        className="register-form-input"
          type="password"
          name="password"
          onChange={props.handleChange}
          required
        />
        <br />
        <input type="submit" value="Registrera dig" onClick={props.event} />
      </form>
    </div>
  );
}

export default registerForm;
