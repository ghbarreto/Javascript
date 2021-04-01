import React, { useState, useEffect } from "react";
import xiv from "../api/axios";

const GetCharacter = () => {
  const [val, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await xiv.get("/character/search?name=Rena+Rose ");
      const d = result.data.Results;
      setData(d);
    };
    fetchData();
  }, []);

  let results = [];

  if (val !== undefined) {
    val.map((e) => {
      results.push(e);
    });
  }

  return (
    <div>
      {results !== undefined
        ? results.map((e) => {
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
        : "b"}
    </div>
  );
};

// return <div></div>;
// (
//   <div>
//     {results.map((v) => {
//       return <div>{v}</div>;
//     })}
//   </div>
// );

export default GetCharacter;
