import TopBar from "../../CommonComponent/TopBar/topBar";
import "./component/signUpPage.css";
import React, { useContext, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../../customerInfo";
import NameComponent from "./component/nameComponent";
import PasswordComponent from "./component/passwordComponent";
import PhoneComponent from "./component/phoneComponent";
import BirthComponent from "./component/birthComponent";
import GenderComponent from "./component/genderComponent";
import EmailComponent from "./component/emailComponent";
function SignUpPage() {
  const userInfo = useContext(CustomerInfo);
  const [nicknameCheck, setNicknameCheck] = useState(false);

  const [emailCheck, setEmailCheck] = useState(true);

  const [inputPassword, setPassword] = useState();
  const [inputCheckPassword, setCheckPassword] = useState();

  const [phoneCheck, setPhoneCheck] = useState(false);

  const [signUpCheck, setSignUpCheck] = useState(false);
  const [idCheckSignUpText, setIdCheckSignUpText] = useState();

  const [birthDate, setBirthDate] = useState(new Date());

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const [email, setEmail] = useState({
    email: null,
    emailCom: null,
  });

  const [inputUserInfo, setInputUserInfo] = useState({
    id: null,
    password: null,
    createdDate: null,
    name: null,
    phoneNo: null,
    birthDay: null,
    gender: null,
  });

  const checkPasswordCorrect = () => {
    if (inputPassword == inputCheckPassword) {
      return false;
    } else return true;
  };

  //성별 체크유무
  const sexChecked = () => {
    if (isMale || isFemale) return false;
    else return true;
  };

  const movePage = useNavigate();

  function goMainPage() {
    movePage("/mainPage");
  }

  const onTrySignUp = async () => {
    // 가입 시도할때
    inputUserInfo.id = email.email + "@" + email.emailCom;
    console.log(inputUserInfo);
    if (!nicknameCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (!emailCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (checkPasswordCorrect()) {
      setSignUpCheck(false);
      setIdCheckSignUpText("비밀번호가 일치하지 않습니다.");
    } else if (sexChecked()) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else if (!phoneCheck) {
      setSignUpCheck(false);
      setIdCheckSignUpText("올바르지 않은 가입 정보");
    } else {
      try {
        inputUserInfo.createdDate = new Date();
        const data = await axios.post("/auth/join", { ...inputUserInfo });
        console.log(data);
        if (data.data) {
          userInfo.user.birthDay = inputUserInfo.birthDay;
          userInfo.user.createdDate = inputUserInfo.createdDate;
          userInfo.user.id = inputUserInfo.id;
          userInfo.user.password = inputUserInfo.password;
          userInfo.user.gender = inputUserInfo.gender;
          userInfo.user.name = inputUserInfo.name;
          userInfo.user.phoneNo = inputUserInfo.phoneNo;
        } else setIdCheckSignUpText("올바르지 않은 가입 정보");
        console.log(userInfo);
        axios.post("/auth/login", null, {
          params: {
            id: userInfo.user.id,
            password: userInfo.user.password,
          },
        });
        goMainPage();
      } catch {
        console.log("error in sign up");
      }
    }
  };

  return (
    <div>
      <div className="signUpPageMain">
        <NameComponent
          setValue={setInputUserInfo}
          setNameCheck={setNicknameCheck}
          nameCheck={nicknameCheck}
        />
        <EmailComponent
          setEmail={setEmail}
          email={email}
          emailCheck={emailCheck}
          setEmailCheck={setEmailCheck}
        />
        <PasswordComponent
          setValue={setInputUserInfo}
          setPassword={setPassword}
          setCheckPassword={setCheckPassword}
        />
        <GenderComponent
          setValue={setInputUserInfo}
          setIsMale={setIsMale}
          setIsFemale={setIsFemale}
          isMale={isMale}
          isFemale={isFemale}
        />
        <BirthComponent
          setValue={setInputUserInfo}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
        />
        <PhoneComponent
          setValue={setInputUserInfo}
          setPhoneCheck={setPhoneCheck}
          phoneCheck={phoneCheck}
        />
        <div className="displayFlex">
          <button className="signUpPageSignUpButton" onClick={onTrySignUp}>
            만들기
          </button>
          <div
            className={
              signUpCheck
                ? "signUpPageCheckSignUpTrue"
                : "signUpPageCheckSignUpFalse"
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
