import React from "react";

const DisplayInformation = ({ name, image, rank, server, rankFeast, ID }) => {
  return (
    <div>
      <img src={image} alt="image" />
      <h3>{name}</h3>
      <React.Fragment>
        <strong>Server: </strong>
        {server}
      </React.Fragment>{" "}
      <p>
        <strong>Rank</strong>: {rank}
      </p>
      <p>
        <strong>Feast Matches:</strong> {rankFeast}
      </p>
      <form>
        <button>{ID}Learn More</button>
      </form>
      <hr />
    </div>
  );
};

export default DisplayInformation;
