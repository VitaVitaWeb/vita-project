import './InfoNutrientListSpaceStyle.css';
import VitaGraph from '../../../../CommonComponent/VitaGraph';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function InfoNutrientListSpace(props) {
    const [vitaNutrient, setVitaNutrient] = useState(null);
    const [vitaRecommend, setVitaRecommend] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // 영양제의 영양소 함유량
            const resultContent = await axios.get(`/vita/detail/${props.vitaNumber}`);
            console.log(resultContent.data);
            // vdno 와 vno 속성을 제거
            const { vdno, vno, ...filteredData } = resultContent.data;
            setVitaNutrient(filteredData);

            // 각 영양소의 일일 권장량
            const resultRecommend = await axios.get(`/recommend`);
            console.log(resultRecommend.data);
            setVitaRecommend(resultRecommend.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaNutrient || !vitaRecommend) {
        return <div>Loading...</div>;
    }

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

    const trueValues = Object.entries(vitaNutrient).filter(([key, value]) => value !== 0);

    const nutrientSource = trueValues.map(([key, value]) => {
        // 영양소의 일일 권장량을 찾아서 todayValue에 저장
        const todayValue = vitaRecommend ? vitaRecommend[key] : null;

        return (
            <div className="info-nutrient-name-graph">
                <div className="info-nutrient-name">{englishToKorean[key]}</div>
                <div className="info-nutrient-graph-space">
                    <VitaGraph
                        type={"info"}
                        nutrient={englishToKorean[key]}
                        content={value}
                        today={todayValue}>
                    </VitaGraph>
                </div>
            </div>
        );
    });

    return (
        <div id="info-nutrient-space">
            <div id="info-nutrient-text">
                <h4>영양소</h4>
            </div>
            <div id="info-nutrient-list-space">
                {nutrientSource}
            </div>
        </div>
    );
}

export default InfoNutrientListSpace;