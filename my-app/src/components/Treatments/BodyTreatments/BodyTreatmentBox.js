import React from "react";
import ReadMoreButton from "../ReadMoreButton";

function BodyTreatmentBox(props) {
  return (
    <div className="body-box">
      <div className={"body-box-img"}>
        <img src={require("../../../images/wax.jpg")} alt="" />
      </div>
      <div className={"body-box-text"}>
        <h2>Kroppsbehandlingar</h2>
        <p>här finns det kroppsbehandlingar, KUL!</p>
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

export default BodyTreatmentBox;
