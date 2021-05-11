import React, { useEffect, useState } from "react";
import { marketboard } from "../../api/marketboard";
import xiv from "../../api/axios";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
import MarketBoardMoreDetails from "./MarketBoardMoreDetails";
import "./MarketBoardDisplay.css";

const MarketBoardDisplay = itemToDisplay => {
  const [itemsMarketboard, setItems] = useState({});
  const [itemDescription, setItemDescription] = useState([]);
  const value = itemToDisplay.match.params.id;
  const server = itemToDisplay.match.params.dc;
  const retrieveItems = async () => {
    try {
      const response = await marketboard.get(`${value}`);
      setItems(response.data);
    } catch (err) {
      // console.clear();
    }
  };

  itemsMarketboard.listings !== undefined ? (
    Object.keys(itemsMarketboard.listings).map(e => {
      return itemsMarketboard.listings.sort(
        (a, b) => a.total - b.total || a.pricePerUnit - b.pricePerUnit
      );
    })
  ) : (
    <div></div>
  );
  const retrieveName = async () => {
    try {
      const response = await xiv.get(`/item/${value}`);
      setItemDescription(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // Sorting items by total price (asc)

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
          <p>
            <strong>Last updated</strong>{" "}
            <Moment format="DD-MM-YYYY HH:mm">
              {itemsMarketboard.lastUploadTime}
            </Moment>
          </p>
        </div>
      </div>

      <div className="tableDiv">
        <table className="ui collapsing table">
          <thead>
            <tr>
              <th>Retainer's Name</th>

              <th>Quantity</th>
              <th>Total</th>
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
                  </tr>
                );
              })
            ) : (
              <div> </div>
            )}
          </tbody>
        </table>
        <MarketBoardMoreDetails
          itemDescription={itemDescription}
          itemsMarketboard={itemsMarketboard}
          itemToDisplay={itemToDisplay}
          server={server}
        />
      </div>
    </div>
  );
};

export default MarketBoardDisplay;
