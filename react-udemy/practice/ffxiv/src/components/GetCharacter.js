import React, { useState, useEffect } from "react";
import xiv from "../api/axios";

const GetCharacter = () => {
  const [val, setData] = useState();
  const [dname, setName] = useState();

  const handleSubmit = (e) => {
    console.log(e);
    setName(e);
  };
  useEffect(() => {
    const fetchData = async (e) => {
      const result = await xiv.get(`/character/search?name=${e}`);
      const d = result.data.Results;
      setData(d);
    };
    fetchData(dname);
  });
  let results = [];

  if (val !== undefined) {
    val.map((e) => {
      results.push(e);
    });
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Choose a name: </label>
        <br />
        <input name="name" type="text" />
        <button type="button" onClick={(e) => handleSubmit(e.target.value)}>
          Submit
        </button>
      </form>
      {results !== undefined ? (
        results.map((e) => {
          return (
            <div>
              <img key={e.ID} src={e.Avatar} />
              <br />
              <strong>Feast Matches</strong>: {e.FeastMatches}
              <br />
              <strong>ID</strong>: {e.ID}
              <br />
              <strong>Language</strong>: {e.Lang}
              <br />
              <strong>Name</strong>: {e.Name}
              <br />
              <strong>Rank</strong>: {e.Rank}
              <br />
              <strong>Rank Icon</strong>: {e.RankIcon}
              <br />
              <strong>Server</strong>: {e.Server}
              <br />
              <hr />
            </div>
          );
        })
      ) : (
        <div>Waiting for a name</div>
      )}
    </div>
  );
};

export default GetCharacter;
