import React from "react";
import { Link } from "react-router-dom";

import "./DisplayInformation.css";

const DisplayInformation = ({
  name,
  image,
  rank,
  server,
  rankFeast,
  ID,
  characterDetails,
}) => {
  // Displaying character information
  return (
    <div className="ui six doubling red card">
      <div className="card">
        <div className="image">
          <img src={image} alt="character_image" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <hr />
        </div>
        <div className="descriptions">
          <div className="meta">
            <span style={{ color: "black", fontWeight: "bold" }}>Server:</span>
            <a>
              <strong> {server}</strong>
            </a>
          </div>
          <div className="description">
            <strong>Rank</strong>: {!rank ? "None" : rank} <br />
            <strong>Feast Matches:</strong> {rankFeast}
          </div>
        </div>
        <div className="extra content">
          <Link to={`/character/details/${ID}`} exact>
            <button value={ID} className="ui button secondary right floated">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayInformation;
