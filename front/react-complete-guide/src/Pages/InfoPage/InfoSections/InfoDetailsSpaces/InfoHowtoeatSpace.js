import './InfoHowtoeatSpaceStyle.css';

function InfoHowtoeatSpace(props) {
    return (
        <div id="info-howtoeat-space">
            <div id="info-howtoeat-text">
                <h4>섭취 방법</h4>
            </div>
            <div id="info-howtoeat">
                {props.vitaHowtoeat}
            </div>
        </div>
    );
}

export default InfoHowtoeatSpace;