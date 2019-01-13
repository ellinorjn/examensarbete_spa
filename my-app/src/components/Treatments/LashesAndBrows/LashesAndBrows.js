import React from "react";

function lashesAndBrows(props) {
  return (
    <div>
      <h2>FRANSAR OCH BRYN</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Färgning av fransar</h3>
            <p>
            Färgning av dina egna fransar kommer ge ögat en piggare och mer vaken look{" "}
              <span>- 15 min - 350:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Fransar"
            onClick={props.event}
            id="lashes"
            disabled={props.disabled === "lashes"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Noppning samt färgning av ögonbryn</h3>
            <p>
              Dina egna bryn noppas och färgas i samråd med din hudteraput{" "}
              <span>- 30 min - 450:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Bryn"
            onClick={props.event}
            id="brows"
            disabled={props.disabled === "brows"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Fransar & Bryn</h3>
            <p>
            I den här behandlingen ingår både färgning av fransar och bryn samt noppning av ögonbryn{" "}
              <span>- 45 min - 700:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Fransar och Bryn"
            onClick={props.event}
            id="lashes-and-brows"
            disabled={props.disabled === "lashes-and-brows"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
      </ul>
    </div>
  );
}

export default lashesAndBrows;
