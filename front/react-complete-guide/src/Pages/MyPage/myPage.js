import AccountSpec from "./components/accountSpec";
import AccountSurvey from "./components/accountSurvey";
import MyPageLeftBar from "./components/myPageLeftBar";
import TopBar from "../../CommonComponent/TopBar/topBar";
import "./myPage.css";

function MyPage() {
  return (
    <div>
      <TopBar />
      <div className="myPageBorder">
        <MyPageLeftBar />
        <div className="myPageMain">
          <AccountSpec />
          <AccountSurvey />
          {/* 
          
          선호 영양제 태그
          경계선
          선호 영양제 형태
          선호 영양제 효능

          찜목록
          경계선
          영양제 목록들

          로그아웃 */}
        </div>
      </div>
    </div>
  );
}
export default MyPage;
