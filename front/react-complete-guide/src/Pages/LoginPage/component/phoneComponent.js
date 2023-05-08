import axios from "axios";
import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";

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
      } else {
        const data = await axios.get("/auth/phoneNoCheck/", {
          params: { phoneNo: val },
        });
        if (data.data) {
          props.setPhoneCheck(true);
          setCheckText("사용 가능한 전화번호 입니다.");
          props.setValue((prevState) => ({
            ...prevState,
            phoneNo: val,
          }));
        } else {
          props.setPhoneCheck(false);
          setCheckText("이미 사용중인 전화번호 입니다.");
        }
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onClickPhone = () => {
    setfocusOut(false);
  };

  const inputRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setCheckHidden(true);
        setfocusOut(true);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    if (focusOut === true) onTryCheckPhone(phoneVal);
  }, [focusOut]);

  const onChangePhone = (val) => {
    //폰번호 입력시 갱신
    setPhoneVal(val.target.value);
  };

  return (
    <div className="signUpPageBox">
      <input
        className="signUpPageInput"
        placeholder="전화번호:"
        onChange={onChangePhone}
        onClick={onClickPhone}
        ref={inputRef}
      ></input>
      <div
        className={
          props.phoneCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
        }
      >
        <div className={checkHidden ? "testUnHidden" : "testHidden"}>
          {phoneCheckText}
        </div>
      </div>
    </div>
  );
}
export default PhoneComponent;
