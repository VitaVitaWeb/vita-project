import './WishStyle.css';
import { useState } from 'react';
import WishButton from './WishButton';

function Wish(props) {
    const [isLiked, setIsLiked] = useState(props.vitaWish); // 찜하기 여부
    const [likeCount, setLikeCount] = useState(props.vitaWishCount); // 찜 개수

    const handleLikeButtonClick = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className="wish">
            <span>
                <p>찜 개수</p>
            </span>
            <span>{likeCount}</span>
            <button type="button" className="wish-button" onClick={handleLikeButtonClick}>
                <WishButton vitaNumber={props.vitaNumber}></WishButton>
            </button >
        </div >
    );
}

export default Wish;