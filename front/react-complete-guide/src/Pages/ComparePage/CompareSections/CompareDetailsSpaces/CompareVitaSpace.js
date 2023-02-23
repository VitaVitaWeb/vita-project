import './CompareVitaSpaceStyle.css';
import VitaBlock from '../../../../CommonComponent/VitaBlock';

function CompareVitaSpace() {
    return (
        <div id="compare-vita-space">
            <VitaBlock src={"https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210922173604436_600.jpg&w=256&q=75"} x={true}></VitaBlock>
            <VitaBlock src={"https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210117120537015_600.jpg&w=1080&q=100"} x={true}></VitaBlock>
            <VitaBlock src={false} x={false}></VitaBlock>
        </div>
    );
}

export default CompareVitaSpace;