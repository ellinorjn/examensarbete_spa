import React from "react";

function MassageInfo() {
  return (
    <div id="all-massage-treatments">
      <h2>
        Klassisk massage |<span className="time-and-price"> 50 min </span> |
        <span className="time-and-price"> 900:-</span>
      </h2>
      <p>
        "En klassisk helkropps massage som löser upp spänningar. Tillsammans med
        din massör väljer du om det är något område som du vill att han eller
        hon fokusera extra mycket på. Välj mellan avslappnande massage eller en
        mer djupgåenge. "
      </p>
      <div className="line-treatments">
        <hr />
      </div>
      <h2>
        Gravidmassage |<span className="time-and-price"> 50 min </span> |
        <span className="time-and-price"> 900:-</span>
      </h2>
      <p>
        "En massage som anpassas för dig som är gravid. Med hjälp av en speciell
        gravidkudde gör vi det möjligt för dig att ligga på mage under
        behandlingen."
      </p>
      <div className="line-treatments">
        <hr />
      </div>
      <h2>
        Exklusiv spa-massage |<span className="time-and-price"> 50 min </span> |
        <span className="time-and-price"> 1000:-</span>
      </h2>
      <p>
        "Den här behandlingen passar dig som vill ha det lilla extra. Du får en
        avslappnande spa-massage med djupgående, aromatisk olja. Du bäddas sedan
        in i en värmefilt medan produkterna får verka på kroppen och får under
        tiden en skön skalp massage."
      </p>
      <div className="line-treatments">
        <hr />
      </div>
      <h2>
        Duo-massage |<span className="time-and-price"> 60 min </span> |
        <span className="time-and-price"> 1700:-</span>
      </h2>
      <p>
        "En behandling för er som vill få behandling samtidigt i samma rum,
        perfekt för dig och din respektive! Ni får samtidigt en klassisk
        helkropps massage för att lösa upp spända muskler. Avslutas med att ni
        lindas in i varma filtar och får chans att ligga att småprata eller bara
        njuta av lugnet."
      </p>
    </div>
  );
}

export default MassageInfo;
