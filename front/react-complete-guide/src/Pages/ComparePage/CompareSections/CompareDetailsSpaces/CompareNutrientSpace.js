import './CompareNutrientSpaceStyle.css';
import CompareNutrientGraph from './CompareNutrientGraph';
import { useState } from 'react';

function CompareNutrientSpace() {
    const sameNutrientList1 = [[true, 50], [true, 60], [false, ""]];
    const sameNutrientList2 = [[true, 30], [true, 20], [false, ""]];
    const uniqeNutrientList1 = [[true, 50], [false, ""], [false, ""]];
    const uniqeNutrientList2 = [[false, ""], [true, 70], [false, ""]];

    const sameNutrientSource1 = sameNutrientList1.map((sameNutrientSrc) => (
        <CompareNutrientGraph select={sameNutrientSrc[0]} content={sameNutrientSrc[1]}></CompareNutrientGraph>
    ))

    const sameNutrientSource2 = sameNutrientList2.map((sameNutrientSrc) => (
        <CompareNutrientGraph select={sameNutrientSrc[0]} content={sameNutrientSrc[1]}></CompareNutrientGraph>
    ))

    const uniqeNutrientSource1 = uniqeNutrientList1.map((uniqeNutrientSrc) => (
        <CompareNutrientGraph select={uniqeNutrientSrc[0]} content={uniqeNutrientSrc[1]}></CompareNutrientGraph>
    ))

    const uniqeNutrientSource2 = uniqeNutrientList2.map((uniqeNutrientSrc) => (
        <CompareNutrientGraph select={uniqeNutrientSrc[0]} content={uniqeNutrientSrc[1]}></CompareNutrientGraph>
    ))

    const [display, setDisplay] = useState(false);
    function changeArrow() {
        setDisplay(previousArrow => !previousArrow)
    }

    return (
        <div id="compare-nutrient-space">
            <div id="compare-nutrient-text">
                <h4>영양소</h4>
            </div>
            <div class="compare-same-nutrient-name">공통 영양소</div>
            <div class="compare-each-nutrient-graph-space">
                {sameNutrientSource1}
            </div>
            <div class="compare-same-nutrient-name">공통 영양소2</div>
            <div class="compare-each-nutrient-graph-space">
                {sameNutrientSource2}
            </div>
            <div class="compare-unique-nutrient-name">고유 영양소</div>
            <div class="compare-each-nutrient-graph-space">
                {uniqeNutrientSource1}
            </div>
            <div class="compare-unique-nutrient-name">고유 영양소2</div>
            <div class="compare-each-nutrient-graph-space">
                {uniqeNutrientSource2}
            </div>
            <div id="compare-add-button">
                <button type="button">
                    <div>
                        {display ?
                            < img
                                class="arrow-icon"
                                src="https://cdn-icons-png.flaticon.com/128/8066/8066251.png"
                                alt="icon-arrow" onClick={changeArrow}></img>
                            :
                            < img
                                class="arrow-icon"
                                src="https://cdn-icons-png.flaticon.com/128/8066/8066269.png"
                                alt="icon-arrow" onClick={changeArrow}></img>
                        }
                    </div>
                </button>
            </div>
        </div>
    );
}

export default CompareNutrientSpace;