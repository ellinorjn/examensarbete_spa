import React from "react";
import Nav from "../nav";
import BookButtonHomePage from "./BookButton";
import Booking from "../Booking/Booking";

import { BrowserRouter as Router, Route } from "react-router-dom";

/* Displays home page */
function HomePage() {
  return (
    <div>
      <div id="home-header">
        <Nav />
        <BookButtonHomePage />
        <Router>
          <Route path="/Booking" component={Booking} />
        </Router>
      </div>
      <div className="welcome-text">
        <div className="container">
          <div id="big-img"></div>
          <div id="color-square"></div>
          <div id="information-text">
            <h1>
              Välkommen till <br />
              Stockholm Spa!
            </h1>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
