import React, { Component } from 'react';
import BookingView from './BookingView.js';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class BookingCalendar extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        startDate: new Date()
      };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(date) {
    this.setState({
      startDate: date
    });

    let bookingDate = moment(date).format('YYYY-MM-DD');
    console.log(bookingDate);

    /* Fetch all booking based on clicked date */ 
    fetch('http://localhost/spa/my-app/database-connections/getBookingsByDate.php?date=' + bookingDate)
    .then((response) => response.json())
     .then((response) => {
        console.log(response); 
      })
      .catch((error) => {
        console.error(error);
      })
  }

  render() {
    
    return (
      <div id="bookingView">
          <BookingView  startDate={this.state.startDate} 
                        handleChange={this.handleChange}
          />
      </div>
    )
  }
}

export default BookingCalendar;
