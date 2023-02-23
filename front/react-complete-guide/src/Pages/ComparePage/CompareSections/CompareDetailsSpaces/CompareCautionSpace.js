import './CompareCautionSpaceStyle.css';

function CompareCautionSpace() {
    const cautionList = [
        "섭취 시 유의사항에 대한 내용이 들어갑니다1",
        "섭취 시 유의사항에 대한 내용이 들어갑니다2",
        ""
    ];

    const cautionSource = cautionList.map((cautionSrc) => (
        <div class="compare-caution-precautions">
            <p>{cautionSrc}</p>
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