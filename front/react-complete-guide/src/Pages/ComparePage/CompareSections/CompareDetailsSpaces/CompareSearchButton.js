import './CompareSearchButtonStyle.css';
import ComparePopup from "./ComparePopup";

function CompareSearchButton({ onProductSelected }) {
    return (
        <div className="vita-component-space">
            <ComparePopup onProductSelected={onProductSelected}></ComparePopup>
        </div>
    );
}

export default CompareSearchButton;