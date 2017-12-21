import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

const Home = () => <h1>Home</h1>;

const Teams = () => <h1>Teams</h1>;

const Players = () => <h1>Players</h1>;

const Stats = () => <h1>Stats</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/players" component={Players} />
            <Route path="/stats" component={Stats} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
