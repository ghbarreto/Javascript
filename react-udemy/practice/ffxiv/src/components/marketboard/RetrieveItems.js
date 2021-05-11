import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import xiv from "../../api/axios";

const RetrieveItems = ({ itemName, itemSelectedId, server }) => {
  const [data, setData] = useState([]);

  const retrieveInformation = async () => {
    const response = await xiv.get(
      `/search?filters=IsUntradable=0&string=${itemName}&indexes=item`
    );
    setData(response.data.Results);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      retrieveInformation();
    }, 600);
    return () => clearTimeout(timer);
  }, [itemName, server]);

  return data !== undefined ? (
    data.map(items => {
      return !items.Name ? null : (
        <React.Fragment key={items.ID}>
          <div
            className="two wide column"
            style={{
              textAlign: "center",
              marginTop: "50px",
              border: "1px solid lightgray",
              backgroundColor: "lightgray",
              gridGap: "3px",
              borderRadius: "20px",
              width: "300px",
            }}
          >
            <Link serverC={server} to={`/marketboard/${server}/${items.ID}`}>
              <img
                className="ui avatar image"
                style={{ margin: "10px" }}
                src={`http://xivapi.com${items.Icon}`}
              />

              <div className="content" style={{ margin: "10px" }}>
                {items.Name}
              </div>
              <button
                className="ui mini primary button"
                value={items.ID}
                onClick={e => itemSelectedId(e.target.value)}
              >
                Select
              </button>
            </Link>
          </div>
        </React.Fragment>
      );
    })
  ) : (
    <div>Loading</div>
  );
};

export default RetrieveItems;
