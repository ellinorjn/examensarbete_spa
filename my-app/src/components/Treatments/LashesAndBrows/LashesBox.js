import React from "react";

function LashesBox(props) {
  return (
    <div className="lashes-box">
      <div className={"lashes-box-img"}>
        <img src={require("../../../images/brows.jpg")} alt="Girl getting her brows done" />
      </div>
      <div className={"lashes-box-text"}>
        <h2>Fransar & Bryn</h2>
        <p>Här kan du läsa om vilka behandlingar vi erbjuder för dina ögonfransar och ögonbryn</p>
      </div>
      <div className="read-more-button-div">
        <button className="read-more-button" value="body" onClick={props.event}>
          {props.toggle ? "Visa mer" : "Visa mindre"}
        </button>
      </div>
      <div className={"clear"} />
    </div>
  );
}

export default LashesBox;
