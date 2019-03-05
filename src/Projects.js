import React, { Component } from "react";
import "./App.css";
import Item from "./Item";

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        {" "}
        <div className="project">
          {" "}
          <div className="title"> Stopwatch </div>{" "}
          <div className="ProjectDescription"> Simple React stopwatch :)</div>{" "}
        </div>
        <div className="project">
          {" "}
          <div className="title"> RestoApp </div>{" "}
          <div className="ProjectDescription">
            {" "}
            Java Restoration app using MVC model
          </div>{" "}
        </div>
        <div className="project">
          {" "}
          <div className="title"> Search Bar </div>{" "}
          <div className="ProjectDescription">
            {" "}
            Simple React search bar supporting txt files :)
          </div>{" "}
        </div>
        <div className="project">
          <div className="title"> Todo list</div>{" "}
          <div className="ProjectDescription">
            {" "}
            Simple todo list using vanilla JS :)
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
