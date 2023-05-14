import TopBarShort from "./topBarShort";
import TopBarLong from "./topBarLong";
import { useState, useEffect, useContext } from "react";
import CustomerInfo from "../../customerInfo";

function TopBar() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const userInfo = useContext(CustomerInfo);
  const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  useEffect(() => {
    if (userInfo.user.id !== null) {
      setIsLogined(true);
      console.log(userInfo.user.id);
    } else setIsLogined(false);
  }, []);

  return innerWidth > 1300 ? (
    <TopBarLong isLogined={isLogined} />
  ) : (
    <TopBarShort isLogined={isLogined} />
  );
}
export default TopBar;
