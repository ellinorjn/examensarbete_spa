import React, { Component } from 'react';
import Login from '../Login/Login'
import Register from '../Register/Register';
import BookingCalendar from '../Booking/BookingCalendar';
import Nav from '../nav';
import GetDiscountButton from './GetDiscountButton';

class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      showBookingCalendar: true,
      showGetDiscountButton: true,
      showLogin: false,
      showRegister: false
    }

    this.showRegister = this.showRegister.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }

  showRegister(){
    this.setState({
      showRegister: true,
      showLogin: false
    })
  }

  showLogin(){
    this.setState({
      showRegister: false,
      showLogin: true,
      showBookingCalendar: false,
      showGetDiscountButton: false
    })
  }
 

  render() {
    return (
      <div className="Booking">
        <div id="booking-header">
          <Nav />
          {this.state.showGetDiscountButton && <GetDiscountButton event={this.showLogin}/>}
        </div>

        <div id="booking-calendar">
          {this.state.showBookingCalendar && <BookingCalendar />}
        </div>

        <div id="login">
          {this.state.showLogin && <Login showRegister={this.showRegister}/>}
        </div>

        <div id="register">
          {this.state.showRegister && <Register showLogin={this.showLogin} />}
        </div>

      </div>
    );
  }
}

export default Booking;