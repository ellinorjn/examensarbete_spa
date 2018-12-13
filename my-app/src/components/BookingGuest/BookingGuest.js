import React, { Component } from "react";
import BookingForm from "./BookingForm";

class BookingGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.registerBookingGuest = this.registerBookingGuest.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  preventDefaultBehaviorSubmit(e) {
    this.registerBookingGuest();
    /** When registered show login field to login */
    //this.props.showLogin();
    e.preventDefault();
  }

  registerBookingGuest() {
    let bookingInformation = {
      name: this.state.name,
      email: this.state.email,
      date: this.props.date,
      time: this.props.time,
      treatment: this.props.treatment
    };
    console.log(bookingInformation);

    if (
      this.props.startDate === "" ||
      this.props.time === "" ||
      this.props.treatment === ""
    ) {
      /**SKAPA MEDDELANDE ATT MAN MÅSTE VÄLJA ALLT FÖR ATT SLUTFÖRA BOKNINGEN */
      alert("NO!!!");
    } else {
      return fetch(
        "http://localhost/spa/my-app/database-connections/bookingGuest.php",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(bookingInformation)
        }
      )
        .then(response => {
          //this.hideBookingOptions();
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div id="guest-booking-form">
        <BookingForm
          preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default BookingGuest;
