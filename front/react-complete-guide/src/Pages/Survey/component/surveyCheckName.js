function SurveyCheckName(obj) {
  switch (obj.name) {
    case "cap":
      console.log(obj.name);
      obj.surveyInfo.setContextApi((prevState) => ({
        ...prevState,
        cap: obj.check,
      }));
      break;
    case "pill":
      console.log(obj.name);
      obj.surveyInfo.setContextApi((prevState) => ({
        ...prevState,
        pill: obj.check,
      }));
      break;
    case "pow":
      console.log(obj.name);
      obj.surveyInfo.setContextApi((prevState) => ({
        ...prevState,
        pow: obj.check,
      }));
      break;
    case "liq":
      console.log(obj.name);
      obj.surveyInfo.setContextApi((prevState) => ({
        ...prevState,
        liq: obj.check,
      }));
      break;
    case "chew":
      console.log(obj.name);
      obj.surveyInfo.setContextApi((prevState) => ({
        ...prevState,
        chew: obj.check,
      }));
      break;
    case "sc":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        sc: obj.check,
      }));
      break;
    case "act":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        act: obj.check,
      }));
      break;
    case "eye":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        eye: obj.check,
      }));
      break;
    case "joint":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        joint: obj.check,
      }));
      break;
    case "oxy":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        oxy: obj.check,
      }));
      break;
    case "sight":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        sight: obj.check,
      }));
      break;
    case "skin":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        skin: obj.check,
      }));
      break;
    case "imn":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        imn: obj.check,
      }));
      break;
    case "jang":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        jang: obj.check,
      }));
      break;
    case "gan":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        gan: obj.check,
      }));
      break;
    case "prs":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        prs: obj.check,
      }));
      break;
    case "bone":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        bone: obj.check,
      }));
      break;
    case "col":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        col: obj.check,
      }));
      break;
    case "vmid":
      console.log(obj.name);
      obj.surveyInfoTwo.setContextApi((prevState) => ({
        ...prevState,
        vmid: obj.check,
      }));
      break;
  }
}
export default SurveyCheckName;
