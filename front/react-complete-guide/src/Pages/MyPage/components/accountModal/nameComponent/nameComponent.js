import axios from "axios";
import "../checkText.css";
import "./accountNameModal.css";
import React, { useState, useEffect, useRef } from "react";
import CheckTextComponent from "../checkTextComponent";

function NameComponent(props) {
  const [nameCheckText, setCheckText] = useState();
  const [checkHidden, setCheckHidden] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const nameReg = /^[A-Za-z0-9]{5,15}$/;
  const onTryCheckNickname = async (val) => {
    console.log(val);
    // 닉네임 중복 체크
    try {
      if (val.match(nameReg) === null && val.length() > 0) {
        props.setNicknameCheck(false);
        setCheckText("5자 이상, 15자 이하의 숫자와 영어이어야 합니다.");
        setCheckHidden(true);
      } else {
        const data = await axios.get("/auth/nameCheck/", {
          params: { name: val },
        });
        console.log(data);
        if (data.data && val.length > 4) {
          props.setNicknameCheck(true);
          setCheckText("사용 가능한 닉네임 입니다.");
          setCheckHidden(true);
        } else {
          props.setNicknameCheck(false);
          setCheckText("이미 사용중인 닉네임 입니다.");
          setCheckHidden(true);
        }
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onChangeNickname = (val) => {
    props.setNameVal(val.target.value);
    setfocusOut(false);
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
      onTryCheckNickname(props.nameVal);
    }
  }, [focusOut]);

  return (
    <div>
      <div className="modalNameBox">
        <input
          className="modalNameInput"
          placeholder="닉네임:"
          onChange={onChangeNickname}
          ref={inputRef}
        ></input>
      </div>
      <CheckTextComponent
        nameCheck={props.nicknameCheck}
        checkHidden={checkHidden}
        nameCheckText={nameCheckText}
      />
    </div>
  );
}
export default NameComponent;
