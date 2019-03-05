import React, { Component } from "react";
import "./App.css";

class Item extends Component {
  state = { type: this.props.type, class: this.props.class, hover: false ***REMOVED***

  handleHover = () => {
    console.log("hover over " + this.state.type.toString());
    this.setState({ hover: true });
  ***REMOVED***

  render() {
    return (
      <div
        className={"cl-effect-10" + this.state.class}
        onMouseOver={() => this.props.onHover(this.state.type)}
        onClick={this.handleClick}
      >
        {this.props.type}
      </div>
    );
  }
}

export default Item;
