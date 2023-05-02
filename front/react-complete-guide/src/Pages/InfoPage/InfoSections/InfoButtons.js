import './InfoButtonsStyle.css';
import { Link } from 'react-router-dom';

function InfoButtons() {
    return (
        <div id="info-buttons">
            <Link to='/ComparePage'>
                <button className="info-button">비교하기</button>
            </Link>
            <Link to="https://shopping.naver.com/home">
                <button className="info-button">구매하기</button>
            </Link>
            <Link to="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EA%B3%84%EC%82%B0%EA%B8%B0">
                <button className="info-button">계산기에 추가</button>
            </Link>
        </div>
    );
}

export default InfoButtons;