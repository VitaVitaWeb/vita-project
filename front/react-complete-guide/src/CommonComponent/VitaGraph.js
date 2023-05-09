import './VitaGraphStyle.css';

function VitaGraph(props) {
    const contentLength = props.content;
    const todayLength = props.today;

    const compareContentLength = {
        width: contentLength > todayLength ? '350px' : contentLength / todayLength * 350 + 'px',
        backgroundColor: contentLength > todayLength ? '#C9330E' : '#FF5C35',
        borderRadius: contentLength > todayLength ? '50px 50px 50px 50px' : '50px 0px 0px 50px',
    };

    const compareTodayLength = {
        width: contentLength > todayLength ? todayLength / contentLength * 350 + 'px' : '350px',
        backgroundColor: 'transparent',
        borderRadius: contentLength > todayLength ? '50px 0px 0px 50px' : '50px 50px 50px 50px',
    }

    const nutrientContentText = {
        color: contentLength > todayLength ? '#C9330E' : '#FF5C35'
    };

    const infoContentLength = {
        width: contentLength > todayLength ? '700px' : contentLength / todayLength * 700 + 'px',
        backgroundColor: contentLength > todayLength ? '#C9330E' : '#FF5C35',
        borderRadius: contentLength > todayLength ? '50px 50px 50px 50px' : '50px 0px 0px 50px',
    };

    const infoTodayLength = {
        width: contentLength > todayLength ? todayLength / contentLength * 700 + 'px' : '700px',
        backgroundColor: 'transparent',
        borderRadius: contentLength > todayLength ? '50px 0px 0px 50px' : '50px 50px 50px 50px',
    }

    const nutrientUnits = {
        "비타민 A": "mcg",
        "비타민 B1": "mg",
        "비타민 B2": "mg",
        "비타민 B3": "mgNE",
        "비타민 B5": "mg",
        "비타민 B7": "mcg",
        "비타민 B9": "mcgDFE",
        "비타민 B12": "mcg",
        "비타민 C": "mg",
        "비타민 E": "mg",
        "비타민 D": "mcg",
        "크롬": "mcg",
        "몰리브덴": "mcg",
        "아이오딘": "mcg",
        "망간": "mg",
        "셀레늄": "mcg",
        "구리": "mcg",
        "아연": "mg",
        "철": "mg",
        "마그네슘": "mg",
        "칼슘": "mg",
        "유산균": "억 CFU",
        "루테인": "mg",
        "밀크씨슬": "mg",
        "오메가-3": "mg",
        "MSM": "mg",
        "프로폴리스": "mg",
    };

    const getUnitForNutrient = (nutrient) => nutrientUnits[nutrient];

    // 영양소에 해당하는 단위를 가져옵니다.
    const nutrientUnit = getUnitForNutrient(props.nutrient);

    if (props.type === "compare") {
        return (
            <div>
                <span className="compare-nutrient-range"></span>
                <>
                    {
                        contentLength != null ?
                            <span className="compare-nutrient-content" style={compareContentLength}>
                                <div className="nutrient-content-text" style={nutrientContentText}>
                                    {props.content}{nutrientUnit}
                                </div>
                            </span>
                            :
                            <></>
                    }
                </>
                <span className="compare-today-range" style={compareTodayLength}></span>
            </div>
        );
    }
    else if (props.type === "info") {
        return (
            <div>
                <span className="info-nutrient-range"></span>
                <>
                    {contentLength != null ?
                        <span className="info-nutrient-content" style={infoContentLength}>
                            <div className="nutrient-content-text" style={nutrientContentText}>
                                {props.content}{nutrientUnit}
                            </div>
                        </span>
                        :
                        <></>
                    }
                </>
                <span className="info-today-range" style={infoTodayLength}>
                    <div className="nutrient-today-text">
                        {props.content}{nutrientUnit}
                    </div>
                </span>
            </div>
        );
    }
}

export default VitaGraph;