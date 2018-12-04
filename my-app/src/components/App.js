import React, { Component } from 'react';
import BookingCalendar from './Booking/BookingCalendar';
import Login from'./Login/Login';
import Register from './Register/Register';
import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showBookingCalendar: true,
      showLogin: false,
      showRegister: false
    }

    this.toggleBookingView = this.toggleBookingView.bind(this);
    this.showRegister = this.showRegister.bind(this);
  }

  toggleBookingView(){
    this.setState({
      showBookingCalendar: false,
      showLogin: true
    })
  }

  showRegister(){
    this.setState({
      showRegister: true,
      showLogin: false
    })
  }

  render() {
    return (
      <div className="App">
    
        <div>
          <h1>Kalender</h1>
          {this.state.showBookingCalendar && <BookingCalendar toggleBookingView={this.toggleBookingView}/>}
        </div>

        <div id="login">
          <h1>Inloggning</h1>
          {this.state.showLogin && <Login showRegister={this.showRegister} />}
        </div>

        <div id="register">  
          <h1>Registrering</h1>
          {this.state.showRegister && <Register />}
        </div>
      </div>
    );
  }
}

export default App;
