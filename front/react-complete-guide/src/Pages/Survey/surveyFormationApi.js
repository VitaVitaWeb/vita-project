import { createContext } from "react";
const SurveyFormationApi = createContext({
  surveyInfo: {
    cap: false,
    pill: false,
    pow: false,
    liq: false,
    chew: false,
  },
  setContextApi: () => {},
});
export default SurveyFormationApi;
