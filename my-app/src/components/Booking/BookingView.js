import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ButtonTen from '../freeTimesButtons/ButtonTen';
import ButtonEleven from '../freeTimesButtons/ButtonEleven';
import ButtonTwelve from '../freeTimesButtons/ButtonTwelve';
import ButtonFourteen from '../freeTimesButtons/ButtonFourteen';
import ButtonFifteen from '../freeTimesButtons/ButtonFifteen';
import ButtonSixteen from '../freeTimesButtons/ButtonSixteen'
import FaceTreatments from '../Treatments/Face/FaceTreatments';
//import ButtonGeneric from '../freeTimesButtons/ButtonGeneric';
import "react-datepicker/dist/react-datepicker.css";



class BookingView extends Component {
    render() {
        let ten = '';
        let eleven = '';
        let twelve = '';
        let fourteen = '';
        let fifteen = '';
        let sixteen = '';
        

        /** GÖR TREATMENTS SNYGGARE!!!!!!!! */
        let treatments = '';
        treatments = <FaceTreatments event={this.props.valueTreatmentButton} />
        

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
            <div id="date-picker">


                <div id="treatments">
                    {treatments}
                </div>

                <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={this.props.startDate}
                        onChange={this.props.handleChange}        
                />

                

                <div id="timeButtons">
                    {ten}
                    {eleven}
                    {twelve}
                    {fourteen}
                    {fifteen}
                    {sixteen}
                </div>

                <button onClick={this.props.registerBooking}>KLICK</button>
            </div>
        );
    }
  }


export default BookingView;


