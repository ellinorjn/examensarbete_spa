import React, { Component } from 'react';
import Login from '../Login/Login'
import Register from '../Register/Register';
import BookButton from './BookButton';

class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false,
      showBookButton: false
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
      showLogin: true
    })
  }

 

  render() {
    return (
      <div className="Booking">
        <div id="login">
          {this.state.showLogin && <Login showRegister={this.showRegister}
                                          />}
        </div>

        <div id="register">
          {this.state.showRegister && <Register showLogin={this.showLogin} />}
        </div>

      </div>
    );
  }
}

export default Booking;

/*<div id="bookButton">
{this.state.showBookButton && <BookButton event={this.props.registerBooking} />}
</div>*/