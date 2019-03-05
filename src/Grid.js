import React, { Component } from "react";
import "./App.css";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";

class Grid extends Component {
  //state = { type: this.props.type, class: this.props.class ***REMOVED***

  render() {
    return (
      <div>
        {"Intro" === this.props.section ? (
          <Intro />
        ) : "About" === this.props.section ? (
          <About />
        ) : "Projects" === this.props.section ? (
          <Projects />
        ) : (
          <div> </div>
        )}
      </div>
    );
  }
}

export default Grid;
// if ("Intro".equals(this.props.section)) {
//   return <Intro />;
// } else if ("About".equals(this.props.section)) {
//   return <About />;
// } else if ("Projects".equals(this.props.section)) {
//   return <Projects />;
// }
