import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Intro from "./Intro.js";
import About from "./About.js";
import Projects from "./Projects.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <Item type="Intro" class="HeaderItem" />
          <Item type="About" class="HeaderItem" />
          <Item type="Projects" class="HeaderItem" />
          <Item type="Blabla" class="HeaderItem" />
        </header>
        <div className="description">
          <Intro />
        </div>
      </div>
    );
  }
}

export default App;
