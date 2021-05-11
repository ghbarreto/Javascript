import React, { useState, useEffect } from "react";
import Form from "../Form";
import RetrieveItems from "./RetrieveItems";
import ServerList from "../server/ServerList";
import xiv from "../../api/axios";

const MarketBoard = ({ servers }) => {
  const [item, setItem] = useState("");
  const [serverChoice, setServerChoice] = useState([]);
  const [itemSelected, setSelected] = useState("");
  const [serv, setServ] = useState([]);
  const [datacenterServers, setDatacenterServers] = useState("");
  const [returnedServers, setReturnedServers] = useState({});

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

  const dcServers = dropdownOption => {
    setDatacenterServers(dropdownOption);
  };

  const request = async () => {
    const response = await xiv.get("/servers/dc");
    Object.keys(response.data).map(e => {
      if (e === datacenterServers) {
        response.data[e].map(k => {
          setReturnedServers(k);
        });
      }
    });
  };

  useEffect(() => {
    request();
  }, [datacenterServers]);

  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <ServerList servers={getServers} />
      <Form
        value={itemName}
        options={serv}
        selection={selection}
        title="Choose a dc"
        additionalButton={returnedServers}
        dcServers={dcServers}
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
