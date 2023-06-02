import "./WishButtonStyle.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function WishButton(props) {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const incrementHandler = async () => {
    try {
      await axios.put(`/totallike/${props.vitaNumber}`);
      console.log("찜 개수 증가");
      dispatch({ type: "increment" });
      props.onWishChange();
    } catch (error) {
      console.error("Failed to add like:", error);
    }
  };

  const decrementHandler = async () => {
    try {
      await axios.put(`/totallikeminus/${props.vitaNumber}`);
      console.log("찜 개수 감소");
      dispatch({ type: "decrement" });
      props.onWishChange();
    } catch (error) {
      console.error("Failed to remove like:", error);
    }
  };

  function changeHeart() {
    setDisplay((previousHeart) => !previousHeart);
  }

  return (
    <div>
      {display ? (
        <img
          className="heart-icon"
          src="https://cdn-icons-png.flaticon.com/128/138/138533.png"
          alt="icon-heart"
          onClick={async () => {
            await decrementHandler();
            changeHeart();
          }}
        ></img>
      ) : (
        <img
          className="heart-icon"
          src="https://cdn-icons-png.flaticon.com/128/3717/3717486.png"
          alt="icon-heart"
          onClick={async () => {
            await incrementHandler();
            changeHeart();
          }}
        ></img>
      )}
    </div>
  );
}

export default WishButton;
