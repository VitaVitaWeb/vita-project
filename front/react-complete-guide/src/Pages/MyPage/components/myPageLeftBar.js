import "./myPageLeftBar.css";
import CustomerInfo from "../../../customerInfo";
import { useContext } from "react";
import { Link } from "react-scroll";

function MyPageLeftBar() {
  const userInfo = useContext(CustomerInfo);
  return (
    <div className="myPageLeftBar">
      <Link to="1" spy={true} smooth={true}>
        <button className="myPageLeftBarAccount">{userInfo.user.name}님</button>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <button className="myPageLeftBarAccount">계정정보</button>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <button className="myPageLeftBarJjim">선호형태</button>
      </Link>
    </div>
  );
}
export default MyPageLeftBar;
