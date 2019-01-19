import React from "react";

function bookingForm(props) {
  return (
    <form onSubmit={props.preventDefaultBehaviorSubmit}>
    <p id="form-not-correct">Du måste fylla i alla fält för att kunna boka</p>
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Namn"
        onChange={props.handleChange}
        required
      />
      <div className="line"><hr/></div>
      <input
        className="form-input"
        type="text"
        name="email"
        placeholder="Email"
        onChange={props.handleChange}
        required
      />
      <div className="line"><hr/></div>
      <div className="guest-form-button-div">
      <input
        className="guest-form-button"
        type="submit"
        value="Bekräfta personuppgifter"
        onClick={props.preventDefaultBehaviorSubmit}
      />
      </div>
    </form>
  );
}

export default bookingForm;
