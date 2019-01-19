import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import LoginForm from "../Login/LoginForm";
import Nav from "../nav";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false,
      name: ""
    };

    this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.errorMessageLogin = this.errorMessageLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.showBookings = this.showBookings.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }
  preventDefaultBehaviorSubmit(e) {
    e.preventDefault();
    this.checkLogin();
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkLogin() {
    let email = this.state.email;
    let password = this.state.password;

    /* Fetch person information based on email and password */
    fetch(
      "http://localhost/spa/my-app/database-connections/loginPersonalPage.php?email=" +
        email +
        "&password=" +
        password
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.information.length > 0) {
          this.hideLogin();
          this.showBookings(response);
        } else {
          this.errorMessageLogin();
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  errorMessageLogin() {
    let inlogFail = document.getElementById("inlog-fail");
    inlogFail.style.display = "block";
  }

  hideLogin() {
    let login = document.getElementById("personal-login");
    login.style.display = "none";
    this.setState({
      loggedIn: true
    });
  }

  /** List all bookings in a table plus a cancel button
   *  that holds the id of the booking */
  showBookings(response) {
    let personalBookingInfo = document.getElementById("personal-booking-info");
    let personalBookings = document.getElementById("personal-bookings");

   

    let content = ``;

    if (response.information < 1) {
      let personalBookings = document.getElementById("personal-bookings");
      content += `<div>inga bokade tider</div>`;
      personalBookings.innerHTML = content;
    } else {
      personalBookings.style.display = "block";
      response.information.forEach(function(element) {
        content += ` <div>
            <p>${element.treatment}</p>
            <p>${element.date}</p>
            <p>${element.time}</p>
            <button class="cancel-button" id=${
              element.ID
            } onClick="cancelBooking(this.id)">
			<i class="fas fa-trash-alt fa-2x"></i>Avboka
			</button></div>
			
			`;
      });
      personalBookingInfo.innerHTML = content;
    }
  }

  /** Cancel booking */
  componentDidMount() {
    window.cancelBooking = id => {
      let bookingID = {
        id: id
      };
      console.log(id);
      window.confirm("Är du säker på att du vill avboka din behandling?");

      return fetch(
        "http://localhost/spa/my-app/database-connections/cancelBooking.php",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(bookingID)
        }
      )
        .then(response => {
          console.log(response);
          this.checkLogin();
        })
        .catch(error => {
          console.error(error);
        });
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div id="personal-login">
          <p className="h1">
            Logga in för att se dina aktuella bokningar <br /> samt för att
            avboka behandlingar
          </p>
          <LoginForm
            preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div id="personal-bookings">
          {this.state.loggedIn && (
            <h1>Välkommen till dina bokningar</h1>
          )}
          <div id="booking-titles">
            <div>Behandling</div>
            <div>Datum</div>
            <div>Tid</div>
          </div>

          <div id="personal-booking-info" />
        </div>
      </div>
    );
  }
}

export default LoginPage;
