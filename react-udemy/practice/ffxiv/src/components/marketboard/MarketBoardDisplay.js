import React, { useEffect, useState } from "react";
import { marketboard } from "../../api/marketboard";
import xiv from "../../api/axios";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import "./MarketBoardDisplay.css";

const MarketBoardDisplay = itemToDisplay => {
  const [itemsMarketboard, setItems] = useState({});
  const [itemDescription, setItemDescription] = useState([]);

  const value = itemToDisplay.match.params.id;
  const retrieveItems = async () => {
    try {
      const response = await marketboard.get(`${value}`);
      setItems(response.data);
    } catch (err) {
      // console.clear();
    }
  };
  const retrieveName = async () => {
    try {
      const response = await xiv.get(`/item/${value}`);
      setItemDescription(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Sorting items by total price (asc)
  itemsMarketboard.listings !== undefined ? (
    Object.keys(itemsMarketboard.listings).map(e => {
      itemsMarketboard.listings.sort(
        (a, b) => a.total - b.total || a.pricePerUnit - b.pricePerUnit
      );
    })
  ) : (
    <div></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      retrieveItems();
      retrieveName();
    }, 600);
    return () => clearTimeout(timer);
  }, [itemToDisplay]);

  return (
    <div>
      <div class="ui icon message">
        <img
          className="ui tiny icon right spaced image"
          src={`https://xivapi.com/${itemDescription.IconHD}`}
        />
        <div class="content">
          <div class="header">{itemDescription.Name}</div>
          <p>{itemDescription.Description_en}</p>
        </div>
      </div>
      <div className="tableDiv">
        <table className="ui collapsing table">
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
