import React from "react";

function bodyTreatments(props) {
  return (
    <div id="body-treatments-list">
      <h2>KROPPSBEHANDLINGAR</h2>
      <ul>
        <li>
          <div className="treatment-summary">
            <h3>Helkroppsskrubb</h3>
            <p>
            En djupgående helkroppsskrubb - perfekt för dig som ska på solsemester och vill få en jämnare bränna som håller längre {" "}
              <span>- 50 min - 800:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 1"
            onClick={props.event}
            id="body-1"
            disabled={props.disabled === "body-1"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Helkroppsbehandling</h3>
            <p>
            En behandling för dig som verkligen vill slappna av. Vi går igenom hela kroppen med bad, lerinpackling och massage{" "}
              <span>- 60 min - 1200:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehangling 2"
            onClick={props.event}
            id="body-2"
            disabled={props.disabled === "body-2"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Vaxning halva ben</h3>
            <p>
            Vaxning av halva ben för lena och hårfria ben{" "}
              <span>- 30 min - 400:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Kroppsbehandling 3"
            onClick={props.event}
            id="body-3"
            disabled={props.disabled === "body-3"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
        <li>
          <div className="treatment-summary">
            <h3>Vaxning hela ben</h3>
            <p>
            Vaxning av hela ben för lena och hårfria ben{" "}
              <span>- 50 min - 700:-</span>
            </p>
          </div>
          <button
            className="treatmentButtonClass"
            value="Vaxning hela ben"
            onClick={props.event}
            id="body-4"
            disabled={props.disabled === "body-4"}
          >
            VÄLJ
          </button>
          <div className="clear" />
        </li>
      </ul>
    </div>
  );
}

export default bodyTreatments;
