import axios from "axios";
import "./signUpPage.css";
import React, { useState, useEffect, useRef } from "react";
import CheckTextComponent from "./checkTextComponent";
import CheckTextShortComponent from "./checkTextShortComponent";

function NameComponent(props) {
  const [nameCheckText, setCheckText] = useState();
  const [nameVal, setNameVal] = useState();
  const [checkHidden, setCheckHidden] = useState(false);
  const [focusOut, setfocusOut] = useState(false);
  const nameReg = /^[A-Za-z0-9]{5,15}$/;
  const onTryCheckNickname = async (val) => {
    console.log(val);
    // 닉네임 중복 체크
    try {
      if (val.match(nameReg) === null) {
        props.setNameCheck(false);
        setCheckText("5자 이상, 15자 이하의 숫자와 영어이어야 합니다.");
        setCheckHidden(true);
      } else {
        const data = await axios.get("/auth/nameCheck/", {
          params: { name: val },
        });
        if (data.data && val.length > 4) {
          props.setNameCheck(true);
          setCheckText("사용 가능한 닉네임 입니다.");
          setCheckHidden(true);
          props.setValue((prevState) => ({
            ...prevState,
            name: val,
          }));
        } else {
          props.setNameCheck(false);
          setCheckText("이미 사용중인 닉네임 입니다.");
          setCheckHidden(true);
        }
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onChangeNickname = (val) => {
    setNameVal(val.target.value);
    setfocusOut(false);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
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
    if (focusOut === true) {
      onTryCheckNickname(nameVal);
    }
  }, [focusOut]);

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
        placeholder="닉네임:"
        onChange={onChangeNickname}
        ref={inputRef}
      ></input>
      <CheckTextComponent
        nameCheck={props.nameCheck}
        checkHidden={checkHidden}
        nameCheckText={nameCheckText}
      />
    </div>
  ) : (
    <div>
      <div className="signUpPageBox">
        <input
          className="signUpPageInput"
          placeholder="닉네임:"
          onChange={onChangeNickname}
          ref={inputRef}
        ></input>
      </div>
      <CheckTextShortComponent
        nameCheck={props.nameCheck}
        checkHidden={checkHidden}
        nameCheckText={nameCheckText}
      />
    </div>
  );
}
export default NameComponent;
