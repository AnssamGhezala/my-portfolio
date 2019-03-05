import React, { Component } from "react";
import "./App.css";

class Section extends Component {
  state = { title: this.props.type ***REMOVED***

  render() {
    return (
      <div
        className="HeaderItem"
        onMouseOver={() => this.props.onHover(this.state.title)}
      >
        {this.props.type}
      </div>
    );
  }
}

export default Section;
