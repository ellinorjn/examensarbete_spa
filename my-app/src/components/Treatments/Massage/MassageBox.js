import React from "react";
import ReadMoreButton from "../ReadMoreButton";

function MassageBox(props) {
  return (
    <div className="massage-box">
      <div className={"massage-box-img"}>
      <img src={require("../../../images/couple-massage.jpg")} alt="" />
      </div>
      <div className={"massage-box-text"}>
        <h2>Massage</h2>
        <p>här finns det olika massagebehandlingar, KUL!</p>
      </div>
      <div>
      <ReadMoreButton event={props.event} />
      </div>
      <div className={"clear"} />
    </div>
    
  );
}

export default MassageBox;
