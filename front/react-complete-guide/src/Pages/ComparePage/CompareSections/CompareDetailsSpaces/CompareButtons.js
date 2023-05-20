import './CompareButtonsStyle.css';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CompareButtons(props) {
    const [vitaData, setVitaData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/vita/${props.vitaNumber}`);
            console.log(result.data); // 로그 추가
            setVitaData(result.data);
        }
        fetchData();
    }, []);


    if (!vitaData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="compare-buttons">
            <Link to={`/InfoPage/${props.vitaNumber}`}>
                <button className="compare-button">살펴보기 버튼</button>
            </Link>
            <Link to={vitaData.link}>
                <button className="compare-button">구매하기 버튼</button>
            </Link>
        </div>
    );
}

export default CompareButtons;