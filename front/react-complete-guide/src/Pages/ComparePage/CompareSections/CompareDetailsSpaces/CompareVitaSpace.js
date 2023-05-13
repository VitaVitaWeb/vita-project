import './CompareVitaSpaceStyle.css';
import VitaBlock from '../../../../CommonComponent/VitaBlock';

function CompareVitaSpace(props) {
    console.log('VitaSpace: ', props);

    return (
        <div id="compare-vita-space">
            <VitaBlock vitaImage={props.vitaImages[0]} x={true} vitaWishCount={props.vitaWishCounts[0]} vitaName={props.vitaNames[0]}></VitaBlock>
            <VitaBlock vitaImage={props.vitaImages[1]} x={true} vitaWishCount={props.vitaWishCounts[1]} vitaName={props.vitaNames[1]}></VitaBlock>
            <VitaBlock vitaImage={props.vitaImages[2]} x={true} vitaWishCount={props.vitaWishCounts[2]} vitaName={props.vitaNames[2]}></VitaBlock>
        </div >
    );
}

export default CompareVitaSpace;