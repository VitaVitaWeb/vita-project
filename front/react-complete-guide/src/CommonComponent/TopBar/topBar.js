import { useMediaQuery } from "react-responsive";
import TopBarShort from "./topBarShort";
import TopBarLong from "./topBarLong";
import { useState } from "react";
import { useEffect } from "react";
function TopBar() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return innerWidth > 1000 ? (
    <TopBarLong></TopBarLong>
  ) : (
    <TopBarShort></TopBarShort>
  );
}
export default TopBar;
