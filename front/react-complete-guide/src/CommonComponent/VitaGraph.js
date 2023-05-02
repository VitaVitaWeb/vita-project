import './VitaGraphStyle.css';

function VitaGraph(props) {
    const contentLength = props.content;
    const todayLength1 = props.today1;
    const todayLength2 = props.today2;

    const compareContentLength = {
        width: contentLength * 3.5 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#C9330E' : (contentLength >= todayLength1 ? '#FF5C35' : '#FFAC97')
    };

    const compareTodayLength1 = {
        width: todayLength1 * 3.5 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#FFAC97' : (contentLength >= todayLength1 ? '#FFAC97' : 'transparent')
    }

    const compareTodayLength2 = {
        width: todayLength2 * 3.5 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#FF5C35' : (contentLength >= todayLength1 ? 'transparent' : 'transparent')
    }

    const nutrientContentText = {
        color: contentLength > todayLength2 ? '#C9330E' : (contentLength >= todayLength1 ? '#FF5C35' : '#FFAC97')
    };

    const infoContentLength = {
        width: contentLength * 7 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#C9330E' : (contentLength >= todayLength1 ? '#FF5C35' : '#FFAC97')
    };

    const infoTodayLength1 = {
        width: todayLength1 * 7 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#FFAC97' : (contentLength >= todayLength1 ? '#FFAC97' : 'transparent')
    }

    const infoTodayLength2 = {
        width: todayLength2 * 7 + 'px',
        backgroundColor: contentLength > todayLength2 ? '#FF5C35' : (contentLength >= todayLength1 ? 'transparent' : 'transparent')
    }

    if (props.type === "compare") {
        return (
            <div>
                <span className="compare-nutrient-range"></span>
                <>
                    {
                        contentLength != null ?
                            <span className="compare-nutrient-content" style={compareContentLength}>
                                <div className="nutrient-content-text" style={nutrientContentText}>{props.content}mg</div>
                            </span>
                            :
                            <></>
                    }
                </>
                <span className="compare-today-range1" style={compareTodayLength1}></span>
                <span className="compare-today-range2" style={compareTodayLength2}></span>
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
                            <div className="nutrient-content-text" style={nutrientContentText}>{props.content}mg</div>
                        </span>
                        :
                        <></>
                    }
                </>
                <span className="info-today-range1" style={infoTodayLength1}></span>
                <span className="info-today-range2" style={infoTodayLength2}></span>
            </div>
        );
    }
}

export default VitaGraph;