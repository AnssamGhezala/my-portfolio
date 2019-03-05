import React, { Component } from "react";
import "./App.css";

class Intro extends Component {
  //state = { type: this.props.type, class: this.props.class ***REMOVED***

  handleHover = () => {
    console.log("hover over Intro");
  ***REMOVED***

  render() {
    return (
      <div className="Intro">
        <div className="image">image</div>
        <div className="description">
          {" "}
          Hi! I'am Anssam, a Software Engineering student at McGill University
          :) I like building small things with JavaScript and React and am
          exploring the web dev world!{" "}
        </div>
      </div>
    );
  }
}

export default Intro;
