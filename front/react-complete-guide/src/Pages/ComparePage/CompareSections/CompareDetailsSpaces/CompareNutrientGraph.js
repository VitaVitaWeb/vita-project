import './CompareNutrientGraphStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';

function CompareNutrientGraph(props) {
    return (
        <div className="compare-nutrient-graph">
            <div className="compare-nutrient-graph-space">
                {
                    props.isSelected === true ?
                        <VitaGraph type={"compare"} content={props.content} today1={props.today1} today2={props.today2}>mg</VitaGraph>
                        :
                        <></>
                }
            </div>
        </div>
    );

}

export default CompareNutrientGraph;