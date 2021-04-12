import React, { useEffect, useState } from "react";
import xiv from "../../api/axios";
import "./ServerList.css";

const ServerList = props => {
  const [servers, setServer] = useState([]);

  const fetchServerList = async () => {
    const request = await xiv.get("/servers/dc");
    const response = request.data;
    setServer(response);
  };

  useEffect(() => {
    fetchServerList();
  }, []);

  return <div>{props.servers(servers)}</div>;
};

export default ServerList;
