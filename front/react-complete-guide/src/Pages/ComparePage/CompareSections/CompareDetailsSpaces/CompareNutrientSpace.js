import './CompareNutrientSpaceStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function CompareNutrientSpace(props) {
    const { vitaNumbers } = props;
    const [vitaNutrient, setVitaNutrient] = useState([]);
    const [vitaRecommend, setVitaRecommend] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // 영양제의 영양소 함유량
            const nutrientPromises = vitaNumbers.map(vitaNumber =>
                axios.get(`/vita/detail/${vitaNumber}`)
            );
            const nutrientResponses = await Promise.all(nutrientPromises);
            // vdno 와 vno 속성을 제거
            setVitaNutrient(
                nutrientResponses.map(response => {
                    const { vdno, vno, ...filteredData } = response.data;
                    return filteredData;
                })
            );
            // 각 영양소의 일일 권장량
            const resultRecommend = await axios.get(`/recommend`);
            setVitaRecommend(resultRecommend.data);
        }

        fetchData();
    }, [vitaNumbers]);

    if (!vitaNutrient.length || !vitaRecommend) {
        return <div>Loading...</div>;
    }

    // 영양제 객체의 각 키와 값을 순회하고, 한 영양제라도 해당 영양소의 함량이 0이 아닌 경우에만 nonZeroVitamins 객체에 저장
    function compareVitamins(vitaminInfos) {
        const nonZeroVitamins = {};

        vitaminInfos.forEach((vitaminInfo, index) => {
            for (const [key, value] of Object.entries(vitaminInfo)) {
                if (!nonZeroVitamins.hasOwnProperty(key) && value !== 0) {
                    nonZeroVitamins[key] = Array(vitaminInfos.length).fill(0);
                    nonZeroVitamins[key][index] = value;
                } else if (nonZeroVitamins.hasOwnProperty(key)) {
                    nonZeroVitamins[key][index] = value;
                }
            }
        });
        return nonZeroVitamins;
    }

    const nonZeroVitamins = compareVitamins(vitaNutrient);

    const englishToKorean = {
        'e': '비타민 E',
        'd': '비타민 D',
        'a': '비타민 A',
        'b1': '비타민 B1',
        'b2': '비타민 B2',
        'b3': '비타민 B3',
        'b5': '비타민 B5',
        'b7': '비타민 B7',
        'b9': '비타민 B9',
        'b12': '비타민 B12',
        'c': '비타민 C',
        'cr': '크롬',
        'mo': '몰리브덴',
        'i': '아이오딘',
        'mn': '망간',
        'se': '셀레늄',
        'cu': '구리',
        'zn': '아연',
        'fe': '철',
        'mg': '망간',
        'ca': '칼슘',
        'lacto': '유산균',
        'lutein': '루테인',
        'milk_thistle': '밀크 씨슬',
        'omega3': '오메가 3',
        'msm': 'MSM',
        'propolis': '프로폴리스',
        'collagen': '콜라겐',
        'theanine': '테아닌'
    };

    const nutrientComponents = Object.entries(nonZeroVitamins).map(([key, values]) => {
        const todayValue = vitaRecommend ? vitaRecommend[key] : null;

        return (
            <div>
                <div className="compare-nutrient-graph">{englishToKorean[key]}</div>
                <div className="compare-nutrient-graph-wrapper">
                    {values.map((value, index) => (
                        <div className="compare-nutrient-graph-space" key={index}>
                            <VitaGraph
                                type="compare"
                                nutrient={englishToKorean[key]}
                                content={value}
                                today={todayValue}
                            />
                        </div>
                    ))}
                    {props.productCnt === 2 && <ul className="compare-nutrient-graph-space"></ul>}
                </div>
            </div>
        );
    });

    return (
        <div id="compare-nutrient-space">
            <div id="compare-nutrient-text">
                <h4>영양소</h4>
            </div>
            {nutrientComponents}
        </div>
    );
}

export default CompareNutrientSpace;