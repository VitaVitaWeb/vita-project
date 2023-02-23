import './CompareButtonsStyle.css';
import { Link } from 'react-router-dom';

function CompareButtons(props) {
    if (props.select === true) {
        return (
            <div id="compare-buttons">
                <Link to="/Infopage">
                    <button class="compare-button">살펴보기 버튼</button>
                </Link>
                <Link to="https://shopping.naver.com/home">
                    <button class="compare-button">구매하기 버튼</button>
                </Link>
            </div>
        );
    }
    else {
        return (<div id="compare-buttons"></div>);
    }
}

export default CompareButtons;