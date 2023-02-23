import './CompareHowtoeatSpaceStyle.css';

function CompareHowtoeatSpace() {
    const howtoeatList = [
        "섭취 방법에 대한 설명이 들어갑니다1",
        "섭취 방법에 대한 설명이 들어갑니다2",
        ""
    ];

    const howtoeatSource = howtoeatList.map((howtoeatSrc) => (
        <div class="compare-howtoeat-description">
            <p>{howtoeatSrc}</p>
        </div>
    ))

    return (
        <div id="compare-howtoeat-space">
            <div id="compare-howtoeat-text">
                <h4>섭취 방법</h4>
            </div>
            <div id="compare-each-howtoeat-space">
                {howtoeatSource}
            </div>
        </div>
    );
}

export default CompareHowtoeatSpace;