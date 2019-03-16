import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Grid from "./Grid";

class App extends Component {
  state = { hoverType: "" };

  handleHover = name => {
    this.setState({ hoverType: name });
  };

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Item type="Intro" class="HeaderItem" onHover={this.handleHover} />
          <Item type="About" class="HeaderItem" onHover={this.handleHover} />
          <Item type="Projects" class="HeaderItem" onHover={this.handleHover} />
          <Item
            type="Contact me"
            class="HeaderItem"
            onHover={() => this.handleHover("Blabla")}
          />
        </header>
        <Grid section={this.state.hoverType} />
      </div>
    );
  }
}

export default App;
