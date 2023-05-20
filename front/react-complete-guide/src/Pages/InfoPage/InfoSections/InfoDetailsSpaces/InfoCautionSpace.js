import './InfoCautionSpaceStyle.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function InfoCautionSpace(props) {
    const [vitaCaution, setVitaCaution] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/becareful/${props.vitaNumber}`);
            console.log("How to eat: ", result.data);
            setVitaCaution(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);


    if (!vitaCaution) {
        return <div>Loading...</div>;
    }
    return (
        <div id="info-caution-space">
            <div id="info-caution-text">
                <h4>섭취 시 유의사항</h4>
            </div>
            <div id="info-caution">
                {vitaCaution.content}
            </div>
        </div>
    );
}

export default InfoCautionSpace;