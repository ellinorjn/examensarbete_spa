import React from "react";

function bookingForm(props) {
  return (
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
        id="guest-form-button"
        type="submit"
        value="Bekräfta personuppgifter"
        onClick={props.preventDefaultBehaviorSubmit}
      />
    </form>
  );
}

export default bookingForm;
