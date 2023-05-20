import './CompareCautionSpaceStyle.css';
import CompareCaution from './CompareCaution';

function CompareCautionSpace(props) {
    const vitaNumberlist = props.vitaNumbers;
    console.log('cautionSpace:', vitaNumberlist);

    const cautionSource = vitaNumberlist.map((vitaNumber) => (
        <CompareCaution vitaNumber={vitaNumber}></CompareCaution>
    ))

    return (
        <div id="compare-caution-space">
            <div id="compare-caution-text">
                <h4>섭취 시 유의사항</h4>
            </div>
            <div id="compare-each-caution-space">
                {cautionSource}
                {props.productCnt === 2 && <ul className="compare-caution-precautions"></ul>}
            </div>
        </div>
    );
}

export default CompareCautionSpace;