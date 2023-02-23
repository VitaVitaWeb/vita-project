import "./surveyBottomBar.css";
function surveyBottomBar(props) {
  return (
    <div className="surveyBottomBarBorder">
      <div className="surveyBottomBarFrontButton">
        <button className="surveyBottomBarButton" onClick={props.prevNav}>
          이전
        </button>
      </div>
      <div className="surveyBottomBarRearButton">
        <button className="surveyBottomBarButton" onClick={props.nextNav}>
          다음
        </button>
      </div>
    </div>
  );
}
export default surveyBottomBar;
