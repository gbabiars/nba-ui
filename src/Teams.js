import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TeamsIndex from "./TeamsIndex";
import TeamsDetail from "./TeamsDetail";
import "./Teams.css";

class Teams extends Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={match.url} component={TeamsIndex} />
        <Route path={`${match.url}/:teamId`} component={TeamsDetail} />
      </Switch>
    );
  }
}

export default Teams;
