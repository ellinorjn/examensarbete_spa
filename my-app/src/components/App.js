import React, { Component } from 'react';
import BookingView from './BookingView';
import BookingCalendar from './BookingCalendar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <BookingCalendar/>
        <header className="App-header">
          <p>
            Här ska byggas spa!
          </p>
        </header>

        

      </div>

      
    );
  }
}

export default App;
