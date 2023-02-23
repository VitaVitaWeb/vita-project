import './InfoRecommendNeedSectionStyle.css';
import SimpleSlider from './SimpleSlider';

function InfoRecommendNeedSection() {
    return (
        <section id="info-recommend-need-section">
            <div>
                <div id="info-recommend-need-text">
                    <h2>이런 영양소가 부족해요</h2>
                </div>
                <div>
                    <SimpleSlider></SimpleSlider>
                </div>
            </div>
        </section>
    );
}

export default InfoRecommendNeedSection;