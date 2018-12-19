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
        <h1>
          Välkommen till <br />
          Stockholm Spa!
        </h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}

export default HomePage;
