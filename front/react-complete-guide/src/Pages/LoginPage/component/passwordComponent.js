import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";
import CheckTextComponent from "./checkTextComponent";
import CheckTextShortComponent from "./checkTextShortComponent";

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
    setfocusOut(false);
  };

  const onChangePasswordCheck = (val) => {
    props.setCheckPassword(val.target.value);
    setPassCheckVal(val.target.value);
    setfocusOut(false);
  };

  const onTryCheckPassword = (val) => {
    if (val.match(passwordRegEx) === null && val.length > 0) {
      setCheckText("비밀번호는 6자 이상의 영어와 숫자이어야 합니다.");
      setCheckHidden(true);
      setCheck(false);
      props.setPassCheck(false);
    } else {
      props.setValue((prevState) => ({
        ...prevState,
        password: val,
      }));
      setCheckText("");
      setCheckHidden(false);
      setCheck(true);
      if (checkTwo) props.setPassCheck(true);
    }
  };

  const onTryCheckPasswordCheck = (val) => {
    if (passVal !== val && val.length > 0) {
      setCheckTextTwo("비밀번호가 일치하지 않습니다.");
      setCheckHiddenTwo(true);
      setCheckTwo(true);
      props.setPassCheck(true);
    } else {
      setCheckTextTwo("");
      setCheckHiddenTwo(false);
      setCheckTwo(true);
      if (check) props.setPassCheck(true);
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
    if (focusOut === true) {
      onTryCheckPassword(passVal);
      if (check) onTryCheckPasswordCheck(passCheckVal);
    }
  }, [focusOut]);

  const onClickPass = () => {
    onTryCheckPasswordCheck(passCheckVal);
  };
  const onClickPassCheck = () => {
    onTryCheckPassword(passVal);
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return innerWidth > 1300 ? (
    <div ref={inputRef}>
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호:"
          onChange={onChangePassword}
          onClick={onClickPass}
        ></input>
        <CheckTextComponent
          nameCheck={false}
          checkHidden={checkHidden}
          nameCheckText={passCheckText}
        />
      </div>
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호 확인:"
          onChange={onChangePasswordCheck}
          onClick={onClickPassCheck}
        ></input>
        <CheckTextComponent
          nameCheck={false}
          checkHidden={checkHiddenTwo}
          nameCheckText={passCheckTextTwo}
        />
      </div>
    </div>
  ) : (
    <div ref={inputRef}>
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호:"
          onChange={onChangePassword}
          onClick={onClickPass}
        ></input>
      </div>
      <CheckTextShortComponent
        nameCheck={false}
        checkHidden={checkHidden}
        nameCheckText={passCheckText}
      />
      <div className="signUpPagePassBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호 확인:"
          onChange={onChangePasswordCheck}
          onClick={onClickPassCheck}
        ></input>
      </div>
      <CheckTextShortComponent
        nameCheck={false}
        checkHidden={checkHiddenTwo}
        nameCheckText={passCheckTextTwo}
      />
    </div>
  );
}
export default PasswordComponent;
