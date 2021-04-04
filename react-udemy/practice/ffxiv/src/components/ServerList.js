import React, { useEffect, useState } from "react";
import xiv from "../api/axios";

const ServerList = () => {
  const [servers, setServer] = useState([]);

  const fetchServerList = async () => {
    const request = await xiv.get("/servers/dc");
    const response = request.data;
    setServer(response);
  };

  useEffect(() => {
    fetchServerList();
  }, []);

  return Object.keys(servers).map((e) => {
    return (
      <div>
        <ul key={1 + 1}>
          {e}
          {servers[e].map((i) => {
            return <li key={i}>{i}</li>;
          })}
        </ul>
      </div>
    );
  });
};

export default ServerList;
