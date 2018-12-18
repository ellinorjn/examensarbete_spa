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
  constructor(props) {
    super(props);
    this.state = { 
      toggleBody: true,
      toggleLashes: true,
      toggleMassage: true,
      toggleFace: true
    };

    this.toggleBody = this.toggleBody.bind(this);
    this.showBodyTreatments = this.showBodyTreatments.bind(this);
    this.showFaceTreatments = this.showFaceTreatments.bind(this);
    this.showLashesTreatments = this.showLashesTreatments.bind(this);
    this.showMassageTreatments = this.showMassageTreatments.bind(this);
  }

  toggleBody() {
    this.setState(function(prevState) {
      return { toggleBody: !prevState.toggleBody };
    });
  }


  showBodyTreatments() {
    let allBodyTreatments = document.getElementById("all-body-treatments");
    if (allBodyTreatments.style.display === "block") {
      allBodyTreatments.style.display = "none";
    } else {
      allBodyTreatments.style.display = "block";
    }
    this.setState(function(prevState) {
      return { toggleBody: !prevState.toggleBody };
    });
    //this.toggleReadMoreButton();
  }

  showLashesTreatments() {
    let allLashesTreatments = document.getElementById("all-lashes-treatments");
    if (allLashesTreatments.style.display === "block") {
      allLashesTreatments.style.display = "none";
    } else {
      allLashesTreatments.style.display = "block";
    }
    this.setState(function(prevState) {
      return { toggleLashes: !prevState.toggleLashes };
    });
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
    this.setState(function(prevState) {
      return { toggleMassage: !prevState.toggleMassage };
    });
  }

  showFaceTreatments() {
    let allFaceTreatments = document.getElementById("all-face-treatments");
    if (allFaceTreatments.style.display === "block") {
      allFaceTreatments.style.display = "none";
    } else {
      allFaceTreatments.style.display = "block";
    }
    this.setState(function(prevState) {
      return { toggleFace: !prevState.toggleFace };
    });
  }

  render() {
    return (
      <div>
        <div id="header-treatments">
          <Nav />
        </div>
        <div className="treatments-page">
          <h1>Våra behandlingar</h1>
          <div className="treatments">
            <FaceBox
              event={this.showFaceTreatments}
              toggle={this.state.toggleFace}
            />
            <FaceTreatmentInfo />
            <MassageBox
              event={this.showMassageTreatments}
              toggle={this.state.toggleMassage}
            />
            <MassageInfo />
            <BodyTreatmentBox
              event={this.showBodyTreatments}
              toggle={this.state.toggleBody}
            />
            <BodyTreatmentInfo />
            <LashesBox
              event={this.showLashesTreatments}
              toggle={this.state.toggleLashes}
            />
            <LashesAndBrowsInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Treatments;
