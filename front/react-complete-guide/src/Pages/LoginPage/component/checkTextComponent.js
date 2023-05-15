import "./signUpPage.css";

function CheckTextComponent(props) {
  return (
    <div
      className={
        props.nameCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
      }
    >
      <div className={props.checkHidden ? "testUnHidden" : "testHidden"}>
        {props.nameCheckText}
      </div>
    </div>
  );
}
export default CheckTextComponent;
