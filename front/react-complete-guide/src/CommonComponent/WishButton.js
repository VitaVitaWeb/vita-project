import './WishButtonStyle.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function WishButton() {
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' });
    }

    function changeHeart() {
        setDisplay(previousHeart => !previousHeart)
    }

    return (
        <div>
            {display ?
                < img
                    className="heart-icon"
                    src="https://cdn-icons-png.flaticon.com/128/138/138533.png"
                    alt="icon-heart" onClick={() => {
                        changeHeart()
                        decrementHandler()
                    }}></img>
                :
                < img
                    className="heart-icon"
                    src="https://cdn-icons-png.flaticon.com/128/3717/3717486.png"
                    alt="icon-heart" onClick={() => {
                        changeHeart()
                        incrementHandler()
                    }}></img>
            }
        </div>
    );
}

export default WishButton;