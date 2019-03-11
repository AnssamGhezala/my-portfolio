/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";

class About extends Component {
  render() {
    return (
      <div className="Intro">
        {" "}
        <div className="about">
          {" "}
          I like{" "}
          <a className="underline--magical">
            reading stuff about the web dev industry
          </a>
          , and am curious about anything related it. Although I am currently
          learning the core computer science/software engineering topics at
          McGill, most of the web-dev related skills that I have achieved are{" "}
          <a className="underline--magical">self-taught</a>. I love the Web and
          I want to be able to contribute to it, which is why I hope to get an{" "}
          <a className="underline--magical">internship </a> or a{" "}
          <a className="underline--magical">
            partime position in front-end related positions
          </a>{" "}
          :){" "}
        </div>
      </div>
    );
  }
}

export default About;
