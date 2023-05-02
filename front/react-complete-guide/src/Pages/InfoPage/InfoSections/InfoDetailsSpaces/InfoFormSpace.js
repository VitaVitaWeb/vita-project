import './InfoFormSpaceStyle.css';

function InfoFormSpace(props) {
    const [vitaForm, setvitaForm] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/vita/formulation/${props.vitaNumber}`);
            console.log(result.data);
            setvitaForm(result.data);
        }
        fetchData();
    }, [props.vitaNumber]);

    if (!vitaForm) {
        return <div>Loading...</div>;
    }

    const englishToKorean = {
        'act': '활력 증진',
        'bone': '뼈 건강',
        'col': '콜레스트롤',
        'eye': '눈 건강',
        'gan': '간 건강',
        'imn': '면역 증진',
        'jang': '장 건강',
        'joint': '관절',
        'oxy': '향산화',
        'prs': '혈행 개선',
        'sc': '스트레스 케어',
        'sight': '시력 및 눈 피로 개선',
        'skin': '피부',
        'vmid': '혈중 중성 지질',
    };

    const trueValues = Object.entries(vitaForm).filter(([key, value]) => value === true);

    const FormIconSource = trueValues.map(([key, value]) => (
        <li className="info-form-li">
            <img
                src="https://cdn-icons-png.flaticon.com/512/3352/3352631.png" // replace this with the correct icon URL
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