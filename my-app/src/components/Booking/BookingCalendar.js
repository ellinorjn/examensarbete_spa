import React, { Component } from "react";
import BookingView from "./BookingView";
import BookingConfirmation from "../Booking/BookingConfirmation";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

class BookingCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      time: "",
      treatment: "",

      showBookButton: false,

      buttonTen: false,
      buttonEleven: false,
      buttonTwelve: false,
      buttonFourteen: false,
      buttonFifteen: false,
      buttonSixteen: false,
      disabled: ""

    };

    this.handleChange = this.handleChange.bind(this);
    this.registerBooking = this.registerBooking.bind(this);
    this.valueTimeButton = this.valueTimeButton.bind(this);
    this.valueTreatmentButton = this.valueTreatmentButton.bind(this);
    this.showGuestFormButton = this.showGuestFormButton.bind(this);
    this.showBookButtonWhenLoggedIn = this.showBookButtonWhenLoggedIn.bind(this);
    this.showBookingConfirmation = this.showBookingConfirmation.bind(this);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });

    let bookingDate = moment(date).format("YYYY-MM-DD");

    /* Fetch all booking based on clicked date */
    fetch(
      "http://localhost/spa/my-app/database-connections/getBookingsByDate.php?date=" +
        bookingDate
    )
      .then(response => response.json())
      .then(response => {
        this.checkForAvailableTimes(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  checkForAvailableTimes(response) {
    if (response.ten < 4) {
      this.setState({
        buttonTen: true
      });
    } else {
      this.setState({
        buttonTen: false
      });
    }

    if (response.eleven < 4) {
      this.setState({
        buttonEleven: true
      });
    } else {
      this.setState({
        buttonEleven: false
      });
    }

    if (response.twelve < 4) {
      this.setState({
        buttonTwelve: true
      });
    } else {
      this.setState({
        buttonTwelve: false
      });
    }

    if (response.fourteen < 4) {
      this.setState({
        buttonFourteen: true
      });
    } else {
      this.setState({
        buttonFourteen: false
      });
    }

    if (response.fifteen < 4) {
      this.setState({
        buttonFifteen: true
      });
    } else {
      this.setState({
        buttonFifteen: false
      });
    }

    if (response.sixteen < 4) {
      this.setState({
        buttonSixteen: true
      });
    } else {
      this.setState({
        buttonSixteen: false
      });
    }
  }

  /**Get value from time buttons */
  valueTimeButton(button) {
    let buttonValue = button.target.value;
    this.setState({
      time: buttonValue,
      disabled: buttonValue
    });
    /** When a time-button is clicked - show book buttons depending if you are logged in or not */
    this.showGuestFormButton();
    this.showBookButtonWhenLoggedIn();
  }

  /** Get treatment button value */
  valueTreatmentButton(button) {
    let buttonValue = button.target.value;
    let id = button.target.id;
    this.setState({
      treatment: buttonValue,
      disabled: id
    }); 
  }

  /** When you are booking as a guest and a time button is clicked - show the button for filling in personal information  */
  showGuestFormButton() {
    if (this.props.time !== "" && this.props.loggedIn !== true) {
      this.setState({
        showGuestFormButton: true
      });
    }
  }

  /** When you are logged in and a time button is clicked - show book button */
  showBookButtonWhenLoggedIn() {
    if (this.props.time !== "" && this.props.loggedIn === true) {
      this.setState({
        showBookButton: true
      });
    }
  }

  /** Post booking information to BookTreatment.php when logged in */
  registerBooking() {
    let bookingInformation = {
      date: this.state.startDate,
      time: this.state.time,
      treatment: this.state.treatment,
      person_id: this.props.theId
    };

    if (
      this.state.startDate !== "" ||
      this.state.time !== "" ||
      this.state.treatment !== ""
    ) {
      return fetch(
        "http://localhost/spa/my-app/database-connections/bookTreatment.php",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(bookingInformation)
        }
      )
        .then(response => {
          console.log(response);
          this.showBookingConfirmation();
          this.hideBookingOptions();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  hideBookingOptions() {
    let bookingView = document.getElementById("booking");
    bookingView.style.display = "none";
  }

  showBookingConfirmation() {
    let showBookingConfirmation = document.getElementById(
      "booking-confirmation"
    );
    showBookingConfirmation.style.display = "block";
  }

  closeConfirmation() {
    let showBookingConfirmation = document.getElementById(
      "booking-confirmation"
    );
    showBookingConfirmation.style.display = "none";
  }

  render() {
    return (
      <div id="booking-view">
        <BookingView
          startDate={this.state.startDate}
          handleChange={this.handleChange}
          buttonTen={this.state.buttonTen}
          buttonEleven={this.state.buttonEleven}
          buttonTwelve={this.state.buttonTwelve}
          buttonFourteen={this.state.buttonFourteen}
          buttonFifteen={this.state.buttonFifteen}
          buttonSixteen={this.state.buttonSixteen}
          valueTimeButton={this.valueTimeButton}
          valueTreatmentButton={this.valueTreatmentButton}
          registerBooking={this.registerBooking}
          registerBookingGuest={this.registerBookingGuest}
          treatment={this.state.treatment}
          date={this.state.startDate}
          time={this.state.time}
          id={this.props.theId}
          loggedIn={this.props.loggedIn}
          showGuestFormButton={this.state.showGuestFormButton}
          showBookButtonWhenLoggedIn={this.state.showBookButton}
          disabled={this.state.disabled}
        />
        <BookingConfirmation event={this.closeConfirmation} />
      </div>
    );
  }
}

export default BookingCalendar;
