import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ButtonTen from '../freeTimesButtons/ButtonTen';
import ButtonEleven from '../freeTimesButtons/ButtonEleven';
import ButtonTwelve from '../freeTimesButtons/ButtonTwelve';
import ButtonFourteen from '../freeTimesButtons/ButtonFourteen';
import ButtonFifteen from '../freeTimesButtons/ButtonFifteen';
import ButtonSixteen from '../freeTimesButtons/ButtonSixteen';

import FaceTreatments from '../Treatments/Face/FaceTreatments';
import BookingSummary from '../Booking/BookingSummary';
//import ButtonGeneric from '../freeTimesButtons/ButtonGeneric';
import "react-datepicker/dist/react-datepicker.css";



class BookingView extends Component {


    bookingSummaryVisible(){
        let bookingSummary = document.getElementById('booking-summary');
        bookingSummary.style.display = 'block';
    }

    render() {
        let ten = '';
        let eleven = '';
        let twelve = '';
        let fourteen = '';
        let fifteen = '';
        let sixteen = '';
        

        if(this.props.buttonTen){
            ten = <ButtonTen    
                                    buttonTen='buttonTen'
                                    onChange={this.props.handleChange}
                                    event={this.props.valueTimeButton}
                                    />
        }
        if(this.props.buttonEleven){
            eleven = <ButtonEleven     
                                        buttonEleven='buttonEleven'
                                        onChange={this.props.handleChange}
                                        event={this.props.valueTimeButton}/>
        }
        if(this.props.buttonTwelve){
            twelve = <ButtonTwelve    
                                        buttonTwelve='buttonTwelve'
                                        onChange={this.props.handleChange}
                                        event={this.props.valueTimeButton}/>
        }
        if(this.props.buttonFourteen){
            fourteen = <ButtonFourteen   
                                        buttonFourteen='buttonFourteen'
                                        onChange={this.props.handleChange}
                                        event={this.props.valueTimeButton}/>
        }
        if(this.props.buttonFifteen){
            fifteen = <ButtonFifteen    
                                        buttonFifteen='buttonFifteen'
                                        onChange={this.props.handleChange}
                                        event={this.props.valueTimeButton}/>
        }
        if(this.props.buttonSixteen){
            sixteen = <ButtonSixteen   
                                        buttonSixteen='buttonSixteen'
                                        onChange={this.props.handleChange}
                                        event={this.props.valueTimeButton}/>
        }

        

        
        return (
            <div id="booking">

                <div id="treatments">
                    <FaceTreatments event={this.props.valueTreatmentButton} />
                </div>

                <div id="date-picker">
                    <DatePicker dateFormat="dd/MM/yyyy"
                                selected={this.props.startDate}
                                onChange={this.props.handleChange}        
                    />
                </div>

                <div id="timeButtons">
                    {ten}
                    {eleven}
                    {twelve}
                    {fourteen}
                    {fifteen}
                    {sixteen}
                </div>

               <button onClick={this.bookingSummaryVisible}>Fortsätt</button>

               <BookingSummary />

               <button onClick={this.props.registerBooking}>Boka här</button>
            </div>
        );
    }
  }


  

export default BookingView;


