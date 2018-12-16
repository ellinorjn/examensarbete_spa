import React, { Component } from "react";
import Nav from "../nav";

import FaceBox from "./Face/FaceBox";
import BodyTreatmentBox from "./BodyTreatments/BodyTreatmentBox";
import MassageBox from "./Massage/MassageBox";
import LashesBox from "./LashesAndBrows/LashesBox";

import FaceTreatmentInfo from "./Face/FaceTreatmentInfo";
import MassageInfo from "./Massage/MassageInfo";
import BodyTreatmentInfo from "./BodyTreatments/BodyTreatmentInfo";
import LashesAndBrowsInfo from "./LashesAndBrows/LashesAndBrowsInfo";

/* Display treatment page */
class Treatments extends Component {
  showBodyTreatments() {
    let allBodyTreatments = document.getElementById("all-body-treatments");
    if (allBodyTreatments.style.display === "block") {
      allBodyTreatments.style.display = "none";
    } else {
      allBodyTreatments.style.display = "block";
    }
  }

  showLashesTreatments() {
    let allLashesTreatments = document.getElementById("all-lashes-treatments");
    if (allLashesTreatments.style.display === "block") {
      allLashesTreatments.style.display = "none";
    } else {
      allLashesTreatments.style.display = "block";
    }
  }

  showMassageTreatments() {
    let allMassageTreatments = document.getElementById(
      "all-massage-treatments"
    );
    if (allMassageTreatments.style.display === "block") {
      allMassageTreatments.style.display = "none";
    } else {
      allMassageTreatments.style.display = "block";
    }
  }

  showFaceTreatments() {
    let allFaceTreatments = document.getElementById("all-face-treatments");
    if (allFaceTreatments.style.display === "block") {
      allFaceTreatments.style.display = "none";
    } else {
      allFaceTreatments.style.display = "block";
    }
  }

  render() {
    return (
      <div>
        <div id="header-treatments">
          <Nav />
        </div>
        <div className="treatments-page">
          <div className="treatments">
            <FaceBox event={this.showFaceTreatments} />
            <FaceTreatmentInfo />
            <MassageBox event={this.showMassageTreatments} />
            <MassageInfo />
            <BodyTreatmentBox event={this.showBodyTreatments} />
            <BodyTreatmentInfo />
            <LashesBox event={this.showLashesTreatments} />
            <LashesAndBrowsInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Treatments;
