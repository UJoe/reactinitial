import React, { useState } from "react";

const Team = ({ team }) => {
  const [detailshow, setDetailshow] = useState(false);

  return (
    <div className="teamdiv">
      <div id="primary">
        <p className="primdata">{team.name}</p>
        <p className="primdata">{team.franchisePlayers}</p>
      </div>
      {detailshow ? (
        <button onClick={() => setDetailshow(false)}>Show less</button>
      ) : (
        <button onClick={() => setDetailshow(true)}>Show more</button>
      )}
      {detailshow && <div></div>}
    </div>
  );
};

export default Team;