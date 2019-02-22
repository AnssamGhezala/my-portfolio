import React, { Component } from "react";
import "./App.css";

class Item extends Component {
  state = { type: this.props.type, class: this.props.class ***REMOVED***

  handleHover = () => {
    console.log("hover over " + this.state.type.toString());
  ***REMOVED***

  render() {
    return (
      <div
        className={this.state.class}
        onMouseOver={this.handleHover}
        onClick={this.handleClick}
      >
        {this.props.type}
      </div>
    );
  }
}

export default Item;
