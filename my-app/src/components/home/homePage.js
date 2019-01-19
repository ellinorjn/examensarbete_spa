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
          <div id="big-img" />
          <div id="color-square" />
          <div id="information-text">
            <h1>Välkommen till Stockholm Spa!</h1>
            <p>
              "En plats för avkoppling och återhämtning. När du kommer till oss
              förflyttas allt fokus till dig, här får egentid en helt ny
              betydelse. Mitt i Stockholms-stressen har vi hittat en plats för
              avkoppling, en plats som du kommer gå ifrån med ny energi! "
            </p>
          </div>
        </div>
      </div>
      <div className="our-steps">
        <div className="spa-step">
          <img
            className="spa-step-img"
            src={require("../../images/phone.jpg")}
            alt="facebook logo"
          />

          <div className="spa-step-text">
            <h2>STEG 1</h2>
            <p>
              Vi är ett mobilfritt spa för att du ska få ut så mycket som
              möjligt av din vistelse. Du får därför låsa in din mobil vid
              ankomst i ett av våra mobilskåp!
            </p>
          </div>
        </div>
        <div className="clear" />

        <div className="spa-step">
          <img
            className="spa-step-img"
            src={require("../../images/spa-step-2.jpg")}
            alt="facebook logo"
          />
          <div className="spa-step-text">
            <h2>STEG 2</h2>
            <p>
              {" "}
              Hämta ut din badkläder, badrock och tofflor hos oss i receptionen.
              Vid hämtning av badkläder får du även ett spakit att ta med dig
              under dagen, där i finns även en sparitual som inkluderar alla
              produkter i kitet!{" "}
            </p>
          </div>
        </div>
        <div className="clear" />

        <div className="spa-step">
          <img
            className="spa-step-img"
            src={require("../../images/spa-step-3.jpg")}
            alt="facebook logo"
          />
          <div className="spa-step-text">
            <h2>STEG 3</h2>
            <p>
              {" "}
              Byt om i lugn och ro i våra ombonade, tysta omklädningsrum. Ta dig
              sedan ut i vår relaxavdelning med tre olika uppvärmda pooler,
              ångbastu med salt, kolsyrebad och mer och starta din dag på bästa
              möjliga sätt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
