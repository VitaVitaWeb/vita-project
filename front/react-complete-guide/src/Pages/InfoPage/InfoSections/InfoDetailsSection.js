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
                <InfoFunctionalitySpace vitaNumber={props.vitaNumber} vitaFunctionality={props.vitaFunctionality}></InfoFunctionalitySpace>
                <hr width="1050px"></hr>
                <InfoFormSpace vitaNumber={props.vitaNumber} vitaForm={props.vitaForm}></InfoFormSpace>
                <hr width="1050px"></hr>
                <InfoHowtoeatSpace vitaHowtoeat={props.vitaHowtoeat}></InfoHowtoeatSpace>
                <hr width="1050px"></hr>
                <InfoNutrientListSpace vitaNumber={props.vitaNumber} vitaNutrient={props.vitaNutrient}></InfoNutrientListSpace>
                <hr width="1050px"></hr>
                <InfoCautionSpace vitaCaution={props.vitaCaution}></InfoCautionSpace>
            </div>
        </section>
    );
}

export default InfoDetailsSection;