import React, { useEffect } from "react";
import { serverInfo } from "../../api/marketboard";

const MarketBoardMoreDetails = ({
  itemDescription,
  itemsMarketboard,
  itemToDisplay,
}) => {
  const value = itemToDisplay.match.params.id;
  const server = itemToDisplay.match.params.dc;

  const request = async () => {
    const response = await serverInfo.get(`${server}/${value}`);
    console.log(response.data);
  };

  useEffect(() => {
    request();
  }, []);
  return <div></div>;
};

export default MarketBoardMoreDetails;
