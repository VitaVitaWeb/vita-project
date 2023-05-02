import './CompareNutrientSpaceStyle.css';
import CompareNutrientGraph from './CompareNutrientGraph';
import { useState } from 'react';

function CompareNutrientSpace(props) {
    const sameNutrientList1 = [[true, 50, 30, 60], [true, 70, 30, 60], [false, null, 30, 60]];
    const sameNutrientList2 = [[true, 60, 50, 70], [true, 20, 50, 70], [false, null, 50, 70]];
    const uniqeNutrientList1 = [[true, 50, 40, 70], [true, null, 40, 70], [false, null, 40, 70]];
    const uniqeNutrientList2 = [[true, null, 40, 60], [true, 70, 40, 60], [false, null, 40, 60]];

    const sameNutrientSource1 = sameNutrientList1.map((sameNutrientSrc) => (
        <CompareNutrientGraph isSelected={sameNutrientSrc[0]} content={sameNutrientSrc[1]} today1={sameNutrientSrc[2]} today2={sameNutrientSrc[3]}></CompareNutrientGraph>
    ))

    const sameNutrientSource2 = sameNutrientList2.map((sameNutrientSrc) => (
        <CompareNutrientGraph isSelected={sameNutrientSrc[0]} content={sameNutrientSrc[1]} today1={sameNutrientSrc[2]} today2={sameNutrientSrc[3]}></CompareNutrientGraph>
    ))

    const uniqeNutrientSource1 = uniqeNutrientList1.map((uniqeNutrientSrc) => (
        <CompareNutrientGraph isSelected={uniqeNutrientSrc[0]} content={uniqeNutrientSrc[1]} today1={uniqeNutrientSrc[2]} today2={uniqeNutrientSrc[3]}></CompareNutrientGraph>
    ))

    const uniqeNutrientSource2 = uniqeNutrientList2.map((uniqeNutrientSrc) => (
        <CompareNutrientGraph isSelected={uniqeNutrientSrc[0]} content={uniqeNutrientSrc[1]} today1={uniqeNutrientSrc[2]} today2={uniqeNutrientSrc[3]}></CompareNutrientGraph>
    ))

    const [isExpanded, setIsExpanded] = useState(false); // 확장 여부

    const handleExpandButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    // 예시 데이터
    const vitaminInfo1 = {
        e: 10,
        d: 20,
        a: 30,
        b1: 0,
        b2: 50,
        b3: 60,
        b5: 70,
        b7: 80,
        b9: 0,
        b12: 100,
        c: 110,
        cr: 120,
        mo: 130,
        i: 0,
        mn: 150,
        se: 160,
        cu: 0,
        zn: 0,
        fe: 190,
        mg: 200,
        ca: 210,
        lacto: 0,
        lutein: 0,
        milk_thistle: 240,
        omega3: 250,
        msm: 260,
        propolis: 0,
        collagen: 280,
        theanine: 290,
    };

    const vitaminInfo2 = {
        e: 0,
        d: 0,
        a: 30,
        b1: 40,
        b2: 0,
        b3: 60,
        b5: 70,
        b7: 0,
        b9: 90,
        b12: 100,
        c: 110,
        cr: 120,
        mo: 130,
        i: 0,
        mn: 150,
        se: 160,
        cu: 170,
        zn: 0,
        fe: 0,
        mg: 200,
        ca: 210,
        lacto: 220,
        lutein: 230,
        milk_thistle: 0,
        omega3: 250,
        msm: 260,
        propolis: 0,
        collagen: 280,
        theanine: 290,
    };

    // 두 영양제 객체(vitaminInfo1 및 vitaminInfo2)의 각 키와 값을 순회하고, 한 영양제라도 해당 영양소의 함량이 0이 아닌 경우에만 nonZeroVitamins 객체에 저장
    function compareVitamins(vitaminInfo1, vitaminInfo2) {
        const nonZeroVitamins = {};

        for (const [key, value] of Object.entries(vitaminInfo1)) {
            if (value !== 0 || (vitaminInfo2.hasOwnProperty(key) && vitaminInfo2[key] !== 0)) {
                nonZeroVitamins[key] = {
                    vitaminInfo1: value,
                    vitaminInfo2: vitaminInfo2.hasOwnProperty(key) ? vitaminInfo2[key] : 0,
                };
            }
        }

        for (const [key, value] of Object.entries(vitaminInfo2)) {
            if (value !== 0 && !vitaminInfo1.hasOwnProperty(key)) {
                nonZeroVitamins[key] = {
                    vitaminInfo1: 0,
                    vitaminInfo2: value,
                };
            }
        }

        return nonZeroVitamins;
    }

    const nonZeroVitamins = compareVitamins(vitaminInfo1, vitaminInfo2);

    return (
        <div id="compare-nutrient-space">
            <div id="compare-nutrient-text">
                <h4>영양소</h4>
            </div>
            <div className="compare-same-nutrient-name">공통 영양소</div>
            <div className="compare-each-nutrient-graph-space">
                {sameNutrientSource1}
            </div>
            <div className="compare-same-nutrient-name">공통 영양소2</div>
            <div className="compare-each-nutrient-graph-space">
                {sameNutrientSource2}
            </div>
            <div id="compare-expand-space">
                <button type="button" onClick={handleExpandButtonClick} id="compare-expand-button">
                    {isExpanded ?
                        < img className="arrow-icon"
                            src="https://cdn-icons-png.flaticon.com/128/8066/8066269.png"
                            alt="icon-arrow"></img>
                        :
                        < img className="arrow-icon"
                            src="https://cdn-icons-png.flaticon.com/128/8066/8066251.png"
                            alt="icon-arrow"></img>}
                </button>
                {isExpanded &&
                    <div>
                        <div className="compare-unique-nutrient-name">고유 영양소</div>
                        <div className="compare-each-nutrient-graph-space">
                            {uniqeNutrientSource1}
                        </div>
                        <div className="compare-unique-nutrient-name">고유 영양소2</div>
                        <div className="compare-each-nutrient-graph-space">
                            {uniqeNutrientSource2}
                        </div>
                    </div>
                }
            </div>
            <div>
                <h2>영양소 비교 테스트</h2>
                <table>
                    <thead>
                        <tr>
                            <th>비타민 종류</th>
                            <th>더미1</th>
                            <th>더미2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(nonZeroVitamins).map(([key, value]) => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value.vitaminInfo1}</td>
                                <td>{value.vitaminInfo2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CompareNutrientSpace;