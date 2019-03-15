import React, { Component } from "react";
import "./App.css";

class Item extends Component {
  state = { type: this.props.type, class: this.props.class, hover: false };

  handleHover = () => {
    this.setState({ hover: true });
  };

  render() {
    return (
      <div
        className={`grow ${this.props.class}`}
        onMouseOver={() => this.props.onHover(this.state.type)}
        onClick={this.handleClick}
      >
        {this.props.type}
      </div>
    );
  }
}

export default Item;
