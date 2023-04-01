import TopBar from "../../CommonComponent/TopBar/topBar";
import "./component/loginPage.css";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../../customerInfo";
function SignUpPage() {
  const userInfo = useContext(CustomerInfo);
  const [inputId, setId] = useState();
  const [idCheck, setIdCheck] = useState(true);
  const [idCheckText, setIdCheckText] = useState();

  const [inputPassword, setPassword] = useState();
  const [inputCheckPassword, setCheckPassword] = useState();

  const [inputNickname, setNickname] = useState();
  const [nicknameCheck, setnicknameCheck] = useState(false);
  const [idCheckNicknameText, setIdCheckNicknameText] = useState();

  const [inputPhone, setPhone] = useState();
  const [PhoneCheck, setPhoneCheck] = useState(false);
  const [idCheckPhoneText, setIdCheckPhoneText] = useState();

  const [signUpCheck, setSignUpCheck] = useState(false);
  const [idCheckSignUpText, setIdCheckSignUpText] = useState();

  const birthDate = new Date();

  const monthOptions = [
    { value: "월", name: "월" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
    { value: "6", name: "6" },
    { value: "7", name: "7" },
    { value: "8", name: "8" },
    { value: "9", name: "9" },
    { value: "10", name: "10" },
    { value: "11", name: "11" },
    { value: "12", name: "12" },
  ];

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const [inputUserInfo, setInputUserInfo] = useState({
    id: null,
    password: null,
    createdDate: null,
    name: null,
    phoneNo: null,
    birthDay: null,
    gender: null,
  });

  const onChangeNickname = (val) => {
    //닉네임 입력시 중복 체크 및 갱신
    setNickname(val.target.value);
    inputUserInfo.name = val.target.value;
    onTryCheckNickname();
  };

  const onChangeId = (val) => {
    //아이디 입력시 중복 체크 및 갱신
    setId(val.target.value);
    inputUserInfo.id = val.target.value;
    onTryCheckId();
  };

  const onChangePassword = (val) => {
    //비밀번호 입력시 갱신
    setPassword(val.target.value);
    inputUserInfo.password = val.target.value;
  };

  const onChangePasswordCheck = (val) => {
    //비밀번호 확인 입력시 갱신
    setCheckPassword(val.target.value);
  };

  const onChangeYear = (val) => {
    //년 변경
    birthDate.setFullYear(val.target.value);
    inputUserInfo.birthDay = birthDate;
  };

  const onChangeMonth = (val) => {
    //월 변경
    birthDate.setMonth(val.target.value);
    inputUserInfo.birthDay = birthDate;
  };

  const onChangeDay = (val) => {
    //일 변경
    birthDate.setDate(val.target.value);
    inputUserInfo.birthDay = birthDate;
  };

  //비밀번호 확인
  const checkPasswordCorrect = () => {
    if (inputPassword == inputCheckPassword) {
      return false;
    } else return true;
  };

  const onChangePhone = (val) => {
    //폰번호 입력시 갱신
    setPhone(val.target.value);
    inputUserInfo.phoneNo = val.target.value;
    onTryCheckPhone();
  };

  const onTryCheckId = async () => {
    // 아이디 중복 체크
    try {
      const data = await axios.get("/auth/idCheck", {
        params: { id: inputId },
      });
      if (data) {
        setIdCheck(true);
        setIdCheckText("사용 가능한 아이디 입니다.");
      } else {
        setIdCheck(false);
        setIdCheckText("사용 불가능한 아이디 입니다.");
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onTryCheckNickname = async () => {
    // 닉네임 중복 체크
    try {
      const data = await axios.get("/auth/nickNameCheck", {
        params: { nickName: inputNickname },
      });
      if (data) {
        setnicknameCheck(true);
        setIdCheckNicknameText("사용 가능한 닉네임 입니다.");
      } else {
        setnicknameCheck(false);
        setIdCheckNicknameText("사용 불가능한 닉네임 입니다.");
      }
    } catch {
      console.log("error in checkId");
    }
  };

  //성별 체크박스
  const onChangeMale = () => {
    setIsMale(isMale ? false : true);
    inputUserInfo.gender = 0;
    setIsFemale(false);
  };

  const onChangeFemale = () => {
    setIsFemale(isFemale ? false : true);
    inputUserInfo.gender = 1;
    setIsMale(false);
  };
  //성별 체크유무
  const sexChecked = () => {
    if (isMale || isFemale) return false;
    else return true;
  };

  const onTryCheckPhone = async () => {
    // 폰번호 중복 체크
    try {
      const data = await axios.get("/auth/phoneNoCheck", {
        params: { phoneNo: inputPhone },
      });
      if (data) {
        setPhoneCheck(true);
        setIdCheckPhoneText("사용 가능한 번호 입니다.");
      } else {
        setPhoneCheck(false);
        setIdCheckPhoneText("사용 불가능한 번호 입니다.");
      }
    } catch {
      console.log("error in checkId");
    }
  };

  const onTrySignUp = async () => {
    // 가입 시도할때
    if (!nicknameCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (!idCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (checkPasswordCorrect()) {
      setSignUpCheck(false);
      setIdCheckSignUpText("비밀번호가 일치하지 않습니다.");
    } else if (sexChecked()) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (!PhoneCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else {
      try {
        inputUserInfo.createdDate = new Date();
        console.log(inputUserInfo);
        const data = await axios.post("/auth/join", {
          params: { member: inputUserInfo },
        });
        console.log(data);
        userInfo.birthDay = inputUserInfo.birthDay;
        userInfo.createdDate = inputUserInfo.createdDate;
        userInfo.id = inputUserInfo.id;
        userInfo.password = inputUserInfo.password;
        userInfo.gender = inputUserInfo.gender;
        userInfo.name = inputUserInfo.name;
        userInfo.phoneNo = inputUserInfo.phoneNo;
        console.log(userInfo);
      } catch {
        console.log("error in sign up");
      }
    }
  };

  return (
    <div>
      <div className="loginPageMain">
        <div className="loginPageBox">
          <input
            className="loginPageInput"
            placeholder="닉네임:"
            onChange={onChangeNickname}
          ></input>
          <div
            className={
              nicknameCheck ? "loginPageCheckTrue" : "loginPageCheckFalse"
            }
          >
            {idCheckNicknameText}
          </div>
        </div>
        <div className="loginPageBox">
          <input
            className="loginPageInput"
            placeholder="아이디:"
            onChange={onChangeId}
          ></input>
          <div
            className={idCheck ? "loginPageCheckTrue" : "loginPageCheckFalse"}
          >
            {idCheckText}
          </div>
        </div>
        <div className="loginPageBox">
          <input
            type="password"
            className="loginPageInput"
            placeholder="비밀번호:"
            onChange={onChangePassword}
          ></input>
        </div>
        <div className="loginPageBox">
          <input
            type="password"
            className="loginPageInput"
            placeholder="비밀번호 확인:"
            onChange={onChangePasswordCheck}
          ></input>
        </div>
        <div className="loginPageBox">
          <input
            type="checkbox"
            checked={isMale ? true : false}
            className="loginPageCheckBox"
            onChange={onChangeMale}
          ></input>
          <p className="loginPageCheckBoxText">남</p>
          <input
            type="checkbox"
            checked={isFemale ? true : false}
            className="loginPageCheckBox"
            onChange={onChangeFemale}
          ></input>
          <p className="loginPageCheckBoxText">여</p>
        </div>
        <div className="loginPageBox">
          <input
            className="loginPageInputShort"
            placeholder="생일(년):"
            onChange={onChangeYear}
          ></input>
          <select className="loginPageInputMonthDay" onChange={onChangeMonth}>
            {monthOptions.map((option) => (
              <option value={option.value}>{option.name}</option>
            ))}
          </select>
          <input
            className="loginPageInputMonthDay"
            placeholder="생일(일):"
            onChange={onChangeDay}
          ></input>
        </div>
        <div className="loginPageBox">
          <input
            className="loginPageInput"
            placeholder="전화번호:"
            onChange={onChangePhone}
          ></input>
          <div
            className={
              PhoneCheck ? "loginPageCheckTrue" : "loginPageCheckFalse"
            }
          >
            {idCheckPhoneText}
          </div>
        </div>
        <div className="displayFlex">
          <button className="loginPageSignUpButton" onClick={onTrySignUp}>
            만들기
          </button>
          <div
            className={
              signUpCheck
                ? "loginPageCheckSignUpTrue"
                : "loginPageCheckSignUpFalse"
            }
          >
            {idCheckSignUpText}
          </div>
        </div>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default SignUpPage;
