import React, { Component } from "react";
import "./App.css";

class Projects extends Component {
  handleClick = thing => {
    if (thing === "Stopwatch") {
      window.open("https://github.com/AnssamGhezala/stopwatch");
    } else if (thing === "Todo") {
      window.open("https://github.com/AnssamGhezala/todo-list");
    } else if (thing === "Search") {
      window.open("https://github.com/AnssamGhezala/searchBar");
    } else if (thing === "Resto") {
      //  window.open("https://github.com/W2018-ECSE223/Group01");
    } else if (thing === "Robot") {
      window.open("https://github.com/AnssamGhezala/RoboElectronics");
    } else if (thing === "Portfolio") {
      window.open("https://github.com/AnssamGhezala/my-portfolio");
    }
  };
  render() {
    return (
      <div className="Projects">
        {" "}
        <div className="project" onClick={() => this.handleClick("Stopwatch")}>
          {" "}
          <div className="title"> Stopwatch </div>{" "}
          <div className="ProjectDescription"> Simple React stopwatch :)</div>{" "}
        </div>
        <div className="project" onClick={() => this.handleClick("Resto")}>
          {" "}
          <div className="title"> RestoApp </div>{" "}
          <div className="ProjectDescription">
            {" "}
            Java Restoration app using MVC model
            <a className="privateProject"> Project currently private :( </a>
          </div>{" "}
        </div>
        <div className="project" onClick={() => this.handleClick("Portfolio")}>
          {" "}
          <div className="title">Portfolio </div>{" "}
          <div className="ProjectDescription">
            {" "}
            This is my porfolio using React, Express, nodemailer and Gmail's Api
          </div>{" "}
        </div>
        <div className="project" onClick={() => this.handleClick("Search")}>
          {" "}
          <div className="title"> Search Bar </div>{" "}
          <div className="ProjectDescription">
            {" "}
            Simple React search bar supporting txt files :)
          </div>{" "}
        </div>
        <div className="project" onClick={() => this.handleClick("Todo")}>
          <div className="title"> Todo list</div>{" "}
          <div className="ProjectDescription">
            {" "}
            Simple todo list using vanilla JS :)
          </div>
        </div>
        <div className="project" onClick={() => this.handleClick("Robot")}>
          <div className="title"> STMBot </div>{" "}
          <div className="ProjectDescription">
            {" "}
            Soccer playing robot using python + raspberry pi @RoboElectronics
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
