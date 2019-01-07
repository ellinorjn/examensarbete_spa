import React from "react";
import Nav from "../nav";

/* Displays the complete contact page */
function Contact() {
  return (
    <div>
      <div id="home-header">
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
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.9217929779866!2d18.071843715805848!3d59.33425951766972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5b9c99f98d%3A0x9658f65c124a7180!2sM%C3%A4ster+Samuelsgatan+1%2C+111+44+Stockholm!5e0!3m2!1sen!2sse!4v1546862287084" allowfullscreen></iframe>
        </div>
        <h4>Varmt välkommen!</h4>
      </div>
	  </div>
    </div>
  );
}

export default Contact;
