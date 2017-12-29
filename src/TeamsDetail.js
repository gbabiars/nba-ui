import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import sortBy from "lodash/sortBy";
import { teams } from "./data";

const teamsHash = teams.reduce((hash, team) => ({ ...hash, [team.id]: team }));

const rosterQuery = gql`
  query Roster($teamId: String!) {
    team(id: $teamId) {
      roster {
        id
        name
        number
      }
    }
  }
`;

const Roster = ({ data }) => {
  if (data.loading) {
    return <div />;
  }

  return (
    <div>
      <h4 className="roster__header">Roster</h4>
      <ul>
        {sortBy(data.team.roster, ["name"]).map(player => (
          <li key={player.id} className="roster__item">
            {`#${player.number} ${player.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

const TeamsDetail = ({ match, data }) => {
  const team = teamsHash[match.params.teamId];
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
      <Roster data={data} />
    </div>
  );
};

export default graphql(rosterQuery, {
  options: ({ match }) => ({
    variables: {
      teamId: match.params.teamId
    }
  })
})(TeamsDetail);
