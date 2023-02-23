import './CompareFormSpaceStyle.css';
import CompareForms from './CompareForms';

function CompareFormSpace() {
    const formList = [
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", true],
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", true],
        ["", false]
    ];

    const formSource = formList.map((formSrc) => (
        <CompareForms src={formSrc[0]} select={formSrc[1]}></CompareForms>
    ))

    return (
        <div id="compare-form-space">
            <div id="compare-form-text">
                <h4>제형</h4>
            </div>
            <div id="compare-each-form-space">
                {formSource}
            </div>
        </div>
    );
}

export default CompareFormSpace;