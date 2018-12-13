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
        <p>här finns det ansiktsbehandlingar, KUL!</p>
      </div>
      <div>
      <ReadMoreButton event={props.event} />
      </div>
      <div className={"clear"} />
    </div>
    
  );
}

export default FaceBox;
