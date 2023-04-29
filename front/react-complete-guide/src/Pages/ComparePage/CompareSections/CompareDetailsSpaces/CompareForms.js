import './CompareFormsStyle.css';

function CompareForms(props) {
    if (props.formIconSrc != null) {
        return (
            <ul id="compare-form-ul">
                <li className="compare-form-li">
                    <img
                        src={props.formIconSrc}
                        alt="icon" width="55" height="55" />
                    <span className="list-text">{props.formIconName}</span>
                </li>
            </ul>
        );
    }
    else {
        return (<ul id="compare-form-ul"></ul>);
    }
}

export default CompareForms;