import TopBar from "../../CommonComponent/TopBar/topBar";
import Main from "./component/main";
import MainSec from "./component/mainSec";
import MainBestItem from "./component/mainBestItem";
import MainThird from "./component/mainThird";

function MainPage() {
  return (
    <div>
      <Main></Main>
      <MainSec></MainSec>
      <MainBestItem></MainBestItem>
      <MainThird></MainThird>
      <TopBar></TopBar>
    </div>
  );
}
export default MainPage;
