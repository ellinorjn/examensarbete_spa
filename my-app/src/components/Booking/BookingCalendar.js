import React, { Component } from 'react';
import BookingView from './BookingView'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

class BookingCalendar extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
        startDate: new Date(),
        time: '',
        treatment: '',

        buttonTen: false,
        buttonEleven: false,
        buttonTwelve: false,
        buttonFourteen: false,
        buttonFifteen: false,
        buttonSixteen: false
      };

    this.handleChange = this.handleChange.bind(this);
    /*this.valueButtonTen = this.valueButtonTen.bind(this);
    this.valueButtonEleven = this.valueButtonEleven.bind(this);
    this.valueButtonTwelve = this.valueButtonTwelve.bind(this);
    this.valueButtonFourteen = this.valueButtonFourteen.bind(this);
    this.valueButtonFifteen = this.valueButtonFifteen.bind(this);
    this.valueButtonSixteen = this.valueButtonSixteen.bind(this);*/

    this.registerBooking = this.registerBooking.bind(this);

    this.valueTimeButton = this.valueTimeButton.bind(this);
    this.valueTreatmentButton = this.valueTreatmentButton.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });

    let bookingDate = moment(date).format('YYYY-MM-DD');

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
    }else{
      this.setState({
        buttonTen: false
      })
    }

    if(response.eleven < 4){
      this.setState({
        buttonEleven: true
      })
    }else{
      this.setState({
        buttonEleven: false
      })
    }
    
    if(response.twelve < 4){
      this.setState({
        buttonTwelve: true
      })
    }else{
      this.setState({
        buttonTwelve: false
      })
    }
    
    if(response.fourteen < 4){
      this.setState({
        buttonFourteen: true
      })
    }else{
      this.setState({
        buttonFourteen: false
      })
    }
    
    if(response.fifteen < 4){
      this.setState({
        buttonFifteen: true
      })
    }else{
      this.setState({
        buttonFifteen: false
      })
    }
    
    if(response.sixteen < 4){
      this.setState({
        buttonSixteen: true
      })
    }else{
      this.setState({
        buttonSixteen: false
      })
    }
  }
/**Get the value from all time buttons */

valueTimeButton(button){
  let buttonValue = button.target.value;
  this.setState({
    time: buttonValue
  })
}

valueTreatmentButton(button){
  let buttonValue = button.target.value;
  this.setState({
    treatment: buttonValue
  })
}


 /*valueButtonTen(){
    let buttonValue = document.getElementById('buttonTen').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }

  valueButtonEleven(){
    let buttonValue = document.getElementById('buttonEleven').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }

  valueButtonTwelve(){
    let buttonValue = document.getElementById('buttonTwelve').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }

  valueButtonFourteen(){
    let buttonValue = document.getElementById('buttonFourteen').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }

  valueButtonFifteen(){
    let buttonValue = document.getElementById('buttonFifteen').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }

  valueButtonSixteen(){
    let buttonValue = document.getElementById('buttonSixteen').value;
    this.setState({
      time: buttonValue
    })
        console.log(buttonValue);
  }*/

  registerBooking(){
    let bookingInformation = {
        date: this.state.startDate,
        time: this.state.time,
        treatment: this.state.treatment
    }

    console.log(bookingInformation);


    return fetch('http://localhost/spa/my-app/database-connections/bookTreatment.php',{
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(bookingInformation)
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })


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
                        
                        /*valueButtonTen={this.valueButtonTen}
                        valueButtonEleven={this.valueButtonEleven}
                        valueButtonTwelve={this.valueButtonTwelve}
                        valueButtonFourteen={this.valueButtonFourteen} 
                        valueButtonFifteen={this.valueButtonFifteen}
                        valueButtonSixteen={this.valueButtonSixteen}*/

                        valueTimeButton={this.valueTimeButton}
                        valueTreatmentButton={this.valueTreatmentButton}

                        registerBooking={this.registerBooking}
          />
          
      </div>
    )
  }
}

export default BookingCalendar;
