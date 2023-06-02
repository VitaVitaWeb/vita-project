import "./VitaBlockContentStyle.css";
import WishButton from "./WishButton";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";

function VitaBlockContentNoX(props) {
  const [vitaWishData, setVitaWishData] = useState(null);

  const fetchData = async () => {
    const result = await axios.get(`/totallike/${props.vitaNumber}`);
    console.log("Wish Count: ", result.data);
    setVitaWishData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [props.vitaNumber]);

  const toggleCounterHandler = () => {
    fetchData();
  };

  if (!vitaWishData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="vita-component-top">
        <div className="x-button-space"></div>
      </div>
      <div className="vita-component-image-space">
        <div className="wish-button-space">
          <button
            type="button"
            className="wish-button"
            onClick={toggleCounterHandler}
          >
            <WishButton
              vitaNumber={props.vitaNumber}
              onWishChange={toggleCounterHandler}
            ></WishButton>
          </button>
        </div>
        <div className="vita-component-image">
          <Link to={`/InfoPage/${props.vitaNumber}`}>
            <img
              src={props.vitaImage}
              alt="영양제 이미지"
              width="150"
              height="150"
            />
          </Link>
        </div>
      </div>
      <div className="vita-component-down">
        <div className="vita-name">{props.vitaName}</div>
        <div className="vita-wish-space">
          <div className="vita-block-wish">
            <img
              className="vita-block-heart-icon"
              src="https://cdn-icons-png.flaticon.com/128/138/138533.png"
              alt="icon-heart"
            ></img>
            <span>
              <p>찜 개수</p>
            </span>
          </div>
          <span>{vitaWishData.cnt}</span>
        </div>
      </div>
    </div>
  );
}

export default VitaBlockContentNoX;
