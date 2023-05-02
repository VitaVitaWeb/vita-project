import './CompareHowtoeatSpaceStyle.css';

function CompareHowtoeatSpace(props) {
    const howtoeatList = props.vitaHowtoeat;

    const howtoeatSource = howtoeatList.map((howtoeatSrc) => (
        <div className="compare-howtoeat-description">
            {howtoeatSrc}
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