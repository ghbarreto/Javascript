import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import xiv from "../../api/axios";

const RetrieveItems = ({ itemName, itemSelectedId }) => {
  const [data, setData] = useState([]);

  const retrieveInformation = async () => {
    const response = await xiv.get(
      `/search?filters=IsUntradable=0&string=${itemName}&indexes=item`
    );
    setData(response.data.Results);
  };

  useEffect(() => {
    retrieveInformation();
  }, [itemName]);

  return data !== undefined ? (
    data.map(items => {
      return !items.Name ? null : (
        <React.Fragment key={items.ID}>
          <div className="column">
            <img src={`http://xivapi.com${items.Icon}`} />
            {items.Name}
            <Link to={`/marketboard/${items.ID}`}>
              <button
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
