import './VitaBlockContentStyle.css'
import { Link } from 'react-router-dom';
import Wish from './Wish';
import WishButton from './WishButton';

function VitaBlockContent(props) {
    return (
        <div>
            <div class="vita-component-top">
                <div class="x-button-space">
                    <button type="button" class="x-button">
                        <img
                            src="https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon_close_24.f7ecbaef.svg&w=32&q=75"
                            alt="icon-X" />
                    </button>
                </div>
            </div>
            <div class="vita-component-image-space">
                <div class="wish-button-space">
                    <button type="button" class="wish-button">
                        <WishButton></WishButton>
                    </button>
                </div>
                <div class="vita-component-image">
                    <Link to='/InfoPage'>
                        <img
                            src={props.src}
                            alt="영양제 이미지" width="150" height="150" />
                    </Link>
                </div>
            </div>
            <div class="vita-component-down">
                <div class="vita-company">
                    <h4>회사 이름</h4>
                </div>
                <div class="vita-name">
                    <h4>영양제 이름</h4>
                </div>
                <div class="vita-wish-space">
                    <Wish></Wish>
                </div>
            </div>
        </div>
    );
}

export default VitaBlockContent;