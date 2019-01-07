import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import LoginForm from "../Login/LoginForm";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };

    this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
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
    if (email === "admin@stockholmspa.se" && password === "hejhej") {
      fetch(
        "http://localhost/spa/my-app/database-connections/admin.php?email=" +
          email +
          "&password=" +
          password
      )
        .then(response => response.json())
        .then(response => {
          this.hideLogin();
          console.log(response);
          /* Show information (number of bookings, time, date) based on the response when logged in */
          this.showBookings(response);
          if (response.information <= 0) {
            console.log("inga bokningar");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  hideLogin() {
    let loginForm = document.getElementById("login-form");
    loginForm.style.display = "none";
    this.setState({
      loggedIn: true
    });
  }

  /** List all bookings in a table plus a cancel button
   *  that holds the id of the booking */
  showBookings(response) {
    let tableBody = document.getElementById("tableBody");
    let bookingsTable = document.getElementById("bookings-table");
    bookingsTable.style.display = "block";

    let content = ``;

    response.bookings.forEach(function(element) {
      content += `<tr class="table-light">
            <td>${element.name}</td>
            <td>${element.treatment}</td>
            <td>${element.date}</td>
            <td>${element.time}</td>
            <td><button class="cancel-button" id=${
              element.ID
            } onClick="cancelBooking(this.id)">
			<i class="fas fa-trash-alt fa-2x"></i>Avboka
			</button></td>
			</tr>
			`;
    });
    tableBody.innerHTML = content;
  }

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
        <LoginForm
          preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
          handleChange={this.handleChange}
        />
        <div id="personal-bookings">
          {this.state.loggedIn && (
            <h1>Stockholm Spa bokningar</h1>
          )}
          <table id="bookings-table">
            <thead>
              <tr className="table-primary">
                <th>Namn</th>
                <th>Behandling</th>
                <th>Datum</th>
                <th>Tid</th>
              </tr>
            </thead>
            <tbody id="tableBody" />
          </table>
        </div>
      </div>
    );
  }
}

export default Admin;
