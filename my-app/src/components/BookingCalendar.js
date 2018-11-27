import React, { Component } from 'react';
import BookingView from './BookingView.js';
import "react-datepicker/dist/react-datepicker.css";
import ButtonTwelve from './freeTimesButtons/ButtonTwelve';
import moment from 'moment';

class BookingCalendar extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        startDate: new Date(),
        buttonTen: false,
        buttonEleven: false,
        buttonTwelve: false,
        buttonFourteen: false,
        buttonFifteen: false,
        buttonSixteen: false
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
        this.checkForAvailableTimes(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  checkForAvailableTimes(response){
    if(response.ten < 4){
      this.setState({
        buttonTen: true
      })
    }if(response.eleven < 4){
      this.setState({
        buttonEleven: true
      })
    }if(response.twelve < 4){
      this.setState({
        buttonTwelve: true
      })
    }if(response.fourteen < 4){
      this.setState({
        buttonFourteen: true
      })
    }if(response.fifteen < 4){
      this.setState({
        buttonFifteen: true
      })
    }if(response.sixteen < 4){
      this.setState({
        buttonSixteen: true
      })
    }
  }

  

  render() {
    return (
      <div id="bookingView">
          <BookingView  startDate={this.state.startDate} 
                        handleChange={this.handleChange} 
                        buttonTen={this.state.buttonTen}
                        buttonEleven={this.state.buttonEleven}
                        buttonTwelve={this.state.buttonTwelve}
                        buttonFourteen={this.state.buttonFourteen}
                        buttonFifteen={this.state.buttonFifteen}
                        buttonSixteen={this.state.buttonSixteen} 
          />
          
      </div>
    )
  }
}

export default BookingCalendar;
