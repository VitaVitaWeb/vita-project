import './CompareButtonsSpaceStyle.css';
import CompareButtons from './CompareButtons';

function CompareButtonsSpace(props) {
    const vitaNumberlist = props.vitaNumbers;
    console.log('ButtonsSpace:', vitaNumberlist);

    const buttonListSource = vitaNumberlist.map((vitaNumber) => (
        <CompareButtons vitaNumber={vitaNumber}></CompareButtons>
    ))

    return (
        <div id="compare-buttons-space">
            {buttonListSource}
            {props.productCnt === 2 && <ul className="compare-buttons"></ul>}
        </div>
    );
}

export default CompareButtonsSpace;