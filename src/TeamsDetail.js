import React from "react";
import { teams } from "./data";

const teamsHash = teams.reduce((hash, team) => ({ ...hash, [team.id]: team }));

const TeamsDetail = ({ match }) => {
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
    </div>
  );
};

export default TeamsDetail;
