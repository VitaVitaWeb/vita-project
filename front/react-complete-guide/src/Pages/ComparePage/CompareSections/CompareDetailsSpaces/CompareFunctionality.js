import "./CompareFunctionalityStyle.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function CompareFunctionality(props) {
  const [vitaFunction, setVitaFunction] = useState(null);

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
    act: {
      text: "활력 증진",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.725af60e.svg&w=64&q=75",
    },
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-eye-fill"
          viewBox="0 0 16 16"
        >
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      ),
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
        src={englishToKorean[key].iconUrl}
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
