import './VitaGraphStyle.css';

function VitaGraph(props) {
    if (props.type === "compare") {
        return (
            <div>
                <span class="compare-nutrient-range"></span>
                <span class="compare-nutrient-content">
                    <div class="nutrient-content-text">{props.content}mg</div>
                </span>
                <span class="compare-today-range1"></span>
                <span class="compare-today-range2"></span>
            </div>
        );
    }
    else if (props.type === "info") {
        return (
            <div>
                <span class="info-nutrient-range"></span>
                <span class="info-nutrient-content">
                    <div class="nutrient-content-text">{props.content}</div>
                </span>
                <span class="info-today-range1"></span>
                <span class="info-today-range2"></span>
            </div>
        );
    }
}

export default VitaGraph;