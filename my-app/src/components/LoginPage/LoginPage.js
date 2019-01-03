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
      loggedIn: false
    };

    this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.hideLogin = this.hideLogin.bind(this);
    this.showBookings = this.showBookings.bind(this);
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
        this.hideLogin();
        this.showBookings(response);
        if (response.information <= 0) {
          console.log("inga bokningar");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  hideLogin() {
    let loginForm = document.getElementById("login-form");
    loginForm.style.display = "none";
    this.setState({
      loggedIn: true
    });
  }

  showBookings(response) {
    let tableBody = document.getElementById("tableBody");
    let bookingsTable = document.getElementById("bookings-table");
    bookingsTable.style.display = "block";
    let content = ``;
    console.log(response);

    response.information.forEach(function(element) {
      content += `<tr class="table-light">
            <td>${element.treatment}</td>
            <td>${element.time}</td>
            <td><button class="cancel-button" id=${element.ID} onClick="cancelBooking(this.id)">
			<i class="fas fa-trash-alt fa-2x"></i>Avboka
			</button></td>
			</tr>
			`;
    });
    tableBody.innerHTML = content;
  }

  componentDidMount(){

  window.cancelBooking = (id) => {
    let bookingID = {
      id: id
    };
    console.log(id);

    return fetch("http://localhost/spa/my-app/database-connections/cancelBooking.php", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(bookingID)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

  render() {
    return (
      <div>
        <Nav />
        <LoginForm
          preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
          handleChange={this.handleChange}
        />
        <table id="bookings-table">
          <thead>
            <tr className="table-primary">
              <th>Behandling</th>
              <th>Tid</th>
            </tr>
          </thead>
          <tbody id="tableBody" />
        </table>
        {this.state.loggedIn}
      </div>
    );
  }
}

export default LoginPage;
