import './CompareSearchButtonStyle.css';
import ComparePopup from "./ComparePopup";

function CompareSearchButton({ onProductSelected }) {
    const handleProductSelected = (product) => {
        console.log('Selected Product in Search Button:', product); // 선택된 product 출력
        onProductSelected(product);
    };

    return (
        <div className="vita-component-space">
            <ComparePopup onSelectedProduct={handleProductSelected}></ComparePopup>
        </div>
    );
}


export default CompareSearchButton;