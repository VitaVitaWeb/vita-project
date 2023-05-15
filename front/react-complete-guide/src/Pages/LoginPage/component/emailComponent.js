import "./signUpPage.css";
import Select from "react-select";
import { useMemo, useState, useEffect, useRef } from "react";
import axios from "axios";
import CheckTextComponent from "./checkTextComponent";
import CheckTextShortComponent from "./checkTextShortComponent";

function EmailComponent(props) {
  const [checkText, setCheckText] = useState();
  const [isComEnabled, setIsComEnabled] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const [checkHidden, setCheckHidden] = useState(false);
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
        setCheckHidden(true);
      } else {
        props.setEmailCheck(false);
        setCheckText("사용 불가능한 이메일 입니다.");
        setCheckHidden(true);
      }
    } catch {
      console.log("error in checkId123");
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setfocusOut(true);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    console.log(focusOut + " " + isComEnabled);
    if (focusOut && isComEnabled) {
      onTryCheckEmail();
    }
  }, [focusOut]);

  const onChangeEmail = (val) => {
    props.email.email = val.target.value;
    setfocusOut(false);
  };
  const onChangeEmailCom = (val) => {
    props.email.emailCom = val.label;
    setIsComEnabled(true);
    if (props.email.email !== null) onTryCheckEmail();
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return innerWidth > 1300 ? (
    <div className="signUpPageBox" ref={inputRef}>
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
      <CheckTextComponent
        nameCheck={props.emailCheck}
        checkHidden={checkHidden}
        nameCheckText={checkText}
      />
    </div>
  ) : (
    <div>
      <div className="signUpPageBox" ref={inputRef}>
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
      </div>
      <CheckTextShortComponent
        nameCheck={props.emailCheck}
        checkHidden={checkHidden}
        nameCheckText={checkText}
      />
    </div>
  );
}
export default EmailComponent;
