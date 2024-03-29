import "./searchPage.css";
import TopBar from "../../../CommonComponent/TopBar/topBar";
import GenderComponent from "./genderComponent";
import React, { useState, useEffect } from "react";
import BirthComponent from "./birthComponent";
import axios from "axios";
function IdSearch(props) {
  const [searchText, setSearchText] = useState();
  const [searchTextTrue, setSearchTextTrue] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: null,
    date: new Date(),
    gender: null,
  });
  const [date, setDate] = useState(new Date());
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);

  const OnclickIdButton = () => {
    props.setOnIdSearch(true);
  };

  const OnclickPwButton = () => {
    props.setOnIdSearch(false);
  };

  const OnChangeName = (val) => {
    setUserInfo((prevState) => ({
      ...prevState,
      name: val.target.value,
    }));
  };
  const OnTrySearch = async () => {
    try {
      const data = await axios.get("/member/findid/", {
        params: {
          name: userInfo.name,
          birthday: new Date(userInfo.date)
            .toLocaleDateString()
            .replace(/\./g, "")
            .replace(/\s/g, "-"),
          gender: userInfo.gender,
        },
      });
      if (data.data.length > 6) {
        setSearchText("등록된 아이디:" + data.data);
        setSearchTextTrue(true);
      } else {
        setSearchText("존재하지 않는 정보입니다.");
        setSearchTextTrue(false);
      }
    } catch {
      console.log("error in searchId");
    }
  };

  useEffect(() => {
    setUserInfo((prevState) => ({
      ...prevState,
      gender: isMale ? 0 : 1,
    }));
  }, [isMale]);

  return (
    <div>
      <TopBar></TopBar>
      <div className="searchPageMain">
        <div className="searchPageIdPwButtom">
          <button className="searchPageIdButton" onClick={OnclickIdButton}>
            아이디 찾기
          </button>
          <button
            className="searchPagePwButtonDisabled"
            onClick={OnclickPwButton}
          >
            비밀번호 찾기
          </button>
        </div>
        <div className="searchPageInputArea">
          <div className="idSearchPageBox">
            <div>
              <input
                className="idSearchPageInput"
                placeholder="닉네임:"
                onChange={OnChangeName}
              ></input>
            </div>
            <BirthComponent birthDate={date} setValue={setUserInfo} />
            <GenderComponent
              value={userInfo}
              setIsMale={setIsMale}
              setIsFemale={setIsFemale}
              isMale={isMale}
              isFemale={isFemale}
            />
            <button className="searchPageIdSearchButton" onClick={OnTrySearch}>
              아이디 찾기
            </button>
            <div
              className={
                searchTextTrue ? "searchPageTextTrue" : "searchPageTextFalse"
              }
            >
              {searchText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IdSearch;
