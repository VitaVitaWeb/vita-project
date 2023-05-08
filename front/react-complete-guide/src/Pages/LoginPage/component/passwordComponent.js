import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";

function PasswordComponent(props) {
  const [checkHidden, setCheckHidden] = useState(false);
  const [passCheckText, setCheckText] = useState();
  const [checkHiddenTwo, setCheckHiddenTwo] = useState(false);
  const [passCheckTextTwo, setCheckTextTwo] = useState();
  const [check, setCheck] = useState(false);

  const [focusOut, setfocusOut] = useState(false);
  const [passVal, setPassVal] = useState("");
  const [passCheckVal, setPassCheckVal] = useState("");
  const [checkTwo, setCheckTwo] = useState(false);
  const passwordRegEx = /^[A-Za-z0-9]{6,20}$/;

  const onChangePassword = (val) => {
    props.setPassword(val.target.value);
    setPassVal(val.target.value);
  };

  const onChangePasswordCheck = (val) => {
    props.setCheckPassword(val.target.value);
    setPassCheckVal(val.target.value);
  };

  const onTryCheckPassword = (val) => {
    if (val.match(passwordRegEx) === null && val.length > 0) {
      setCheckText("비밀번호는 6자 이상의 영어와 숫자이어야 합니다.");
      setCheck(false);
      props.setPassCheck(false);
    } else {
      props.setValue((prevState) => ({
        ...prevState,
        password: val,
      }));
      setCheckText("");
      setCheck(true);
      if (checkTwo) props.setPassCheck(true);
    }
  };

  const onTryCheckPasswordCheck = (val) => {
    if (passVal !== val) {
      setCheckTextTwo("비밀번호가 일치하지 않습니다.");
      setCheckTwo(true);
      props.setPassCheck(true);
    } else {
      setCheckTextTwo("");
      setCheckTwo(true);
      if (check) props.setPassCheck(true);
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setCheckHidden(true);
        setfocusOut(true);
        setCheckHiddenTwo(true);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    if (focusOut === true) {
      onTryCheckPassword(passVal);
      if (check) onTryCheckPasswordCheck(passCheckVal);
    }
  }, [focusOut]);

  const onClickPass = () => {
    setfocusOut(false);
  };
  const onClickPassCheck = () => {
    setfocusOut(false);
  };

  return (
    <div ref={inputRef}>
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호:"
          onChange={onChangePassword}
          onClick={onClickPass}
        ></input>
        <div
          className={
            props.passCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
          }
        >
          <div className={checkHidden ? "testUnHidden" : "testHidden"}>
            {passCheckText}
          </div>
        </div>
      </div>
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호 확인:"
          onChange={onChangePasswordCheck}
          onClick={onClickPassCheck}
        ></input>
        <div
          className={
            props.passCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
          }
        >
          <div className={checkHiddenTwo ? "testUnHidden" : "testHidden"}>
            {passCheckTextTwo}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PasswordComponent;
