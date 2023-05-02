import './InfoCautionSpaceStyle.css';

function InfoCautionSpace(props) {
    return (
        <div id="info-caution-space">
            <div id="info-caution-text">
                <h4>섭취 시 유의사항</h4>
            </div>
            <div id="info-caution">
                {props.vitaCaution}
            </div>
        </div>
    );
}

export default InfoCautionSpace;