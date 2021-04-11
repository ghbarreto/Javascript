import React, { useEffect, useState } from "react";
import "./CharacterDetail.css";
import xiv from "../api/axios";

const CharacterDetail = id => {
  const [details, setDetails] = useState([]);
  const value = id.match.params.id;

  const fetchCharacterDetails = async () => {
    const request = await xiv(`/character/${value}`);
    const response = request.data.Character;
    setDetails(response);
    console.log(response);
  };

  useEffect(() => {
    fetchCharacterDetails();
  }, []);

  return (
    <div>
      <div className="ui items">
        <div className="item">
          <div className="ui  image">
            <img src={details.Avatar} />
          </div>
          <div className="ui ">
            <div className=" ui content floatRight">
              <h3 className="header">{details.Name}</h3>
              <div className="meta ">
                <span>Description</span>
              </div>
              <div className="description">
                <p></p>
              </div>
              <div className="extra">
                {details.Server} ({details.DC})
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ui three column divided grid">
        <div className="stretched row">
          <div className="column">
            <div className="ui segment">
              <img src={details.Portrait}></img>
            </div>
          </div>
          <div className="column">
            <div className="ui segment">
              <p>asdasoksd</p>
            </div>
            <div className="ui segment">2</div>
          </div>
          <div className="column">
            <div className="ui segment">1</div>
            <div className="ui segment">2</div>
            <div className="ui segment">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
