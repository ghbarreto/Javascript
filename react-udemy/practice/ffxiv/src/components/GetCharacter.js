import React, { useState, useEffect } from "react";
import xiv from "../api/axios";
import DisplayInformation from "./DisplayInformation";

const GetCharacter = ({ name }) => {
  const [values, setData] = useState([]);

  const fetchData = async () => {
    const result = await xiv.get(`/character/search?name=Leeloo+Min`);
    const callback = result.data.Results;
    setData(callback);
    console.log("naame" + name);
  };
  console.log(values);
  useEffect(() => {
    fetchData();
  }, [name]);

  return (
    <div>
      <div>
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
