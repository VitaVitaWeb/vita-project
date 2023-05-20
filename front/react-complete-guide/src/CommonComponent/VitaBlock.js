import './VitaBlockStyle.css';
import VitaBlockContentNoX from './VitaBlockContentNoX';

function VitaBlock(props) {
    return (
        <div className="vita-component-space">
            <VitaBlockContentNoX
                vitaNumber={props.vitaNumber}
                vitaImage={props.vitaImage}
                vitaName={props.vitaName}
                vitaWishCount={props.vitaWishCount}
                vitaWish={props.vitaWish}>
            </VitaBlockContentNoX>
        </div>
    )
}

export default VitaBlock;