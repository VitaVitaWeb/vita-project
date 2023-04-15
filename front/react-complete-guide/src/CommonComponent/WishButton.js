import './WishButtonStyle.css';
import { useState } from 'react';

function WishButton() {
    const [display, setDisplay] = useState(false);
    const onHeartImg = 'https://cdn-icons-png.flaticon.com/128/138/138533.png';
    const offHeartImg = 'https://cdn-icons-png.flaticon.com/128/3717/3717486.png';

    function changeHeart() {
        setDisplay(previousHeart => !previousHeart)
    }
    return (
        <div>
        <img
            class="heart-icon"
            src={display ? onHeartImg : offHeartImg}
            alt="icon-heart" onClick={changeHeart}></img>
            
        </div>
    );
}

export default WishButton;