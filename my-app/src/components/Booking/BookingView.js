import React, { Component } from "react";
import DatePicker from "react-datepicker";
import ButtonTen from "../freeTimesButtons/ButtonTen";
import ButtonEleven from "../freeTimesButtons/ButtonEleven";
import ButtonTwelve from "../freeTimesButtons/ButtonTwelve";
import ButtonFourteen from "../freeTimesButtons/ButtonFourteen";
import ButtonFifteen from "../freeTimesButtons/ButtonFifteen";
import ButtonSixteen from "../freeTimesButtons/ButtonSixteen";

import TreatmentButtons from "../Treatments/TreatmentButtons";
import FaceTreatments from "../Treatments/Face/FaceTreatments";
import Massage from "../Treatments/Massage/Massage";
import BodyTreatments from "../Treatments/BodyTreatments/BodyTreatments";
import LashesAndBrows from "../Treatments/LashesAndBrows/LashesAndBrows";
import BookingSummary from "../Booking/BookingSummary";
import BookingGuest from "../BookingGuest/BookingGuest";

import GuestFromButton from "./GuestFormButton";
//import ButtonGeneric from '../freeTimesButtons/ButtonGeneric';
import "react-datepicker/dist/react-datepicker.css";

import BookButton from "./BookButton";

class BookingView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      bookButton: false,
      bookButtonGuest: false,
      showBookingGuest: false,

      loggedIn: props.loggedIn
    };

    this.toggleTreatmentsAndCalendar = this.toggleTreatmentsAndCalendar.bind(
      this
    );
    this.showBookingButton = this.showBookingButton.bind(this);
    this.showFaceTreatments = this.showFaceTreatments.bind(this);
    this.showBookingGuest = this.showBookingGuest.bind(this);
  }

  bookingSummaryVisible() {
    let bookingSummary = document.getElementById("booking-summary");
    bookingSummary.style.display = "block";
  }

  showBookingButton() {
    this.setState({
      bookButton: true,
      bookButtonGuest: true
    });
  }

  toggleTreatmentsAndCalendar() {
    if (this.props.treatment !== "") {
      this.setState({
        showDatePicker: true
      });

      let treatments = document.getElementById("treatments");
      treatments.style.display = "none";
    } else {
      /** SKAPA MEDDELANDE ATT MAN MÅSTE VÄLJA BEHANDLING FÖR ATT KUNNA GÅ VIDARE */
    }
  }

  /** KORTA NER??? LOOP?  */
  showFaceTreatments(button) {
    let buttonId = button.target.id;
    if (buttonId === "face-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");

      faceTreatments.style.display = "block";
      bodyTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "none";
    }
    if (buttonId === "body-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");

      bodyTreatments.style.display = "block";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "none";
    }
    if (buttonId === "massage-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");

      bodyTreatments.style.display = "none";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "block";
      lashesTreatments.style.display = "none";
    }
    if (buttonId === "lashes-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");

      bodyTreatments.style.display = "none";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "block";
    }
  }

  showBookingGuest(){
    this.setState({
      showBookingGuest: true
    })
  }

  render() {
    let ten = "";
    let eleven = "";
    let twelve = "";
    let fourteen = "";
    let fifteen = "";
    let sixteen = "";


    if (this.props.buttonTen) {
      ten = (
        <ButtonTen
          buttonTen="buttonTen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }
    if (this.props.buttonEleven) {
      eleven = (
        <ButtonEleven
          buttonEleven="buttonEleven"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }
    if (this.props.buttonTwelve) {
      twelve = (
        <ButtonTwelve
          buttonTwelve="buttonTwelve"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }
    if (this.props.buttonFourteen) {
      fourteen = (
        <ButtonFourteen
          buttonFourteen="buttonFourteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }
    if (this.props.buttonFifteen) {
      fifteen = (
        <ButtonFifteen
          buttonFifteen="buttonFifteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }
    if (this.props.buttonSixteen) {
      sixteen = (
        <ButtonSixteen
          buttonSixteen="buttonSixteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
        />
      );
    }

    return (
      <div id="booking">
      <div id="treatments">
        <TreatmentButtons event={this.showFaceTreatments} />
        
          <div id="treatments-face">
            <FaceTreatments event={this.props.valueTreatmentButton} />
          </div>
          <div id="treatments-massage">
            <Massage event={this.props.valueTreatmentButton} />
          </div>
          <div id="treatments-body">
            <BodyTreatments event={this.props.valueTreatmentButton} />
          </div>
          <div id="treatments-lashes">
            <LashesAndBrows event={this.props.valueTreatmentButton} />
          </div>

          <button
            id="button-calendar"
            onClick={this.toggleTreatmentsAndCalendar}
          >
            FORTSÄTT TILL KALENDER
          </button>
        </div>

        <div id="date-picker">
          {this.state.showDatePicker && (
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={this.props.startDate}
              onChange={this.props.handleChange}
              popperPlacement="bottom"
              /** popperModifiers copied from https://github.com/Hacker0x01/react-datepicker/issues/1246 */
              popperModifiers={{
                flip: {
                  behavior: ["bottom"] // don't allow it to flip to be above
                },
                preventOverflow: {
                  enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                },
                hide: {
                  enabled: false // turn off since needs preventOverflow to be enabled
                }
              }}
            />
          )}
        </div>

        <div id="time-buttons">
        <div className="flex-container-time-buttons">
          {ten}
          {eleven}
          {twelve}
          </div>
          <div className="flex-container-time-buttons">
          {fourteen}
          {fifteen}
          {sixteen}
          </div>
        </div>

        {this.state.showBookingGuest && <BookingGuest
          date={this.props.date}
          time={this.props.time}
          treatment={this.props.treatment}
          id={this.props.id}
        />}

        <button onClick={this.bookingSummaryVisible}>Fortsätt</button>

        {this.props.showGuestFormButton && <GuestFromButton event={this.showBookingGuest}/> }
        <BookingSummary />

        <div id="book-button-div">
          {/** Button to book as an inlogged user only shows when logged in*/}
          {this.state.loggedIn && (
            <BookButton event={this.props.registerBooking} />
          )}
        </div>
      </div>
    );
  }
}

export default BookingView;
