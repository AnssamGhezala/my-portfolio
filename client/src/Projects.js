import React, { Component } from "react";
import "./App.css";

class Projects extends Component {
  handleClick = thing => {
    if (thing === "Stopwatch") {
      console.log(thing);
      window.open("https://github.com/AnssamGhezala/stopwatch");
    } else if (thing === "Todo") {
      console.log(thing);
      window.open("https://github.com/AnssamGhezala/todo-list");
    } else if (thing === "Search") {
      console.log(thing);
      window.open("https://github.com/AnssamGhezala/searchBar");
    } else if (thing === "Resto") {
      console.log(thing);
      window.open("https://github.com/W2018-ECSE223/Group01");
    }
  ***REMOVED***
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
      </div>
    );
  }
}

export default Projects;
