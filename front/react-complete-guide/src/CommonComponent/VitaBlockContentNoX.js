import "./VitaBlockContentStyle.css";
import WishButton from "./WishButton";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

function VitaBlockContentNoX(props) {
  const likeCounter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};
  const handleRemoveClick = () => {
    props.onProductRemoved && props.onProductRemoved(props.vitaNumber);
  };
  return (
    <div>
      <div className="vita-component-top">
        <div className="x-button-space">
          <button onClick={handleRemoveClick}>X</button> {/* X 버튼 추가 */}
        </div>
      </div>
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
            {/* <WishButton></WishButton> */}
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
              <p></p>
              <p>찜 개수</p>
            </span>
          </div>
          <span>{likeCounter}</span>
        </div>
      </div>
    </div>
  );
}

export default VitaBlockContentNoX;
