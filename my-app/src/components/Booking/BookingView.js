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
import BookingGuest from "../BookingGuest/BookingGuest";

import GuestFormButton from "./GuestFormButton";
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

      loggedIn: props.loggedIn,
      disabled: ""
   
    };

    this.toggleTreatmentsAndCalendar = this.toggleTreatmentsAndCalendar.bind(
      this
    );
    //this.showBookingButton = this.showBookingButton.bind(this);
    this.showFaceTreatments = this.showFaceTreatments.bind(this);
    this.showBookingGuest = this.showBookingGuest.bind(this);
    
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
      let buttonCalendar = document.getElementById("button-calendar");

      faceTreatments.style.display = "block";
      bodyTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "none";
      buttonCalendar.style.display = "block";

      window.scrollBy(0, 600);
    }
    if (buttonId === "body-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");
      let buttonCalendar = document.getElementById("button-calendar");

      bodyTreatments.style.display = "block";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "none";
      buttonCalendar.style.display = "block";

      window.scrollBy(0, 600);
    }
    if (buttonId === "massage-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");
      let buttonCalendar = document.getElementById("button-calendar");

      bodyTreatments.style.display = "none";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "block";
      lashesTreatments.style.display = "none";
      buttonCalendar.style.display = "block";

      window.scrollBy(0, 600);
    }
    if (buttonId === "lashes-button") {
      let faceTreatments = document.getElementById("treatments-face");
      let bodyTreatments = document.getElementById("treatments-body");
      let massageTreatments = document.getElementById("treatments-massage");
      let lashesTreatments = document.getElementById("treatments-lashes");
      let buttonCalendar = document.getElementById("button-calendar");

      bodyTreatments.style.display = "none";
      faceTreatments.style.display = "none";
      massageTreatments.style.display = "none";
      lashesTreatments.style.display = "block";
      buttonCalendar.style.display = "block";

      window.scrollBy(0, 600);
    }
  }

  showBookingGuest() {
    this.setState({
      showBookingGuest: true
    });
    let timeButtons = document.getElementById("time-buttons");
    let calendar = document.getElementById("date-picker");
    let personInformationButton = document.getElementById("guest-person-info-button");
    timeButtons.style.display = "none";
    calendar.style.display = "none";
    personInformationButton.style.display = "none";
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
          disabled={this.props.disabled}
        />
      );
    }
    if (this.props.buttonEleven) {
      eleven = (
        <ButtonEleven
          buttonEleven="buttonEleven"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
          disabled={this.props.disabled}
        />
      );
    }
    if (this.props.buttonTwelve) {
      twelve = (
        <ButtonTwelve
          buttonTwelve="buttonTwelve"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
          disabled={this.props.disabled}
        />
      );
    }
    if (this.props.buttonFourteen) {
      fourteen = (
        <ButtonFourteen
          buttonFourteen="buttonFourteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
          disabled={this.props.disabled}
        />
      );
    }
    if (this.props.buttonFifteen) {
      fifteen = (
        <ButtonFifteen
          buttonFifteen="buttonFifteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
          disabled={this.props.disabled}
        />
      );
    }
    if (this.props.buttonSixteen) {
      sixteen = (
        <ButtonSixteen
          buttonSixteen="buttonSixteen"
          onChange={this.props.handleChange}
          event={this.props.valueTimeButton}
          disabled={this.props.disabled}
        />
      );
    }

    return (
      <div className="booking">
          <h1>Boka behandling</h1>
        
        <div id="treatments">
          <TreatmentButtons event={this.showFaceTreatments} />

          <div id="treatments-face">
            <FaceTreatments event={this.props.valueTreatmentButton}
                            disabled={this.props.disabled} />
          </div>
          <div id="treatments-massage">
            <Massage event={this.props.valueTreatmentButton}
            disabled={this.props.disabled} />
          </div>
          <div id="treatments-body">
            <BodyTreatments event={this.props.valueTreatmentButton}
            disabled={this.props.disabled} />
          </div>
          <div id="treatments-lashes">
            <LashesAndBrows event={this.props.valueTreatmentButton}
            disabled={this.props.disabled} />
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
              /** Disable dates before todays date */
              minDate={this.props.startDate}
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

        {this.state.showBookingGuest && (
          <BookingGuest
            date={this.props.date}
            time={this.props.time}
            treatment={this.props.treatment}
            id={this.props.id}
          />
        )}

        {this.props.showGuestFormButton && (
          <GuestFormButton event={this.showBookingGuest} />
        )}

        
          {/** Button to book as an inlogged user only shows when logged in*/}
          { this.props.showBookButtonWhenLoggedIn && (
            <BookButton event={this.props.registerBooking} />
          )}
        
      </div>
    );
  }
}

export default BookingView;

// this.state.loggedIn &&