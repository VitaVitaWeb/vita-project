import './WishButtonStyle.css';
import { useState } from 'react';

function WishButton() {
    const [display, setDisplay] = useState(false);
    function changeHeart() {
        setDisplay(previousHeart => !previousHeart)
    }
    return (
        <div>
            {display ?
                < img
                    class="heart-icon"
                    src="https://cdn-icons-png.flaticon.com/128/138/138533.png"
                    alt="icon-heart" onClick={changeHeart}></img>
                :
                < img
                    class="heart-icon"
                    src="https://cdn-icons-png.flaticon.com/128/3717/3717486.png"
                    alt="icon-heart" onClick={changeHeart}></img>
            }
        </div>
    );
}

export default WishButton;