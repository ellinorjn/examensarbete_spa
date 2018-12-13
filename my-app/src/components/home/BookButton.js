import React from "react";
import {
	Link
  } from 'react-router-dom';

function BookButtonHomePage(props) {
  return (
    <button
      className="book-button-home-page"
    >
    <Link to="/Booking">BOKA HÄR!</Link>
     
    </button>
  );
}

export default BookButtonHomePage;

