import axios from "axios";
import "./signUpPage.css";
import { useState } from "react";

function NameComponent(props) {
  const [nameCheckText, setCheckText] = useState();
  const onTryCheckNickname = async (val) => {
    // 닉네임 중복 체크
    try {
      const data = await axios.get("/auth/nameCheck/", {
        params: { name: val },
      });
      console.log(data);
      if (data.data) {
        props.setNameCheck(true);
        setCheckText("사용 가능한 닉네임 입니다.");
      } else {
        props.setNameCheck(false);
        setCheckText("사용 불가능한 닉네임 입니다.");
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onChangeNickname = (val) => {
    //닉네임 입력시 중복 체크 및 갱신
    props.setValue((prevState) => ({ ...prevState, name: val.target.value }));
    onTryCheckNickname(val.target.value);
  };

  return (
    <div className="signUpPageBox">
      <input
        className="signUpPageInput"
        placeholder="닉네임:"
        onChange={onChangeNickname}
      ></input>
      <div
        className={
          props.nameCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
        }
      >
        {nameCheckText}
      </div>
    </div>
  );
}
export default NameComponent;
