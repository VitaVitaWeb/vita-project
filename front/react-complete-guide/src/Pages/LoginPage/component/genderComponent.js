import "./signUpPage.css";

function GenderComponent(props) {
  //성별 체크박스
  const onChangeMale = () => {
    props.setIsMale(props.isMale ? false : true);
    props.setValue((prevState) => ({
      ...prevState,
      gender: 0,
    }));
    props.setIsFemale(false);
  };

  const onChangeFemale = () => {
    props.setIsFemale(props.isFemale ? false : true);
    props.setValue((prevState) => ({
      ...prevState,
      gender: 1,
    }));
    props.setIsMale(false);
  };
  return (
    <div className="signUpPageBox">
      <input
        type="checkbox"
        checked={props.isMale ? true : false}
        className="signUpPageCheckBox"
        onChange={onChangeMale}
      ></input>
      <p className="signUpPageCheckBoxText">남</p>
      <input
        type="checkbox"
        checked={props.isFemale ? true : false}
        className="signUpPageCheckBox"
        onChange={onChangeFemale}
      ></input>
      <p className="signUpPageCheckBoxText">여</p>
    </div>
  );
}
export default GenderComponent;
