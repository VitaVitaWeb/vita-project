import './InfoDetailsSectionStyle.css';
import InfoFunctionalitySpace from './InfoDetailsSpaces/InfoFunctionalitySpace';
import InfoFormSpace from './InfoDetailsSpaces/InfoFormSpace';
import InfoHowtoeatSpace from './InfoDetailsSpaces/InfoHowtoeatSpace';
import InfoNutrientListSpace from './InfoDetailsSpaces/InfoNutrientListSpace';
import InfoCautionSpace from './InfoDetailsSpaces/InfoCautionSpace';

function InfoDetailsSection(props) {
    return (
        <section id="info-details-section">
            <div id="info-detail-text">
                <h4>상세정보</h4>
            </div>
            <div id="info-details-space">
                <InfoFunctionalitySpace vitaNumber={props.vitaNumber}></InfoFunctionalitySpace>
                <hr width="1050px"></hr>
                <InfoFormSpace vitaNumber={props.vitaNumber}></InfoFormSpace>
                <hr width="1050px"></hr>
                <InfoHowtoeatSpace vitaNumber={props.vitaNumber}></InfoHowtoeatSpace>
                <hr width="1050px"></hr>
                <InfoNutrientListSpace vitaNumber={props.vitaNumber}></InfoNutrientListSpace>
                <hr width="1050px"></hr>
                <InfoCautionSpace vitaNumber={props.vitaNumber}></InfoCautionSpace>
            </div>
        </section>
    );
}

export default InfoDetailsSection;