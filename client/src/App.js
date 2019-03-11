import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Grid from "./Grid";

class App extends Component {
  state = { hoverType: "" ***REMOVED***

  handleHover = name => {
    console.log("name is " + name);
    this.setState({ hoverType: name });
  ***REMOVED***
  render() {
    return (
      <div className="App">
        <header className="Header">
          <Item type="Intro" class="HeaderItem" onHover={this.handleHover} />
          <Item type="About" class="HeaderItem" onHover={this.handleHover} />
          <Item type="Projects" class="HeaderItem" onHover={this.handleHover} />
          <Item type="Blabla" class="HeaderItem" onHover={this.handleHover} />
        </header>
        <Grid section={this.state.hoverType} />
      </div>
    );
  }
}

export default App;
