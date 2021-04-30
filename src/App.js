import "./App.css";
import React, { useState, useEffect } from "react";
import Team from "./components/Team";

const App = () => {
  const [teams, setTeams] = useState([]);

  console.log(teams);
  useEffect(() => {
    console.log("Fetch data.");
    fetch("api/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .finally(() => {
        console.log("Teams", teams);
      });
  }, []);
  //It returns an empty array!!!!!

  return (
    <div className="App">
      <h1>NBA teams - all star voting</h1>
      <div id="teams">
        {teams
          ? teams.map((team, index) => <Team key={index} team={team} />)
          : ""}
      </div>
    </div>
  );
};

export default App;
