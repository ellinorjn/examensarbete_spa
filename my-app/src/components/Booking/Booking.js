import React, { Component } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import BookingCalendar from "../Booking/BookingCalendar";
import Nav from "../nav";
import GetDiscountButton from "./GetDiscountButton";
import YourDiscount from "./YourDiscount";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookingCalendar: true,
      showGetDiscountButton: true,
      showLogin: false,
      showRegister: false
    };

    this.showRegister = this.showRegister.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.closeLoginPopUp = this.closeLoginPopUp.bind(this);
    this.closeRegisterPopUp = this.closeRegisterPopUp.bind(this);
  }

  showRegister() {
    this.setState({
      showRegister: true,
      showLogin: false
    });
  }

  showLogin() {
    this.setState({
      showLogin: true,
      showBookingCalendar: false
    });
  }

  closeLoginPopUp() {
    let closeLoginPopUp = document.getElementById("login-popup");
    closeLoginPopUp.style.display = "none";
    this.setState({
      showBookingCalendar: true,
      showLogin: false
    });
  }

  closeRegisterPopUp(){
    let registerPopUp = document.getElementById("register-popup")
    registerPopUp.style.display = "none";
    this.setState({
      showBookingCalendar: true
    });
  }

  render() {
    return (
      <div className="booking-page">
        <Nav />
        {this.state.showGetDiscountButton && (
          <GetDiscountButton event={this.showLogin} />
        )}
        <YourDiscount />

        <div id="booking-calendar">
          {this.state.showBookingCalendar && <BookingCalendar />}
        </div>

        <div id="login">
          {this.state.showLogin && (
            <Login
              showRegister={this.showRegister}
              closeLoginPopUp={this.closeLoginPopUp}
            />
          )}
        </div>

        <div id="register">
          {this.state.showRegister && <Register showLogin={this.showLogin}
          closeRegisterPopUp={this.closeRegisterPopUp} />}
        </div>
      </div>
    );
  }
}

export default Booking;
