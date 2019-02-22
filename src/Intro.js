import React, { Component } from "react";
import "./App.css";

class Intro extends Component {
  //state = { type: this.props.type, class: this.props.class ***REMOVED***

  handleHover = () => {
    console.log("hover over Intro");
  ***REMOVED***

  render() {
    return <div className="title">THIS IN INTRO</div>;
  }
}

export default Intro;
