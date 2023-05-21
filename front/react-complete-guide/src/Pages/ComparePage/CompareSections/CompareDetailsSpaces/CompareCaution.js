import axios from "axios"
import React, { useState, useEffect } from 'react';
import './CompareCautionStyle.css';

function CompareCaution(props) {
    const [vitaCaution, setCaution] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/becareful/${props.vitaNumber}`);
            console.log(result.data);
            setCaution(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaCaution) {
        return <div>Loading...</div>;
    }

    return (
        <div className="compare-caution-precautions">
            {vitaCaution.content}
        </div>
    );
}

export default CompareCaution;