import './CompareCautionSpaceStyle.css';

function CompareCautionSpace(props) {
    const cautionList = props.vitaCaution;

    const cautionSource = cautionList.map((cautionSrc) => (
        <div className="compare-caution-precautions">
            {cautionSrc}
        </div>
    ))

    return (
        <div id="compare-caution-space">
            <div id="compare-caution-text">
                <h4>섭취 시 유의사항</h4>
            </div>
            <div id="compare-each-caution-space">
                {cautionSource}
            </div>
        </div>
    );
}

export default CompareCautionSpace;