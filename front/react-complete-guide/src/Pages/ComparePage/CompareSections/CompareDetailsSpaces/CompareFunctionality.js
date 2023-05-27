import "./CompareFunctionalityStyle.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function CompareFunctionality(props) {
  const [vitaFunction, setVitaFunction] = useState(null);
  const BatteryChargingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-battery-charging"
      viewBox="0 0 16 16"
    >
      <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z" />
      <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z" />
      <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
    </svg>
  );

  const EyeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-eye"
      viewBox="0 0 16 16"
    >
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
  );

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/vita/function/${props.vitaNumber}`);
      console.log(result.data);
      setVitaFunction(result.data);
    }
    fetchData();
  }, [props.vitaNumber]);

  if (!vitaFunction) {
    return <div>Loading...</div>;
  }

  const englishToKorean = {
    act: { component: <BatteryChargingIcon />, text: "활력 증진" },
    bone: {
      text: "뼈 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75",
    },
    col: {
      text: "콜레스트롤 수치 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_16.3281ebc7.svg&w=64&q=75",
    },
    eye: {
      text: "눈 건조감 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_6.bef94ca5.svg&w=64&q=75",
    },
    gan: {
      text: "간 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_11.ef431279.svg&w=64&q=75",
    },
    imn: {
      text: "면역력 증진",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75",
    },
    jang: {
      text: "장 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_10.7917a550.svg&w=64&q=75",
    },
    joint: {
      text: "관절 및 연골건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_4.4796f5ce.svg&w=64&q=75",
    },
    oxy: {
      text: "향산화",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75",
    },
    prs: {
      text: "혈행 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_13.a739c68d.svg&w=64&q=75",
    },
    sc: {
      text: "스트레스 케어",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_2.925b4f8e.svg&w=64&q=75",
    },
    sight: {
      text: "시력 및 눈 피로감 케어",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_14.04556532.svg&w=64&q=75",
    },
    skin: {
      text: "피부 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_7.6eed8833.svg&w=64&q=75",
    },
    vmid: {
      text: "혈중 중성지질 수치 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_17.89018212.svg&w=64&q=75",
    },
  };

  const trueValues = Object.entries(vitaFunction).filter(
    ([key, value]) => value === true
  );

  const functionalityIconSource = trueValues.map(([key, value]) => (
    <li className="compare-functionality-li">
      <img
        src={englishToKorean[key].component}
        alt="icon"
        width="55"
        height="55"
      />
      <span className="list-text">{englishToKorean[key].text}</span>
    </li>
  ));

  return (
    <ul className="compare-functionality-ul">{functionalityIconSource}</ul>
  );
}

export default CompareFunctionality;
