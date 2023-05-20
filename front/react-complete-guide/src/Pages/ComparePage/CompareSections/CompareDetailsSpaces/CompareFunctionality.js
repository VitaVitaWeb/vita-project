import './CompareFunctionalityStyle.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function CompareFunctionality(props) {
    const [vitaFunction, setVitaFunction] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/vita/function/${props.vitaNumber}`);
            console.log(result.data);
            setVitaFunction(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaFunction) {
        return <div>Loading...</div>;
    }

    const englishToKorean = {
        'act': '활력 증진',
        'bone': '뼈 건강',
        'col': '콜레스트롤',
        'eye': '눈 건강',
        'gan': '간 건강',
        'imn': '면역 증진',
        'jang': '장 건강',
        'joint': '관절',
        'oxy': '향산화',
        'prs': '혈행 개선',
        'sc': '스트레스 케어',
        'sight': '시력 및 눈 피로 개선',
        'skin': '피부',
        'vmid': '혈중 중성 지질',
    };

    const trueValues = Object.entries(vitaFunction).filter(([key, value]) => value === true);

    const functionalityIconSource = trueValues.map(([key, value]) => (
        <li className="compare-functionality-li">
            <img
                src="https://cdn-icons-png.flaticon.com/512/10008/10008824.png" // replace this with the correct icon URL
                alt="icon" width="55" height="55" />
            <span className="list-text">{englishToKorean[key]}</span>
        </li>
    ));

    return (
        <ul className="compare-functionality-ul">
            {functionalityIconSource}
        </ul>
    );
}

export default CompareFunctionality;