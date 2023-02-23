import './InfoRecommendAnotherSectionStyle.css';
import SimpleSlider from './SimpleSlider';

function InfoRecommendAnotherSection() {
    return (
        <section id="info-recommend-another-section">
            <div>
                <div id="info-recommend-another-text">
                    <h2>이런 건 어떠세요?</h2>
                </div>
                <div>
                    <SimpleSlider></SimpleSlider>
                </div>
            </div>
        </section>
    );
}

export default InfoRecommendAnotherSection;