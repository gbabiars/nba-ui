import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import sortBy from "lodash/sortBy";
import { teams, conferences, divisions } from "./data";
import "./Teams.css";

const teamsHash = teams.reduce((hash, team) => ({ ...hash, [team.id]: team }));

const divisionsWithTeams = divisions.map(division => {
  return {
    ...division,
    teams: teams.filter(x => x.divisionId === division.id)
  };
});

const conferencesWithDivisions = conferences.map(conference => {
  return {
    ...conference,
    divisions: divisionsWithTeams.filter(x => x.conferenceId === conference.id)
  };
});

const Division = ({ division, match }) => (
  <div>
    <h4 className="division__header">{division.name}</h4>
    <ul>
      {sortBy(division.teams, ["city", "nickname"]).map(team => (
        <li key={team.id} className="division__item">
          <Link to={`${match.url}/${team.id}`} className="division__link">
            {`${team.city} ${team.nickname}`}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Conference = ({ conference, match }) => (
  <div>
    <h3 className="conference__header">{conference.name}</h3>
    <ul>
      {conference.divisions.map(division => (
        <li key={division.id}>
          <Division division={division} match={match} />
        </li>
      ))}
    </ul>
  </div>
);

const TeamsIndex = ({ conferences, match }) => (
  <div>
    <h1 className="teams__header">Teams</h1>
    <ul>
      {conferencesWithDivisions.map(conference => (
        <li key={conference.id}>
          <Conference conference={conference} match={match} />
        </li>
      ))}
    </ul>
  </div>
);

const TeamsDetail = ({ team }) => {
  return (
    <div>
      <div className="teams-detail__header">
        <img
          src={`//cdn.nba.net/assets/logos/teams/secondary/web/${team.id}.svg`}
          alt=""
          className="teams-detail__logo"
        />
        <div>
          <h3>{team.city}</h3>
          <h2>{team.nickname}</h2>
        </div>
      </div>
    </div>
  );
};

class Teams extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={match.url}
          render={() => <TeamsIndex conferences={conferences} match={match} />}
        />
        <Route
          path={`${match.url}/:teamId`}
          render={({ match }) => (
            <TeamsDetail team={teamsHash[match.params.teamId]} />
          )}
        />
      </div>
    );
  }
}

export default Teams;
