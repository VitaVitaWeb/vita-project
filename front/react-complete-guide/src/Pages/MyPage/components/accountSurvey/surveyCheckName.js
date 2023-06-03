function SurveyCheckName(obj) {
  switch (obj) {
    case "cap":
      return "캡슐";
    case "pill":
      return "정";
    case "pow":
      return "분말";
    case "liq":
      return "액상";
    case "chew":
      return "츄어블";
    case "sc":
      return "스트레스";
    case "act":
      return "활력";
    case "eye":
      return "눈 건조감";
    case "joint":
      return "관절 및 연골";
    case "oxy":
      return "항산화";
    case "sight":
      return "시력";
    case "skin":
      return "피부건강";
    case "imn":
      return "면역력";
    case "jang":
      return "장";
    case "gan":
      return "간";
    case "prs":
      return "혈압";
    case "bone":
      return "뼈";
    case "col":
      return "콜레스테롤";
    case "vmid":
      return "혈중 중성지질";
  }
}
export default SurveyCheckName;
