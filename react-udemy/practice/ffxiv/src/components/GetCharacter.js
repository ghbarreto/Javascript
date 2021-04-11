import React, { useState, useEffect } from "react";

import xiv from "../api/axios";
import DisplayInformation from "./DisplayInformation";

const GetCharacter = ({ name }) => {
  const [values, setData] = useState([]);

  const fetchData = async () => {
    if (!name) {
      return;
    }
    const result = await xiv.get(`/character/search?name=${name}`);
    const callback = result.data.Results;
    setData(callback);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [name]);

  // displaying the character information
  return (
    <div>
      <div>
        {!values ? "Loading" : ""}
        {values.map((value, i) => {
          return (
            <DisplayInformation
              key={i}
              name={value.Name}
              image={value.Avatar}
              rankFeast={value.FeastMatches}
              rank={value.Rank}
              server={value.Server}
              ID={value.ID}
            ></DisplayInformation>
          );
        })}
      </div>
    </div>
  );
};
export default GetCharacter;
