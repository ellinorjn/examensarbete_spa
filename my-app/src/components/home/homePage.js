import React from 'react';
import Nav from '../nav';
import BookButtonHomePage from './BookButton';
import Booking from '../Booking/Booking';

import {
	BrowserRouter as Router,
	Route
  } from 'react-router-dom';

/* Displays home page */
function HomePage (){

	return (
	    <div>
			<div id="home-header">
            <Nav />
			<BookButtonHomePage  />
			<Router>
			<Route path="/Booking" component={Booking} />
			</Router>
			</div>
	       <h1>FÖRSTA SIDAN</h1>   
	    </div>
	);
};

export default HomePage;