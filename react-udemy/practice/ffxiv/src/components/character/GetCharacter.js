import React, { useState, useEffect } from "react";

import xiv from "../../api/axios";
import DisplayInformation from "./DisplayInformation";
import Spinner from "../Spinner";

const GetCharacter = ({ name, server }) => {
  const [values, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!name) {
      return setLoading(true);
    }

    if (name) {
      setLoading(false);
    }

    const result = await xiv.get(
      `/character/search?name=${name}&server=_dc_${server}`
    );

    const callback = result.data.Results;
    setData(callback);
    setLoading(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 600);
    return () => clearTimeout(timer);
  }, [name, server]);

  // displaying the character information
  if (!values) {
    return <div></div>;
  }
  return loading ? (
    values.length == 0 ? (
      <div>Found Nothing</div>
    ) : (
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
    )
  ) : (
    <Spinner title="Loading Character" />
  );
};
export default GetCharacter;
