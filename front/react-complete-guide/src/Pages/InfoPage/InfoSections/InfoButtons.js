import "./InfoButtonsStyle.css";
import { Link } from "react-router-dom";

function InfoButtons(props) {
  return (
    <div id="info-buttons">
      <Link to="/ComparePage">
        <button className="info-button">비교하기</button>
      </Link>
      <Link to={props.buyLink}>
        <button className="info-button">구매하기</button>
      </Link>
    </div>
  );
}

export default InfoButtons;
