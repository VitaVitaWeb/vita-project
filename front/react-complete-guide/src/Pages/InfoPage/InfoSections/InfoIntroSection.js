import './InfoIntroSectionStyle.css';
import InfoButtons from './InfoButtons';
import Wish from '../../../CommonComponent/Wish';

function InfoIntroSection(props) {
    const categoryClassMapping = {
        '식품': 'category-food',
        '건강식품': 'category-health-food',
        '영양제': 'category-nutrient',
        '기타건강보조식품': 'category-etc',
        'MSM': 'category-msm',
        '다이어트식품': 'category-diet',
        '콜라겐': 'category-collagen',
        '칼슘': 'category-calcium',
        '오메가3': 'category-omega3',
        '비타민제': 'category-vitamin',
        '멀티비타민': 'category-multi-vitamin',
        '프로바이오틱스': 'category-probiotics',
    };

    const getCategoryClass = (category) => categoryClassMapping[category] || '';

    return (
        <section id="info-intro-section">
            <div id="info-image-space">
                <img
                    id="info-image"
                    src={props.vitaImage}
                    alt="영양제 이미지" />
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
                    <div id="vita-category">
                        <div className={`category-block ${getCategoryClass(props.vitaCat1)}`}>
                            {props.vitaCat1}
                        </div>
                        <div className={`category-block ${getCategoryClass(props.vitaCat2)}`}>
                            {props.vitaCat2}
                        </div>
                        <div className={`category-block ${getCategoryClass(props.vitaCat3)}`}>
                            {props.vitaCat3}
                        </div>
                        {props.vitaCat4 && (
                            <div className={`category-block ${getCategoryClass(props.vitaCat4)}`}>
                                {props.vitaCat4}
                            </div>
                        )}
                    </div>
                </div>
                <InfoButtons buyLink={props.vitaLink}></InfoButtons>
            </div>
        </section>
    );
}

export default InfoIntroSection;