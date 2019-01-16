import React from "react";
import ReadMoreButton from "../ReadMoreButton";

function FaceBox(props) {
  return (
    <div className="face-box">
      <div className={"face-box-img"}>
      <img src={require("../../../images/face.jpg")} alt="" />
      </div>
      <div className={"face-box-text"}>
        <h2>Ansiktsbehandlingar</h2>
        <p>Välgörande ansiktsbehandlingar anpassade efter just din hudtyp!</p>
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

export default FaceBox;
