import './CompareFunctionalityStyle.css';

function CompareFunctionality(props) {
    const iconList = [
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.233e75b8.svg&w=64&q=75", "활력 증진"],
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75", "향산화"],
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75", "뼈 건강"],
        ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75", "면역력 증진"],
    ];

    const iconSource = iconList.map((iconSrc) => (
        <li class="compare-functionality-li">
            <img
                src={iconSrc[0]}
                alt="icon" width="55" height="55" />
            <span class="list-text">{iconSrc[1]}</span>
        </li>
    ))

    if (props.select === true) {
        return (
            <ul class="compare-functionality-ul">
                {iconSource}
            </ul>
        );
    }
    else {
        return (
            <ul class="compare-functionality-ul">
                <li class="compare-functionality-li">
                </li>
            </ul>
        );
    }
}

export default CompareFunctionality;