import React from "react";
import Nav from "../nav";

/* Displays the complete contact page */
function Contact() {
  return (
    <div>
      <div id="header-faq">
          <Nav />
        </div>
      <div id="contact-view">
	  <div id="contact-content">
        <h1>Kontakta oss!</h1>
        <h2>
          Vänligen titta igenom vår FAQ för svar på de vanligaste frågorna vi
          får. <br /> Hittar du ändå inte det du söker är du mer än välkommen
          att kontakta oss!
        </h2>
        <div id="contact-information">
          <div id="opening-hours">
            <h3>Öppettider</h3>
            Måndag: STÄNGT <br />
            Tisdag: 10-20 <br />
            Onsdag: 10-20 <br />
            Torsdag: 10-20 <br />
            Fredag: 9-22 <br />
            Lördag: 9-22 <br />
            Söndag 12-20 <br />
          </div>
          <div id="adress">
            <h3>Kontakt</h3>
            Telefon: 08 - 123 45 67 <br />
            Mail: spa@stockholm.se
            <h3>Adress:</h3>
            Stockholm Spa <br />
            Mäster Samuelsgatan 1 <br />
            123 45 Stockholm <br />
          </div>
          <div className="clear" />
        </div>
        <div id="contact-map">
          <img src={require("../../images/map.JPG")} />
        </div>
        <h4>Varmt välkommen!</h4>
      </div>
	  </div>
    </div>
  );
}

export default Contact;
