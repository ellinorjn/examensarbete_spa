import React from "react";
import Nav from "../nav";

/* Displays the complete contact page */
function Contact() {
  return (
    <div>
      <Nav />
      <div id="contact-view">
        <h1>Kontakta oss!</h1>
        <h2>
          Vänligen titta igenom vår FAQ för svar på de vanligaste frågorna vi
          får. Hittar du ändå inte det du söker är du mer än välkommen att
          kontakta oss!
        </h2>
        <div id="contact-information">
          <h3>Öppettider</h3>
          Måndag: STÄNGT <br />
          Tisdag: 10-20 <br />
          Onsdag: 10-20 <br />
          Torsdag: 10-20 <br />
          Fredag: 9-22 <br />
          Lördag: 9-22 <br />
          Söndag 12-20 <br />
		  <h3>Kontakt</h3>
		  Telefon: 08 - 123 45 67 <br />
		  Mail: spa@stockholm.se
		  <h3>Varmt välkommen!</h3>
        </div>
        <div id="contact-map">
          Stockholm Spa <br />
          Mäster Samuelsgatan 1 <br />
          123 45 Stockholm <br />
          HÄR ÄR EN FIN KARTA
		  <img src={require('../../images/map.JPG')}></img>

        </div>
        <div className="clear" />
      </div>
    </div>
  );
}

export default Contact;
