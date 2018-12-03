import React, { Component } from 'react';
import BookingCalendar from './Booking/BookingCalendar';
import '../App.css';
import Login from './Login/Login';
import Register from './Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">

      <h1>Kalender</h1>
      <BookingCalendar/>
      
      <h1>Inloggning</h1>
      <Login/>
      
      <h1>Registrering</h1>
      <Register/>
        

      </div>

      
    );
  }
}

export default App;
