/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";

class Intro extends Component {
  //state = { type: this.props.type, class: this.props.class };

  handleHover = () => {
    console.log("hover over Intro");
  };

  render() {
    return (
      <div className="Intro">
        <img
          alt="intro"
          src="https://tce-live2.s3.amazonaws.com/media/media/2b7f1364-6c18-4b8d-a208-0aac26b4f5fe.jpg"
        />{" "}
        <div className="description">
          {" "}
          Hi! I'm <a className="underline--magical">Anssam</a>, a Software
          Engineering student at{" "}
          <a className="underline--magical">McGill University</a> :) I like
          building small things with{" "}
          <a className="underline--magical">JavaScript</a> and{" "}
          <a className="underline--magical">React</a> and am exploring the web
          dev world!{" "}
        </div>
      </div>
    );
  }
}

export default Intro;
