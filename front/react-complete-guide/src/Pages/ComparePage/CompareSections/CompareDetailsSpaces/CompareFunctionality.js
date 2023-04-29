import './CompareFunctionalityStyle.css';

function CompareFunctionality(props) {
    const list = props.functionalityListIcon;

    return (
        <ul className="compare-functionality-ul">
            {list.map((iconSrc) => (
                <li className="compare-functionality-li">
                    {
                        iconSrc[0] != null ?
                            <img
                                src={iconSrc[0]}
                                alt="icon" width="55" height="55" />
                            :
                            <></>
                    }
                    <span className="list-text">{iconSrc[1]}</span>
                </li>
            ))}
        </ul>
    );
}

export default CompareFunctionality;