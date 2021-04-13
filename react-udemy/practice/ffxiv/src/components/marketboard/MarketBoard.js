import React, { useState, useEffect } from "react";
import Form from "../Form";
import RetrieveItems from "./RetrieveItems";

const MarketBoard = ({ abc }) => {
  const [item, setItem] = useState("");
  const [itemSelected, setSelected] = useState("");

  const itemName = name => {
    setItem(name);
  };

  const itemSelectedId = selectedItem => {
    setSelected(selectedItem);
  };

  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Form value={itemName} />
      <div className="ui grid ">
        <div className="eight column row">
          <RetrieveItems itemName={item} itemSelectedId={itemSelectedId} />
        </div>
      </div>
    </div>
  );
};

export default MarketBoard;
