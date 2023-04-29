import './VitaBlockStyle.css';
import VitaBlockContent from './VitaBlockContent';
import VitaBlockContentNoX from './VitaBlockContentNoX';

function VitaBlock(props) {
    if (props.x === true) {
        return (
            <div className="vita-component-space">
                <VitaBlockContent vitaImage={props.vitaImage} vitaCompany={props.vitaCompany} vitaName={props.vitaName} vitaWishCount={props.vitaWishCount} vitaWish={props.vitaWish}></VitaBlockContent>
            </div>
        );
    }
    else {
        return (
            <div className="vita-component-space">
                <VitaBlockContentNoX vitaImage={props.vitaImage} vitaCompany={props.vitaCompany} vitaName={props.vitaName} vitaWishCount={props.vitaWishCount} vitaWish={props.vitaWish}></VitaBlockContentNoX>
            </div>
        )
    }
}

export default VitaBlock;