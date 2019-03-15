import React, { Component } from "react";
import "./App.css";

class Project extends Component {
  // state = { type: this.props.type, class: this.props.class };
  handleClick = thing => {
    if (thing === "Stopwatch") {
      // console.log(thing);
      window.open("https://github.com/AnssamGhezala/stopwatch");
    } else if (thing === "Todo") {
      // console.log(thing);
      window.open("https://github.com/AnssamGhezala/todo-list");
    } else if (thing === "Search") {
      // console.log(thing);
      window.open("https://github.com/AnssamGhezala/searchBar");
    } else if (thing === "Resto") {
      // console.log(thing);
      // window.open("https://github.com/W2018-ECSE223/Group01");
    }
  };
  render() {
    return (
      <div
        className="project"
        onClick={() => this.handleClick(this.props.projectName)}
      >
        {" "}
        <div className="title"> {this.props.projectName} </div>{" "}
        <div className="ProjectDescription">
          {" "}
          {this.props.projectDescription}
        </div>{" "}
      </div>
    );
  }
}

export default Project;
