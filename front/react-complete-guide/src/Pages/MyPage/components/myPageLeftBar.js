import "./myPageLeftBar.css";
import CustomerInfo from "../../../customerInfo";
import { useContext } from "react";

function MyPageLeftBar() {
  const userInfo = useContext(CustomerInfo);
  return (
    <div className="myPageLeftBar">
      <div className="myPageLeftBarName">{userInfo.user.name}님</div>
      <button className="myPageLeftBarAccount">계정정보</button>
      <button className="myPageLeftBarAccount">선호형태</button>
      <button className="myPageLeftBarJjim">찜 목록</button>
    </div>
  );
}
export default MyPageLeftBar;
