import React, { useEffect, useState } from "react";
import xiv from "../../api/axios";
import { marketboard } from "../../api/marketboard";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

const MarketBoardDisplay = itemToDisplay => {
  const [itemsMarketboard, setItems] = useState({});

  const value = itemToDisplay.match.params.id;
  const retrieveItems = async () => {
    try {
      const response = await marketboard.get(`${value}`);
      setItems(response.data);
    } catch (err) {
      console.clear();
    }
  };

  // console.log(itemsMarketboard.listings);
  useEffect(() => {
    retrieveItems();
  }, [itemToDisplay]);

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Retainer's Name</th>
            {/* <th>Average Price</th> */}
            {/* <th>High Quality</th> */}
            {/* <th>Average Price HQ</th> */}
            {/* <th>Max Price</th> */}
            {/* <th>Price per Unit</th> */}
            <th>Quantity</th>
            <th>Total</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {itemsMarketboard.listings !== undefined ? (
            Object.keys(itemsMarketboard.listings).map(e => {
              const arr = [];
              arr.push(itemsMarketboard.listings[e].total);

              return (
                <tr key={itemsMarketboard.listingID}>
                  <td data-label="Name">
                    <strong style={{ fontSize: "15px" }}>
                      {itemsMarketboard.listings[e].retainerName}
                    </strong>
                  </td>
                  <td data-label="Age">
                    {itemsMarketboard.listings[e].quantity}
                  </td>
                  <td className="positive" data-label="Age">
                    <NumberFormat
                      value={itemsMarketboard.listings[e].total}
                      displayType={"text"}
                      thousandSeparator={true}
                    >
                      {itemsMarketboard.listings[e].total}
                    </NumberFormat>
                  </td>
                  <td data-label="Job">
                    <Moment format="DD-MM-YYYY HH:mm">
                      {itemsMarketboard.lastUploadTime}
                    </Moment>
                  </td>
                </tr>
              );
            })
          ) : (
            <div> </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MarketBoardDisplay;
/* <td data-label="Age">{itemsMarketboard.averagePriceHQ}</td> */
/* <td data-label="Name">{itemsMarketboard.maxPrice}</td> */
/* <td data-label="Job">
                    {itemsMarketboard.listings[e].pricePerUnit}
                  </td> */

/* <td data-label="Age">{itemsMarketboard.averagePrice}</td> */
/* {itemsMarketboard.averagePrice} */
