import React, { useState, useEffect } from "react";
import xiv from "../api/axios";

const GetCharacter = () => {
  const [val, setData] = useState([null]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await xiv.get("/lore");
      const d = result.data.Results;
      d.map((e) => {
        console.log(e.Text);
      });
      setData(d);
    };

    fetchData();
  }, []);
  return <div>{val}</div>;
};

export default GetCharacter;
