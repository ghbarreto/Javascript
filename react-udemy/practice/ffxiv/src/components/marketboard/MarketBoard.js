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
      <div
        className="class ui grid"
        style={{ gridGap: "10px", marginLeft: "20px" }}
      >
        <RetrieveItems itemName={item} itemSelectedId={itemSelectedId} />
      </div>
    </div>
  );
};

export default MarketBoard;
