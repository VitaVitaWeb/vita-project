import './CompareFunctionalitySpaceStyle.css';
import CompareFunctionality from './CompareFunctionality';

function CompareFunctionalitySpace() {
    const functionalityList = [
        true,
        true,
        false
    ];

    const functionalitySource = functionalityList.map((functionalitySrc) => (
        <CompareFunctionality select={functionalitySrc}></CompareFunctionality>
    ))

    return (
        <div id="compare-functionality-space">
            <div id="compare-functionality-text">
                <h4>기능성</h4>
            </div>
            <div id="compare-each-functionality-space">
                {functionalitySource}
            </div>
        </div>
    );
}

export default CompareFunctionalitySpace;