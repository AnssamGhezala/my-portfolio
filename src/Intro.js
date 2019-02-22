import React, { Component } from "react";
import "./App.css";
import Item from "./Item";

class Intro extends Component {
  //state = { type: this.props.type, class: this.props.class ***REMOVED***

  handleHover = () => {
    console.log("hover over Intro");
  ***REMOVED***

  render() {
    return <Item type="Intro" class="HeaderItem" />;
  }
}

export default Intro;
