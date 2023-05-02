import './CompareFunctionalitySpaceStyle.css';
import CompareFunctionality from './CompareFunctionality';

function CompareFunctionalitySpace(props) {
    const functionalityList = props.vitaFunctionality;
    console.log(functionalityList);

    const functionalityListSource = functionalityList.map((functionalitySrc) => (
        <CompareFunctionality functionalityListIcon={functionalitySrc}></CompareFunctionality>
    ));

    return (
        <div id="compare-functionality-space">
            <div id="compare-functionality-text">
                <h4>기능성</h4>
            </div>
            <div id="compare-each-functionality-space">
                {functionalityListSource}
            </div>
        </div>
    );
}

export default CompareFunctionalitySpace;