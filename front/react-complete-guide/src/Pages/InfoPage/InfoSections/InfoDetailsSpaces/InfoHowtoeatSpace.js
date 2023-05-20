import './InfoHowtoeatSpaceStyle.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function InfoHowtoeatSpace(props) {
    const [vitaHowtoeat, setVitaHowtoeat] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/howtoeat/${props.vitaNumber}`);
            console.log("How to eat: ", result.data);
            setVitaHowtoeat(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);


    if (!vitaHowtoeat) {
        return <div>Loading...</div>;
    }

    return (
        <div id="info-howtoeat-space">
            <div id="info-howtoeat-text">
                <h4>섭취 방법</h4>
            </div>
            <div id="info-howtoeat">
                {vitaHowtoeat.content}
            </div>
        </div>
    );
}

export default InfoHowtoeatSpace;