import './CompareVitaSpaceStyle.css';
import VitaBlock from '../../../../CommonComponent/VitaBlock';

function CompareVitaSpace(props) {
    return (
        <div id="compare-vita-space">
            <VitaBlock vitaImage={props.vitaImage[0]} x={true} vitaWishCount={props.vitaWishCount[0]} vitaCompany={props.vitaCompany[0]} vitaName={props.vitaName[0]}></VitaBlock>
            <VitaBlock vitaImage={props.vitaImage[1]} x={true} vitaWishCount={props.vitaWishCount[1]} vitaCompany={props.vitaCompany[1]} vitaName={props.vitaName[1]}></VitaBlock>
            <VitaBlock vitaImage={props.vitaImage[2]} x={true} vitaWishCount={props.vitaWishCount[2]} vitaCompany={props.vitaCompany[2]} vitaName={props.vitaName[2]}></VitaBlock>
        </div >
    );
}

export default CompareVitaSpace;