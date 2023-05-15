import axios from "axios";
import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";
import CheckTextComponent from "./checkTextComponent";
import CheckTextShortComponent from "./checkTextShortComponent";

function PhoneComponent(props) {
  const [phoneCheckText, setCheckText] = useState();
  const [phoneVal, setPhoneVal] = useState();
  const [checkHidden, setCheckHidden] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const onTryCheckPhone = async (val) => {
    // 폰번호 중복 체크
    console.log(val);
    try {
      if (val.length != 11) {
        props.setPhoneCheck(false);
        setCheckText("올바르지 않은 전화번호 입니다.");
        setCheckHidden(true);
      } else {
        const data = await axios.get("/auth/phoneNoCheck/", {
          params: { phoneNo: val },
        });
        if (data.data) {
          props.setPhoneCheck(true);
          setCheckText("사용 가능한 전화번호 입니다.");
          setCheckHidden(true);
          props.setValue((prevState) => ({
            ...prevState,
            phoneNo: val,
          }));
        } else {
          props.setPhoneCheck(false);
          setCheckText("이미 사용중인 전화번호 입니다.");
          setCheckHidden(true);
        }
      }
    } catch {
      console.log("error in checkId");
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
      onTryCheckPhone(phoneVal);
    }
  }, [focusOut]);

  const onChangePhone = (val) => {
    //폰번호 입력시 갱신
    setPhoneVal(val.target.value);
    setfocusOut(false);
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return innerWidth > 1300 ? (
    <div className="signUpPageBox">
      <input
        className="signUpPageInput"
        placeholder="전화번호:"
        onChange={onChangePhone}
        ref={inputRef}
      ></input>
      <CheckTextComponent
        nameCheck={props.phoneCheck}
        checkHidden={checkHidden}
        nameCheckText={phoneCheckText}
      />
    </div>
  ) : (
    <div>
      <div className="signUpPageBox">
        <input
          className="signUpPageInput"
          placeholder="전화번호:"
          onChange={onChangePhone}
          ref={inputRef}
        ></input>
      </div>
      <CheckTextShortComponent
        nameCheck={props.phoneCheck}
        checkHidden={checkHidden}
        nameCheckText={phoneCheckText}
      />
    </div>
  );
}
export default PhoneComponent;
