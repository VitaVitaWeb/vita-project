import './CompareFormsStyle.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function CompareForms(props) {
    const [vitaForm, setVitaForm] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/vita/formulation/${props.vitaNumber}`);
            console.log(result.data);
            setVitaForm(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaForm) {
        return <div>Loading...</div>;
    }

    const englishToKorean = {
        'cap': { text: '캡슐', iconUrl: 'https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_3.7d3cda98.svg&w=64&q=75' },
        'chew': { text: '츄어블', iconUrl: 'https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_6.daf8a0bd.svg&w=64&q=75' },
        'liq': { text: '액상', iconUrl: 'https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_7.03773d70.svg&w=64&q=75' },
        'pill': { text: '정', iconUrl: 'https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75' },
        'pow': { text: '분말', iconUrl: 'https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_8.92adae6b.svg&w=64&q=75' },
    };

    const trueValues = Object.entries(vitaForm).filter(([key, value]) => value === true);

    const FormIconSource = trueValues.map(([key, value]) => (
        <li className="compare-form-li">
            <img
                src={englishToKorean[key].iconUrl}
                alt="icon" width="55" height="55" />
            <span className="list-text">{englishToKorean[key].text}</span>
        </li>
    ));

    return (
        <ul className="compare-form-ul">
            {FormIconSource}
        </ul>
    );
}

export default CompareForms;