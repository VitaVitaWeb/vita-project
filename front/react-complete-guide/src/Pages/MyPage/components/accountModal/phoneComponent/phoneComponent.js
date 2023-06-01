import axios from "axios";
import "./accountPhoneModal";
import React, { useState, useEffect, useRef } from "react";
import CheckTextComponent from "../checkTextComponent";
import "./accountPhone.css";

function PhoneComponent(props) {
  const [phoneCheckText, setCheckText] = useState();
  const [checkHidden, setCheckHidden] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const onTryCheckPhone = async (val) => {
    // 폰번호 중복 체크
    console.log(val.length);
    try {
      if (val.length != 11) {
        console.log("asdf");
        props.setPhoneCheck(false);
        setCheckText("올바르지 않은 전화번호 입니다.");
        setCheckHidden(true);
      } else {
        const data = await axios.get("/auth/phoneNoCheck/", {
          params: { phoneNo: val },
        });
        console.log(data);
        if (data.data) {
          props.setPhoneCheck(true);
          setCheckText("사용 가능한 전화번호 입니다.");
          setCheckHidden(true);
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
    if (focusOut === true && props.phoneVal.length != 0) {
      onTryCheckPhone(props.phoneVal);
    }
  }, [focusOut]);

  const onChangePhone = (val) => {
    //폰번호 입력시 갱신
    props.setPhoneVal(val.target.value);
    setfocusOut(false);
  };

  return (
    <div>
      <div className="modalPhoneBox">
        <input
          className="modalPhoneInput"
          placeholder="전화번호:"
          onChange={onChangePhone}
          ref={inputRef}
        ></input>
      </div>
      <CheckTextComponent
        nameCheck={props.phoneCheck}
        checkHidden={checkHidden}
        nameCheckText={phoneCheckText}
      />
    </div>
  );
}
export default PhoneComponent;
