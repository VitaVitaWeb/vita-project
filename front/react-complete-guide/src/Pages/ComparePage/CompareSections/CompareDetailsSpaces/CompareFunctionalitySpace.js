import './CompareFunctionalitySpaceStyle.css';
import CompareFunctionality from './CompareFunctionality';

function CompareFunctionalitySpace(props) {
    const vitaNumberlist = props.vitaNumbers;
    console.log('functionlitySpace:', vitaNumberlist);

    const functionalityListSource = vitaNumberlist.map((vitaNumber) => (
        <CompareFunctionality vitaNumber={vitaNumber}></CompareFunctionality>
    ));

    return (
        <div id="compare-functionality-space">
            <div id="compare-functionality-text">
                <h4>기능성</h4>
            </div>
            <div id="compare-each-functionality-space">
                {functionalityListSource}
                {props.productCnt === 2 && <ul className="compare-functionality-ul"></ul>}
            </div>
        </div>
    );
}

export default CompareFunctionalitySpace;