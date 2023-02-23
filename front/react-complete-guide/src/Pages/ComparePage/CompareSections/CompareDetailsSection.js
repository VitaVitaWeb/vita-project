import './CompareDetailsSectionStyle.css';
import CompareVitaSpace from './CompareDetailsSpaces/CompareVitaSpace';
import CompareFunctionalitySpace from './CompareDetailsSpaces/CompareFunctionalitySpace';
import CompareFormSpace from './CompareDetailsSpaces/CompareFormSpace';
import CompareHowtoeatSpace from './CompareDetailsSpaces/CompareHowtoeatSpace';
import CompareNutrientSpace from './CompareDetailsSpaces/CompareNutrientSpace';
import CompareCautionSpace from './CompareDetailsSpaces/CompareCautionSpace';
import CompareButtonsSpace from './CompareDetailsSpaces/CompareButtonsSpace';

function CompareDetailsSection() {
    return (
        <section id="compare-details-section">
            <div id="compare-details-title">
                <h2>제품을 선택해 비교해보세요</h2>
            </div>
            <div>
                <CompareVitaSpace></CompareVitaSpace>
                <CompareFunctionalitySpace></CompareFunctionalitySpace>
                <hr width="1200px"></hr>
                <CompareFormSpace></CompareFormSpace>
                <hr width="1200px"></hr>
                <CompareHowtoeatSpace></CompareHowtoeatSpace>
                <hr width="1200px"></hr>
                <CompareNutrientSpace></CompareNutrientSpace>
                <hr width="1200px"></hr>
                <CompareCautionSpace></CompareCautionSpace>
                <hr width="1200px"></hr>
                <CompareButtonsSpace></CompareButtonsSpace>
            </div>
        </section>
    );
}

export default CompareDetailsSection;