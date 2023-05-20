import axios from "axios"
import React, { useState, useEffect } from 'react';
import './CompareHowtoeatStyle.css';

function CompareHowtoeat(props) {
    const [vitaHowtoeat, setHowtoeat] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/howtoeat/${props.vitaNumber}`);
            console.log(result.data);
            setHowtoeat(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaHowtoeat) {
        return <div>Loading...</div>;
    }

    return (
        <div className="compare-howtoeat-description">
            {vitaHowtoeat.content}
        </div>
    );
}

export default CompareHowtoeat;