import { createContext } from "react";
const SurveyPurposeApi = createContext({
  surveyInfo: {
    funno: "0",
    sc: false,
    act: false,
    eye: false,
    joint: false,
    oxy: false,
    sight: false,
    skin: false,
    imn: false,
    jang: false,
    gan: false,
    prs: false,
    bone: false,
    col: false,
    vmid: false,
  },
  cnt: 0,
  setCnt: () => {},
  setContextApi: () => {},
});
export default SurveyPurposeApi;
