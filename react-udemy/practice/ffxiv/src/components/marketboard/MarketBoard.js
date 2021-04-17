import React, { useState, useEffect } from "react";
import Form from "../Form";
import RetrieveItems from "./RetrieveItems";
import ServerList from "../server/ServerList";

const MarketBoard = ({ servers }) => {
  console.log(ServerList);
  const [item, setItem] = useState("");
  const [serverChoice, setServerChoice] = useState([]);
  const [itemSelected, setSelected] = useState("");
  const [serv, setServ] = useState([]);

  const getServers = servers => {
    setServ(servers);
  };

  const itemName = name => {
    setItem(name);
  };

  const itemSelectedId = selectedItem => {
    setSelected(selectedItem);
  };

  const selection = server => {
    setServerChoice(server.target.value);
  };
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <ServerList servers={getServers} />
      <Form
        value={itemName}
        options={serv}
        selection={selection}
        title="Choose a dc"
      />
      <div
        className="class ui grid"
        style={{ gridGap: "10px", marginLeft: "20px" }}
      >
        <RetrieveItems
          itemName={item}
          itemSelectedId={itemSelectedId}
          server={serverChoice}
        />
      </div>
    </div>
  );
};

export default MarketBoard;
