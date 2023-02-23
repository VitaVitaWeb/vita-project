import "./mainBestItem.css";
function MainBestItem() {
  return (
    <div className="mainSec">
      <div className="mainSecBorder">
        <div className="bestItemTextBox">
          <h1 className="bestItemText">Best Items</h1>
        </div>
        <div className="bestItemButtomWindow">
          <button className="bestItemButton">종류</button>
          <button className="bestItemButton">종류</button>
          <button className="bestItemButton">종류</button>
          <button className="bestItemButton">종류</button>
          <button className="bestItemButton">종류</button>
        </div>
        <div className="bestItemImgWindow">
          <button className="bestItemImgBorder"></button>
          <button className="bestItemImgBorder"></button>
          <button className="bestItemImgBorder"></button>
          <button className="bestItemImgBorder"></button>
        </div>
        <div className="bestItemInfoWindow">
          <button className="bestItemInfo">이름</button>
          <button className="bestItemInfo">이름</button>
          <button className="bestItemInfo">이름</button>
          <button className="bestItemInfo">이름</button>
        </div>
      </div>
    </div>
  );
}
export default MainBestItem;
