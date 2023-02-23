import './InfoIntroSectionStyle.css';
import InfoButtons from './InfoButtons';
import Wish from '../../../CommonComponent/Wish';

function InfoIntroSection(props) {
    return (
        <section id="info-intro-section">
            <div id="info-image-space">
                <div id="info-image">
                    <img
                        src={props.src}
                        alt="영양제 이미지" />
                </div>
            </div>
            <div id="info-intro-space">
                <div id="name-explain-space">
                    <div id="name-wish-space">
                        <div>
                            <h2>영양제 이름</h2>
                        </div>
                        <Wish></Wish>
                    </div>
                    <hr></hr>
                    <div id="vita-explain">
                        <p>영양제에 대한 간단한 설명이 들어갑니다.영양제에 대한 간단한 설명이 들어갑니다.
                            영양제에 대한 간단한 설명이 들어갑니다.영양제에 대한 간단한 설명이 들어갑니다.</p>
                    </div>
                </div>
                <InfoButtons></InfoButtons>
            </div>
        </section>
    );
}

export default InfoIntroSection;