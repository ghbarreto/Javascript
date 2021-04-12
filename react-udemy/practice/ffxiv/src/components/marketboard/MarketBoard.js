import React from "react";
import Form from "../Form";
import RetrieveItems from "./RetrieveItems";

const MarketBoard = () => {
  return (
    <div style={{ fontFamily: "Roboto, sans-serif" }}>
      <Form />
      <div className="ui grid ">
        <div className="eight column row">
          <RetrieveItems />
        </div>
      </div>
    </div>
  );
};

export default MarketBoard;
