import "./signUpPage.css";

function CheckTextShortComponent(props) {
  return props.checkHidden ? (
    <div className="signUpPageBox">
      <div
        className={
          props.nameCheck
            ? "signUpPageCheckShortTrue"
            : "signUpPageCheckShortFalse"
        }
      >
        <div className="testUnHidden">{props.nameCheckText}</div>
      </div>
    </div>
  ) : (
    <div
      className={
        props.nameCheck
          ? "signUpPageCheckShortTrue"
          : "signUpPageCheckShortFalse"
      }
    >
      <div className="testHidden">{props.nameCheckText}</div>
    </div>
  );
}
export default CheckTextShortComponent;
