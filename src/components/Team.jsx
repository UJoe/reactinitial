import React, { useState } from "react";

const Team = ({ team }) => {
  const [detailshow, setDetailshow] = useState(false);
  console.log("Team:", team);
  console.log("name:", team.name);

  const vote = () => {
    //Oh no my time is over...
  };

  return (
    <div className="teamdiv">
      <div id="primary">
        <p className="primdata">{team.name}</p>
        <p className="primdata">{team.franchisePlayers}</p>
      </div>
      {detailshow ? (
        <button onClick={() => setDetailshow(false)}>Show less</button>
      ) : (
        ""
      )}
      {detailshow && (
        <div>
          {team.franchisePlayers.map((player) => (
            <div>
              {player} Vote <button onClick={() => vote()}>Vote</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
