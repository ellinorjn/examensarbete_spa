import React from "react";

function LashesBox(props) {
  return (
    <div className="lashes-box">
      <div className={"lashes-box-img"}>
        <img src={require("../../../images/brows.jpg")} alt="" />
      </div>
      <div className={"lashes-box-text"}>
        <h2>Fransar & Bryn</h2>
        <p>här finns det olika frans- och brynbehandlingar, KUL!</p>
      </div>
      <div className="read-more-button-div">
        <button className="read-more-button" value="body" onClick={props.event}>
          {props.toggle ? "visa mer" : "visa mindre"}
        </button>
      </div>
      <div className={"clear"} />
    </div>
  );
}

export default LashesBox;
