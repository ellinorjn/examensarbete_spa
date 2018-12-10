import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ButtonTen from '../freeTimesButtons/ButtonTen';
import ButtonEleven from '../freeTimesButtons/ButtonEleven';
import ButtonTwelve from '../freeTimesButtons/ButtonTwelve';
import ButtonFourteen from '../freeTimesButtons/ButtonFourteen';
import ButtonFifteen from '../freeTimesButtons/ButtonFifteen';
import ButtonSixteen from '../freeTimesButtons/ButtonSixteen';

import TreatmentButtons from '../Treatments/TreatmentButtons';
import FaceTreatments from '../Treatments/Face/FaceTreatments';
import Massage from '../Treatments/Massage/Massage';
import BodyTreatments from '../Treatments/BodyTreatments/BodyTreatments';
import LashesAndBrows from '../Treatments/LashesAndBrows/LashesAndBrows';
import BookingSummary from '../Booking/BookingSummary';
//import ButtonGeneric from '../freeTimesButtons/ButtonGeneric';
import "react-datepicker/dist/react-datepicker.css";
import treatmentButtons from '../Treatments/TreatmentButtons';



class BookingView extends Component {
    constructor(props){
        super(props);
        this.state = {
          showDatePicker: false
        }
    
        //this.showDatePicker = this.showDatePicker.bind(this);
        this.toggleTreatmentsAndCalendar = this.toggleTreatmentsAndCalendar.bind(this);
      }

    bookingSummaryVisible(){
        let bookingSummary = document.getElementById('booking-summary');
        bookingSummary.style.display = 'block';
    }

    showDatePicker(){
        if(this.props.treatment !== ''){
            this.setState({
                showDatePicker: true
            })
        }
    }

    toggleTreatmentsAndCalendar(){
        let treatments = document.getElementById('treatments');
        treatments.style.display = 'none';
        this.showDatePicker();
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
                <TreatmentButtons />
                <FaceTreatments onClick={this.showDatePicker} event={this.props.valueTreatmentButton} />
                <Massage event={this.props.valueTreatmentButton} />
                <BodyTreatments event={this.props.valueTreatmentButton} />
                <LashesAndBrows event={this.props.valueTreatmentButton} />

                <button onClick={this.toggleTreatmentsAndCalendar}>FORTSÄTT TILL KALENDER</button>
            </div>

            <div id="date-picker">
                {this.state.showDatePicker && <DatePicker   dateFormat="dd/MM/yyyy"
                                                            selected={this.props.startDate}
                                                            onChange={this.props.handleChange}        
                />}
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
            <button onClick={this.props.registerBookingGuest}>Boka här GÄST</button>
        </div>
    );
    }
  }

export default BookingView;


