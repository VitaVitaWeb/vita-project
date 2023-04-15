import './VitaInfoPageStyle.css';
import InfoBeforeSection from './InfoSections/InfoBeforeSection';
import InfoIntroSection from './InfoSections/InfoIntroSection';
import InfoDetailsSection from './InfoSections/InfoDetailsSection';
import InfoRecommendAnotherSection from './InfoSections/InfoRecommendAnotherSection';
import InfoRecommendNeedSection from './InfoSections/InfoRecommendNeedSection';

function VitaInfoPage() {
    return (
        <div>
            <InfoBeforeSection />
            <InfoIntroSection
                src={"https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210425133213465_600.jpg&w=256&q=75"} />
            <InfoDetailsSection />
            <InfoRecommendAnotherSection />
            <InfoRecommendNeedSection />
        </div>
    );
}

export default VitaInfoPage;