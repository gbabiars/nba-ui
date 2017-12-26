import React, { Component } from "react";

const conferences = [{ id: "1", name: "East" }, { id: "2", name: "West" }];
const divisions = [
  { id: "1", name: "Atlantic", conferenceId: "1" },
  { id: "2", name: "Central", conferenceId: "1" },
  { id: "3", name: "Northwest", conferenceId: "2" },
  { id: "4", name: "Pacific", conferenceId: "2" },
  { id: "5", name: "Southeast", conferenceId: "1" },
  { id: "6", name: "Southwest", conferenceId: "2" }
];
const teams = [
  {
    id: "WAS",
    city: "Washington",
    nickname: "Wizards",
    conferenceId: "1",
    divisionId: "5"
  },
  {
    id: "UTA",
    city: "Utah",
    nickname: "Jazz",
    conferenceId: "2",
    divisionId: "3"
  },
  {
    id: "TOR",
    city: "Toronto",
    nickname: "Raptors",
    conferenceId: "1",
    divisionId: "1"
  },
  {
    id: "SAS",
    city: "San Antonio",
    nickname: "Spurs",
    conferenceId: "2",
    divisionId: "6"
  },
  {
    id: "SAC",
    city: "Sacramento",
    nickname: "Kings",
    conferenceId: "2",
    divisionId: "4"
  },
  {
    id: "POR",
    city: "Portland",
    nickname: "Trail Blazers",
    conferenceId: "2",
    divisionId: "3"
  },
  {
    id: "PHX",
    city: "Phoenix",
    nickname: "Suns",
    conferenceId: "2",
    divisionId: "4"
  },
  {
    id: "PHI",
    city: "Philadelphia",
    nickname: "76ers",
    conferenceId: "1",
    divisionId: "1"
  },
  {
    id: "ORL",
    city: "Orlando",
    nickname: "Magic",
    conferenceId: "1",
    divisionId: "5"
  },
  {
    id: "OKC",
    city: "Oklahoma City",
    nickname: "Thunder",
    conferenceId: "2",
    divisionId: "3"
  },
  {
    id: "NYK",
    city: "New York",
    nickname: "Knicks",
    conferenceId: "1",
    divisionId: "1"
  },
  {
    id: "NOP",
    city: "New Orleans",
    nickname: "Pelicans",
    conferenceId: "2",
    divisionId: "6"
  },
  {
    id: "MIN",
    city: "Minnesota",
    nickname: "Timberwolves",
    conferenceId: "2",
    divisionId: "3"
  },
  {
    id: "MIL",
    city: "Milwaukee",
    nickname: "Bucks",
    conferenceId: "1",
    divisionId: "2"
  },
  {
    id: "MIA",
    city: "Miami",
    nickname: "Heat",
    conferenceId: "1",
    divisionId: "5"
  },
  {
    id: "MEM",
    city: "Memphis",
    nickname: "Grizzlies",
    conferenceId: "2",
    divisionId: "6"
  },
  {
    id: "LAL",
    city: "Los Angeles",
    nickname: "Lakers",
    conferenceId: "2",
    divisionId: "4"
  },
  {
    id: "LAC",
    city: "LA",
    nickname: "Clippers",
    conferenceId: "2",
    divisionId: "4"
  },
  {
    id: "IND",
    city: "Indiana",
    nickname: "Pacers",
    conferenceId: "1",
    divisionId: "2"
  },
  {
    id: "HOU",
    city: "Houston",
    nickname: "Rockets",
    conferenceId: "2",
    divisionId: "6"
  },
  {
    id: "GSW",
    city: "Golden State",
    nickname: "Warriors",
    conferenceId: "2",
    divisionId: "4"
  },
  {
    id: "DET",
    city: "Detroit",
    nickname: "Pistons",
    conferenceId: "1",
    divisionId: "2"
  },
  {
    id: "DEN",
    city: "Denver",
    nickname: "Nuggets",
    conferenceId: "2",
    divisionId: "3"
  },
  {
    id: "DAL",
    city: "Dallas",
    nickname: "Mavericks",
    conferenceId: "2",
    divisionId: "6"
  },
  {
    id: "CLE",
    city: "Cleveland",
    nickname: "Cavaliers",
    conferenceId: "1",
    divisionId: "2"
  },
  {
    id: "CHI",
    city: "Chicago",
    nickname: "Bulls",
    conferenceId: "1",
    divisionId: "2"
  },
  {
    id: "CHA",
    city: "Charlotte",
    nickname: "Hornets",
    conferenceId: "1",
    divisionId: "5"
  },
  {
    id: "BKN",
    city: "Brooklyn",
    nickname: "Nets",
    conferenceId: "1",
    divisionId: "1"
  },
  {
    id: "BOS",
    city: "Boston",
    nickname: "Celtics",
    conferenceId: "1",
    divisionId: "1"
  },
  {
    id: "ATL",
    city: "Atlanta",
    nickname: "Hawks",
    conferenceId: "1",
    divisionId: "5"
  }
];

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

const TeamItem = ({ team }) => <div>{`${team.city} ${team.nickname}`}</div>;

const DivisionList = ({ division }) => (
  <div>
    <h5>{division.name}</h5>
    <ul>
      {division.teams.map(team => (
        <li key={team.id}>
          <TeamItem team={team} />
        </li>
      ))}
    </ul>
  </div>
);

const ConferenceList = ({ conference }) => (
  <div>
    <h4>{conference.name}</h4>
    <ul>
      {conference.divisions.map(division => (
        <li key={division.id}>
          <DivisionList division={division} />
        </li>
      ))}
    </ul>
  </div>
);

class Teams extends Component {
  render() {
    return (
      <div>
        <h1>Teams</h1>
        <ul>
          {conferencesWithDivisions.map(conference => (
            <li key={conference.id}>
              <ConferenceList conference={conference} />{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Teams;
