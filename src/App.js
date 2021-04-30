import "./App.css";
import React, { useState, useEffect } from "react";
import Team from "./components/Team";

//still workin on others

const App = () => {
  const [teams, setTeams] = useState([
    {
      name: "Los Angeles Lakers",
      stadium: "Staples Center",
      franchisePlayers: [
        { id: 1, name: "Lebron James" },
        { id: 2, name: "Anthony Davis" },
      ],
    },
    {
      name: "Los Angeles Clippers",
      stadium: "Staples Center",
      franchisePlayers: [
        { id: 3, name: "Kawhi Leonard" },
        { id: 4, name: "Paul George" },
      ],
    },
    {
      name: "Phoenix Suns",
      stadium: "Phoenix Suns Arena",
      franchisePlayers: [
        { id: 5, name: "Chris Paul" },
        { id: 6, name: "Devin Booker" },
      ],
    },
    {
      name: "Brooklyn Nets",
      stadium: "Barclays Center",
      franchisePlayers: [
        { id: 7, name: "James Harden" },
        { id: 8, name: "Kevin Durant" },
        { id: 9, name: "Kyrie Irving" },
      ],
    },
  ]);

  console.log(teams);
  /* useEffect(() => {
    console.log("Fetch data.");
    fetch("api/teams")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .finally(() => {
        console.log(teams);
      });
  }, []); */

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
