import './InfoIntroSectionStyle.css';
import InfoButtons from './InfoButtons';
import Wish from '../../../CommonComponent/Wish';

function InfoIntroSection(props) {
    return (
        <section id="info-intro-section">
            <div id="info-image-space">
                <div id="info-image">
                    <img
                        src={props.vitaImage}
                        alt="영양제 이미지" />
                </div>
            </div>
            <div id="info-intro-space">
                <div id="name-description-space">
                    <div id="name-wish-space">
                        <div id="info-vita-name">
                            {props.vitaName}
                        </div>
                        <Wish vitaWish={props.vitaWish} vitaWishCount={props.vitaWishCount}></Wish>
                    </div>
                    <hr></hr>
                    <div id="vita-description">
                        {props.vitaDescription}
                    </div>
                </div>
                <InfoButtons></InfoButtons>
            </div>
        </section>
    );
}

export default InfoIntroSection;