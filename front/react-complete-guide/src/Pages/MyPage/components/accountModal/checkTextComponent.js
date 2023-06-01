import "./checkText.css";

function CheckTextComponent(props) {
  return props.checkHidden ? (
    <div className="modalCheckTextBox">
      <div className={props.nameCheck ? "modalCheckTrue" : "modalCheckFalse"}>
        <div className="testUnHidden">{props.nameCheckText}</div>
      </div>
    </div>
  ) : (
    <div className="testHidden">{props.nameCheckText}</div>
  );
}
export default CheckTextComponent;
