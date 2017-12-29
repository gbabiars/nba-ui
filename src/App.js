import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-client";
import { HttpLink, InMemoryCache } from "apollo-client-preset";
import { ApolloProvider } from "react-apollo";
import Header from "./Header";
import Teams from "./Teams";

const Home = () => <h1>Home</h1>;

const Players = () => <h1>Players</h1>;

const Stats = () => <h1>Stats</h1>;

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache().restore({})
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}

export default App;
