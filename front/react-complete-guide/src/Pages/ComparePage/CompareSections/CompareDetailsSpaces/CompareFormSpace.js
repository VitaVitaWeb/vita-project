import './CompareFormSpaceStyle.css';
import CompareForms from './CompareForms';

function CompareFormSpace(props) {
    const formList = props.vitaForm

    const formListSource = formList.map((formSrc) => (
        <CompareForms formIconSrc={formSrc[0]} formIconName={formSrc[1]}></CompareForms>
    ))

    return (
        <div id="compare-form-space">
            <div id="compare-form-text">
                <h4>제형</h4>
            </div>
            <div id="compare-each-form-space">
                {formListSource}
            </div>
        </div>
    );
}

export default CompareFormSpace;