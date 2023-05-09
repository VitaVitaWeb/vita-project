import './VitaBlockContentStyle.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WishButton from './WishButton';

function VitaBlockContent(props) {
    const likeCounter = useSelector(state => state.counter);
    const toggleCounterHandler = () => { };

    return (
        <div>
            <div className="vita-component-top">
                <div className="x-button-space">
                    <button type="button" className="x-button" onClick={() => props.setSelectedProduct(false)}>
                        <img
                            src="https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_close_24.f7ecbaef.svg&w=32&q=75"
                            alt="icon-X" />
                    </button>
                </div>
            </div>
            <div className="vita-component-image-space">
                <div className="wish-button-space">
                    <button type="button" className="wish-button" onClick={toggleCounterHandler}>
                        <WishButton></WishButton>
                    </button>
                </div>
                <div className="vita-component-image">
                    <Link to='/InfoPage'>
                        <img
                            src={props.vitaImage}
                            alt="영양제 이미지" width="150" height="150" />
                    </Link>
                </div>
            </div>
            <div className="vita-component-down">
                <div className="vita-name">
                    {props.vitaName}
                </div>
                <div className="vita-wish-space">
                    <div className="vita-block-wish">
                        < img
                            className="vita-block-heart-icon"
                            src="https://cdn-icons-png.flaticon.com/128/138/138533.png"
                            alt="icon-heart"></img>
                        <span>
                            <p>찜 개수</p>
                        </span>
                    </div >
                    <span>{likeCounter}</span>
                </div>
            </div>
        </div >
    );
}

export default VitaBlockContent;