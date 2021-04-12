import React, { useEffect, useState } from "react";
import marketboard from "../../api/marketboard";
import xiv from "../../api/axios";

const RetrieveItems = () => {
  const [data, setData] = useState([]);

  const retrieveInformation = async () => {
    const response = await xiv.get("/item");
    setData(response.data.Results);
  };

  useEffect(() => {
    retrieveInformation();
  }, []);

  data.map(e => {
    console.log(e.Name);
  });

  return data !== undefined ? (
    data.map(items => {
      return !items.Name ? null : (
        <React.Fragment>
          <div className="column">
            <img key={items.ID} src={`http://xivapi.com${items.Icon}`} />
            {items.Name}
          </div>
        </React.Fragment>
      );
    })
  ) : (
    <div>Loading</div>
  );
};

export default RetrieveItems;
