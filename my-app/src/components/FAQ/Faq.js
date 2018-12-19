import React, { Component } from "react";
import Nav from "../nav";
import Questions from "./Questions";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer(text) {
	let question = text.target.nextElementSibling;
	console.log(question);
    question.style.display = "block";
  }

  render() {
    return (
      <div>
        <div id="header-faq">
          <Nav />
        </div>
        <div id="faq-view">
          <h1>VANLIGA FRÅGOR</h1>
          <Questions showAnswer={this.showAnswer}/>
        </div>
      </div>
    );
  }
}

export default Faq;
