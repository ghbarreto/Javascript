import React, { useEffect, useState } from "react";
import xiv from "../api/axios";
import './ServerList.css'

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

  return Object.keys(servers).map((server) => {
    return (
      <div className="ui pointing dropdown link simple item eight column row">
        <span id={server} className="text " >{server}</span>

        <i className="dropdown  icon"></i>
        <div className="menu">
          <div className="header">Servers</div>
          <div class="divider"></div>
          {servers[server].map((i) => {
            return <div className="item" key={i}>{i}</div>;
          })}
        </div>


      </div>
    );
  });
};

export default ServerList;
