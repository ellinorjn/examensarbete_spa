import React from "react";

function BodyTreatmentBox(props) {
  return (
    <div className="body-box">
      <div className={"body-box-img"}>
        <img src={require("../../../images/wax.jpg")} alt="Legs with wax" />
      </div>
      <div className={"body-box-text"}>
        <h2>Kroppsbehandlingar</h2>
        <p>
          Här hittar du alla våra härliga helkroppsbehandlingar, från
          helkroppsscrub till vaxning!
        </p>
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

export default BodyTreatmentBox;
