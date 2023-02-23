import VitaBlockContent from './VitaBlockContent';
import VitaBlockContentNoX from './VitaBlockContentNoX';
import './VitaBlockStyle.css';

function VitaBlock(props) {
    if (props.src === false) {
        return (
            <div class="vita-component-space">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbTLeo4LDVGQRQgOJ7iF1O6HDhG0B53OSdQ&usqp=CAU" alt="영양제를 추가해주세요" class="vita-need-choice-image"></img>
            </div>
        )
    }
    else {
        if (props.x === true) {
            return (
                <div class="vita-component-space">
                    <VitaBlockContent src={props.src}></VitaBlockContent>
                </div>
            );
        }
        else {
            return (
                <div class="vita-component-space">
                    <VitaBlockContentNoX src={props.src}></VitaBlockContentNoX>
                </div>
            )
        }
    }
}

export default VitaBlock;