import './InfoNutrientListSpaceStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';

function InfoNutrientListSpace() {
    const nutrientList = [
        ["영양소1", 50],
        ["영양소2", 70],
        ["영양소3", 30],
        ["영양소4", 40]
    ];

    const nutrientSource = nutrientList.map((nutrientSrc) => (
        <div class="info-nutrient-name-graph">
            <div class="info-nutrient-name">{nutrientSrc[0]}</div>
            <div class="info-nutrient-graph-space">
                <VitaGraph type={"info"} content={nutrientSrc[1]}>mg</VitaGraph>
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