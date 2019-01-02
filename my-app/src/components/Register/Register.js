import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import RegisterConfirmation from "./RegisterConfirmation";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone_number: "",
      password: ""
    };
    this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.registerUser = this.registerUser.bind(this);

    this.showRegisterConfirmation = this.showRegisterConfirmation.bind(this);
    this.closeConfirmation = this.closeConfirmation.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  preventDefaultBehaviorSubmit(e) {
    e.preventDefault();
  }

  showRegisterConfirmation() {
    let showRegisterConfirmation = document.getElementById(
      "register-confirmation"
    );
    showRegisterConfirmation.style.display = "block";
  }

  /** Close the confirmation popup and the register popup */
  closeConfirmation() {
    let showRegisterConfirmation = document.getElementById(
      "register-confirmation"
    );
    let registerPopUp = document.getElementById("register-popup");

    showRegisterConfirmation.style.display = "none";
    registerPopUp.style.display ="none";
    /** When registered and confirmation is closed - show login field to be able login */
    this.props.showLogin();
  }

  registerUser() {
    let personInformation = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      password: this.state.password
    };
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.phone_number !== "" &&
      this.state.password !== ""
    ) {
      return fetch(
        "http://localhost/spa/my-app/database-connections/registerUser.php",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(personInformation)
        }
      )
        .then(response => {
          this.showRegisterConfirmation();
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <div className="modal-content" id="register-popup">
          <span onClick={this.props.closeRegisterPopUp} className="close">
            &times;
          </span>
          <RegisterForm
            preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
            event={this.registerUser}
            handleChange={this.handleChange}
          />
        </div>
        <RegisterConfirmation event={this.closeConfirmation} />
      </div>
    );
  }
}

export default Register;
