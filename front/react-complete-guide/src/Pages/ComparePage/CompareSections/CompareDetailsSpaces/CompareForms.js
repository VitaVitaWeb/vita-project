import './CompareFormsStyle.css';

function CompareForms(props) {
    if (props.select === true) {
        return (
            <ul id="compare-form-ul">
                <li class="compare-form-li">
                    <img
                        src={props.src}
                        alt="icon" width="55" height="55" />
                    <span class="list-text">정</span>
                </li>
            </ul>
        );
    }
    else {
        return (<ul id="compare-form-ul"></ul>);
    }
}

export default CompareForms;