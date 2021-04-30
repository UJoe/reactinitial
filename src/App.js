import "./App.css";
import React, { useState, useEffect } from "react";
import Team from "./components/Team";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [teams, stetTeams] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("api/teams")
      .then((res) => res.json())
      .then((data) => stetTeams(data))
      .catch((err) => stetTeams(null))
      .finally(() => setLoading(false));
  }, []);
  const App = () => {
    return (
      <div className="App">
        <h1>NBA teams - all star voting</h1>
        <div id="teams">
          {teams && loading === false
            ? teams.map((team, index) => <Team key={index} team={team} />)
            : ""}
        </div>
      </div>
    );
  };
};

export default App;
