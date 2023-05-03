import "./signUpPage.css";
import Select from "react-select";
import { useMemo, useState } from "react";
import axios from "axios";

function EmailComponent(props) {
  const [checkText, setCheckText] = useState();
  const [isComEnabled, setIsComEnabled] = useState(false);
  const emailOption = [
    { value: "1", label: "naver.com" },
    { value: "2", label: "gmail.com" },
    { value: "3", label: "daum.com" },
  ];
  const customStylesTwo = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        fontSize: "20px",
      }),
      control: (provided) => ({
        ...provided,
        borderColor: "grey",
        borderRadius: "2px",
        fontSize: "20px",
        width: 170,
        height: 40,
        boxShadow: "black",
        "&:hover": {
          border: "2px solid black",
        },
      }),
      singleValue: (provided, state) => ({
        ...provided,
        fontSize: "20px",
        marginTop: -5,
        color: state.data.color,
      }),
    }),
    []
  );
  const onTryCheckEmail = async () => {
    // 폰번호 중복 체크
    console.log(props.email.email + "@" + props.email.emailCom);
    try {
      const data = await axios.get("/auth/idCheck", {
        params: { id: props.email.email + "@" + props.email.emailCom },
      });
      console.log(data);
      if (data.data) {
        props.setEmailCheck(true);
        setCheckText("사용 가능한 이메일 입니다.");
      } else {
        props.setEmailCheck(false);
        setCheckText("사용 불가능한 이메일 입니다.");
      }
    } catch {
      console.log("error in checkId123");
    }
  };
  const onChangeEmail = (val) => {
    props.email.email = val.target.value;
    if (isComEnabled) onTryCheckEmail();
  };
  const onChangeEmailCom = (val) => {
    props.email.emailCom = val.label;
    setIsComEnabled(true);
    if (props.email.emailCom !== "null") onTryCheckEmail();
  };
  return (
    <div className="signUpPageBox">
      <input
        className="signUpPageInputEmailBox"
        placeholder="이메일:"
        onChange={onChangeEmail}
      ></input>
      <div className="signUpPageInputEmailFont">{" @"}</div>
      <Select
        options={emailOption}
        styles={customStylesTwo}
        placeholder="email.com"
        onChange={(e) => onChangeEmailCom(e)}
      />
      <div
        className={
          props.emailCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
        }
      >
        {checkText}
      </div>
    </div>
  );
}
export default EmailComponent;
