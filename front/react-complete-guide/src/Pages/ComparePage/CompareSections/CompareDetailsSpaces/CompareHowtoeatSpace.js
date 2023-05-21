import './CompareHowtoeatSpaceStyle.css';
import CompareHowtoeat from './CompareHowtoeat';

function CompareHowtoeatSpace(props) {
    const vitaNumberlist = props.vitaNumbers;
    console.log('howtoeatSpace:', vitaNumberlist);

    const howtoeatSource = vitaNumberlist.map((vitaNumber) => (
        <CompareHowtoeat vitaNumber={vitaNumber}></CompareHowtoeat>
    ))

    return (
        <div id="compare-howtoeat-space">
            <div id="compare-howtoeat-text">
                <h4>섭취 방법</h4>
            </div>
            <div id="compare-each-howtoeat-space">
                {howtoeatSource}
                {props.productCnt === 2 && <ul className="compare-howtoeat-description"></ul>}
            </div>
        </div>
    );
}

export default CompareHowtoeatSpace;