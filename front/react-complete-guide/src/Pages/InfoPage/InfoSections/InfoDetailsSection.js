import './InfoDetailsSectionStyle.css';
import InfoFunctionalitySpace from './InfoDetailsSpaces/InfoFunctionalitySpace';
import InfoFormSpace from './InfoDetailsSpaces/InfoFormSpace';
import InfoHowtoeatSpace from './InfoDetailsSpaces/InfoHowtoeatSpace';
import InfoNutrientListSpace from './InfoDetailsSpaces/InfoNutrientListSpace';
import InfoCautionSpace from './InfoDetailsSpaces/InfoCautionSpace';

function InfoDetailsSection() {
    return (
        <section id="info-details-section">
            <div id="info-detail-text">
                <h4>상세정보</h4>
            </div>
            <div id="info-details-space">
                <InfoFunctionalitySpace></InfoFunctionalitySpace>
                <hr width="1050px"></hr>
                <InfoFormSpace></InfoFormSpace>
                <hr width="1050px"></hr>
                <InfoHowtoeatSpace></InfoHowtoeatSpace>
                <hr width="1050px"></hr>
                <InfoNutrientListSpace></InfoNutrientListSpace>
                <hr width="1050px"></hr>
                <InfoCautionSpace></InfoCautionSpace>
            </div>
        </section>
    );
}

export default InfoDetailsSection;