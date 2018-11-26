import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class BookingView extends Component {
    render() {
      return (
        <div id="date-picker">
            <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={this.props.startDate}
                    onChange={this.props.handleChange}        
            />
        </div>
      );
    }
  }


export default BookingView;


