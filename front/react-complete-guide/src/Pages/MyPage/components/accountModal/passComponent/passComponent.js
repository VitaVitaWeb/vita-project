import "./accountPassModal.css";
import React, { useState, useContext } from "react";
import CheckTextComponent from "../checkTextComponent";
import CustomerInfo from "../../../../../customerInfo";

function PassComponent(props) {
  const [checkHidden, setCheckHidden] = useState(false);
  const [passCheckText, setCheckText] = useState();

  const [curPassVal, setCurPassVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [passCheckVal, setPassCheckVal] = useState("");
  const passwordRegEx = /^[A-Za-z0-9]{6,20}$/;
  const userInfo = useContext(CustomerInfo);

  const onChangeCurPassword = (val) => {
    setCurPassVal(val.target.value);
  };

  const onChangePassword = (val) => {
    setPassVal(val.target.value);
  };

  const onChangePasswordCheck = (val) => {
    setPassCheckVal(val.target.value);
  };

  const onTryCheckCurPassword = () => {
    if (userInfo.user.password == curPassVal) {
      setCheckText("");
      setCheckHidden(false);
      return true;
    } else {
      setCheckText("비밀번호가 틀립니다.");
      setCheckHidden(true);
    }
    return false;
  };
  const onTryCheckPassword = () => {
    if (passVal.match(passwordRegEx) === null) {
      setCheckText("비밀번호는 6자 이상의 영어와 숫자이어야 합니다.");
      setCheckHidden(true);
      return false;
    } else {
      setCheckText("");
      setCheckHidden(false);
    }
    return true;
  };

  const onTryCheckPasswordCheck = () => {
    if (passVal !== passCheckVal) {
      setCheckText("비밀번호가 일치하지 않습니다.");
      setCheckHidden(true);
      return false;
    } else {
      setCheckText("");
      setCheckHidden(false);
    }
    return true;
  };

  const onClickModalButton = () => {
    if (onTryCheckCurPassword()) {
      if (onTryCheckPassword()) {
        if (onTryCheckPasswordCheck()) {
          props.onClickSetFalse(passVal);
        }
      }
    }
  };

  return (
    <div>
      <div className="modalPassBox">
        <input
          type="password"
          className="modalPassInput"
          placeholder="현재 비밀번호:"
          onChange={onChangeCurPassword}
        ></input>
      </div>
      <div className="modalPassBox">
        <input
          type="password"
          className="modalPassInput"
          placeholder="새 비밀번호:"
          onChange={onChangePassword}
        ></input>
      </div>
      <div className="modalPassBox">
        <input
          type="password"
          className="modalPassInput"
          placeholder="새 비밀번호 확인:"
          onChange={onChangePasswordCheck}
        ></input>
      </div>

      <CheckTextComponent
        nameCheck={false}
        checkHidden={true}
        nameCheckText={passCheckText}
      />
      <button className="modalButtonCancelPass" onClick={props.onClickCancel}>
        취소
      </button>
      <button className="modalPassButton" onClick={onClickModalButton}>
        변경사항 저장
      </button>
    </div>
  );
}
export default PassComponent;
