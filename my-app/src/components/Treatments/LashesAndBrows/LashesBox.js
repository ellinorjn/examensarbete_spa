import React from "react";
import ReadMoreButton from "../ReadMoreButton";

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
      <div>
      <ReadMoreButton event={props.event} />
      </div>
      <div className={"clear"} />
    </div>
    
  );
}

export default LashesBox;