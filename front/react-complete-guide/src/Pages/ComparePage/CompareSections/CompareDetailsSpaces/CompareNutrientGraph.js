import './CompareNutrientGraphStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';

function CompareNutrientGraph(props) {
    if (props.select === true) {
        return (
            <div class="compare-nutrient-graph">
                <div class="compare-nutrient-graph-space">
                    <VitaGraph type={"compare"} content={props.content}>mg</VitaGraph>
                </div>
            </div>
        );
    }
    else {
        return (
            <div class="compare-nutrient-graph">
                <div class="compare-nutrient-graph-space"></div>
            </div>);
    }
}

export default CompareNutrientGraph;