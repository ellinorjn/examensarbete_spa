import React from "react";

function MassageBox(props) {
  return (
    <div className="massage-box">
      <div className={"massage-box-img"}>
        <img src={require("../../../images/couple-massage.jpg")} alt="Two people gets massage" />
      </div>
      <div className={"massage-box-text"}>
        <h2>Massage</h2>
        <p>Unna dig en avkopplande, välgörande massage. Här kan du läsa om massagerna vi erbjuder!</p>
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

export default MassageBox;
