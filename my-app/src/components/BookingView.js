import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ButtonTen from './freeTimesButtons/ButtonTen';
import ButtonEleven from './freeTimesButtons/ButtonEleven';
import ButtonTwelve from './freeTimesButtons/ButtonTwelve';
import ButtonFourteen from './freeTimesButtons/ButtonFourteen';
import ButtonFifteen from './freeTimesButtons/ButtonFifteen';
import ButtonSixteen from './freeTimesButtons/ButtonSixteen'
import "react-datepicker/dist/react-datepicker.css";

class BookingView extends Component {
    render() {

    let ten = '';
    let eleven = '';
    let twelve = '';
    let fourteen = '';
    let fifteen = '';
    let sixteen = '';

    if(this.props.buttonTen){
        ten = <ButtonTen/>
    }
    if(this.props.buttonEleven){
        eleven = <ButtonEleven/>
    }
    if(this.props.buttonTwelve){
        twelve = <ButtonTwelve/>
    }
    if(this.props.buttonFourteen){
        fourteen = <ButtonFourteen/>
    }
    if(this.props.buttonFifteen){
        fifteen = <ButtonFifteen/>
    }
    if(this.props.buttonSixteen){
        sixteen = <ButtonSixteen/>
    }
      return (
        <div id="date-picker">
            <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={this.props.startDate}
                    onChange={this.props.handleChange}        
            />
            <div>
            {ten}
            {eleven}
            {twelve}
            {fourteen}
            {fifteen}
            {sixteen}
            </div>
        </div>
      );
    }
  }


export default BookingView;


