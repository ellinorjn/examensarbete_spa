import React from "react";
import Nav from "../nav";

function Questions() {
  return (
    <div className="faq-questions">
      <div className="individual-question">
        <h2>Vad har ni för åldersgräns? Får jag ta med mina barn?</h2>
        <p>
          <span>
            Vi på Stockholm Spa har en strikt åldersgräns på 18 år för att
            bibehålla det lugn vi står för. Barn under 18 år får därför stanna
            hemma!
          </span>
        </p>
      </div>
      <div className="individual-question">
        <h2>Hur lång tid innan min behandling bör jag vara på plats?</h2>
        <p>
          <span>
            Du bör vara på plats minst 10 minuter föra utsatt tid för anmäla att
            du kommit. I loungen du sitter i före behandling serveras lugnande
            te samt färsk frukt, du är därför mer än välkommen en halvtimma före
            utsatt tid för lite te och frukt.
          </span>
        </p>
      </div>
      <div className="individual-question">
        <h2>Vad har jag på mig under min bokade behandling?</h2>
        <p>
          <span>
            Torra badkläder eller rena underkläder under badrocken du fick när
            du anlände till vårt spa.
          </span>
        </p>
      </div>
      <div className="individual-question">
        <h2>Får jag badkläder eller behöver jag ta med egna?</h2>
        <p>
          <span>
            När du kommer till oss får du badrock och badkläder som du får
            behålla samt tofflor att låna.
          </span>
        </p>
      </div>
      <div className="individual-question">
        <h2>Finns det parkeringsmöjligheter om jag kommer med bil?</h2>
        <p>
          <span>
            10 minuters promenad från vår spaanläggning finns det en stor
            betalfri parkering där parkeringsmöjlighet finns.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Questions;
