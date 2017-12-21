import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">NBA</h1>
        <nav className="header__nav">
          <a href="/teams" className="header__link">
            Teams
          </a>
          <a href="/players" className="header__link">
            Players
          </a>
          <a href="/stats" className="header__link">
            Stats
          </a>
        </nav>
      </header>
    );
  }
}

export default App;
