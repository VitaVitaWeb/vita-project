import './CompareButtonsSpaceStyle.css';
import CompareButtons from './CompareButtons';

function CompareButtonsSpace() {
    const buttonList = [true, true, false];

    const buttonSource = buttonList.map((buttonSrc) => (
        <CompareButtons select={buttonSrc}></CompareButtons>
    ))

    return (
        <div id="compare-buttons-space">
            {buttonSource}
        </div>
    );
}

export default CompareButtonsSpace;