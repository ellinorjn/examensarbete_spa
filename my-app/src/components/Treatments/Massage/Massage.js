import React from "react";

function massage(props) {
  return (
    <div>
      <h2>MASSAGE</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Klassisk massage</h3>
            <p>
              En klassisk helkropps massage som löser upp spänningar{" "}
              <span>- 50 min - 900:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Klassisk massage"
            onClick={props.event}
            id="massage-1"
            disabled={props.disabled === "massage-1"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>

        <li>
          <div className="treatment-summary">
            <h3>Gravidmassage </h3>
            <p>
              En massage som anpassas för dig som är gravid{" "}
              <span>- 50 min - 900:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Gravidmassage"
            onClick={props.event}
            id="massage-2"
            disabled={props.disabled === "massage-2"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>

        <li>
          <div className="treatment-summary">
            <h3>Exklusiv spa-massage </h3>
            <p>
            Den här behandlingen passar dig som vill ha det lilla extra{" "}
              <span>- 50 min - 1000:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Exklusiv spa-massage"
            onClick={props.event}
            id="massage-3"
            disabled={props.disabled === "massage-3"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>

        <li>
          <div className="treatment-summary">
            <h3>Duo-massage</h3>
            <p>
            En behandling för er som vill få behandling samtidigt i samma rum, perfekt för dig och din respektive{" "}
              <span>- 60 min - 1700:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Massage duo"
            onClick={props.event}
            id="massage-duo"
            disabled={props.disabled === "massage-duo"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        
      </ul>
    </div>
  );
}

export default massage;
