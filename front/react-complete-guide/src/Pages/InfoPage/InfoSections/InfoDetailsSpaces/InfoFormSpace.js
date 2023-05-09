import './InfoFormSpaceStyle.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function InfoFormSpace(props) {
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
        'cap': '캡슐',
        'chew': '츄어블',
        'liq': '액상',
        'pill': '정',
        'pow': '가루',
    };
    

    const trueValues = Object.entries(vitaForm).filter(([key, value]) => value === true);

    const FormIconSource = trueValues.map(([key, value]) => (
        <li className="info-form-li">
            <img
                src="https://cdn-icons-png.flaticon.com/512/10008/10008824.png" // replace this with the correct icon URL
                alt="icon" width="55" height="55" />
            <span className="list-text">{englishToKorean[key]}</span>
        </li>
    ));

    return (
        <div id="info-form-space">
            <div id="info-form-text">
                <h4>제형</h4>
            </div>
            <ul id="info-form-ul">
                {FormIconSource}
            </ul>
        </div>
    );
}

export default InfoFormSpace;