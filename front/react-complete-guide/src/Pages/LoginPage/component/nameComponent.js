import axios from "axios";
import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";

function NameComponent(props) {
  const [nameCheckText, setCheckText] = useState();
  const [nameVal, setNameVal] = useState();
  const [checkHidden, setCheckHidden] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const onTryCheckNickname = async (val) => {
    console.log(val);
    // 닉네임 중복 체크
    try {
      if (val.length < 5) {
        props.setNameCheck(false);
        setCheckText("5글자 이상이어야 합니다.");
      } else {
        const data = await axios.get("/auth/nameCheck/", {
          params: { name: val },
        });
        if (data.data && val.length > 4) {
          props.setNameCheck(true);
          setCheckText("사용 가능한 닉네임 입니다.");
          props.setValue((prevState) => ({
            ...prevState,
            name: val,
          }));
        } else {
          props.setNameCheck(false);
          setCheckText("이미 사용중인 닉네임 입니다.");
        }
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onChangeNickname = (val) => {
    setNameVal(val.target.value);
  };
  const onClickNickname = () => {
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
    onTryCheckNickname(nameVal);
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    if (focusOut === true) onTryCheckNickname(nameVal);
  }, [focusOut]);

  return (
    <div className="signUpPageBox">
      <input
        className="signUpPageInput"
        placeholder="닉네임:"
        onChange={onChangeNickname}
        onClick={onClickNickname}
        ref={inputRef}
      ></input>
      <div
        className={
          props.nameCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
        }
      >
        <div className={checkHidden ? "testUnHidden" : "testHidden"}>
          {nameCheckText}
        </div>
      </div>
    </div>
  );
}
export default NameComponent;
