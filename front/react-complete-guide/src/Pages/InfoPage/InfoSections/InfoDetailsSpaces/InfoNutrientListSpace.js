import './InfoNutrientListSpaceStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';

function InfoNutrientListSpace(props) {
    const nutrientList = props.vitaNutrient

    const nutrientSource = nutrientList.map((nutrientSrc) => (
        <div className="info-nutrient-name-graph">
            <div className="info-nutrient-name">{nutrientSrc[0]}</div>
            <div className="info-nutrient-graph-space">
                <VitaGraph type={"info"} content={nutrientSrc[1]} today1={nutrientSrc[2]} today2={nutrientSrc[3]}></VitaGraph>
            </div>
        </div>
    ))

    return (
        <div id="info-nutrient-space">
            <div id="info-nutrient-text">
                <h4>영양소</h4>
            </div>
            <div id="info-nutrient-list-space">
                {nutrientSource}
            </div>
        </div>
    );
}

export default InfoNutrientListSpace;