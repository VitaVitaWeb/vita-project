import './CompareFormSpaceStyle.css';
import CompareForms from './CompareForms';

function CompareFormSpace(props) {
    const vitaNumberlist = props.vitaNumbers;
    console.log('formSpace:', vitaNumberlist);

    const formListSource = vitaNumberlist.map((vitaNumber) => (
        <CompareForms vitaNumber={vitaNumber}></CompareForms>
    ))

    return (
        <div id="compare-form-space">
            <div id="compare-form-text">
                <h4>제형</h4>
            </div>
            <div id="compare-each-form-space">
                {formListSource}
                {props.productCnt === 2 && <ul className="compare-form-ul"></ul>}
            </div>
        </div>
    );
}

export default CompareFormSpace;