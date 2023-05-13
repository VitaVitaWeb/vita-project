import "../searchPage.css";

function GenderComponent(props) {
  const onChangeMale = () => {
    props.setIsMale(props.isMale ? false : true);
    props.setIsFemale(false);
  };

  const onChangeFemale = () => {
    props.setIsFemale(props.isFemale ? false : true);
    props.setIsMale(false);
  };
  return (
    <div className="idSearchPageCheckBoxArea">
      <input
        type="checkbox"
        checked={props.isMale ? true : false}
        className="idSearchPageCheckBox"
        onChange={onChangeMale}
      ></input>
      <p className="idSearchPageCheckBoxText">남</p>
      <input
        type="checkbox"
        checked={props.isFemale ? true : false}
        className="idSearchPageCheckBox"
        onChange={onChangeFemale}
      ></input>
      <p className="idSearchPageCheckBoxText">여</p>
    </div>
  );
}
export default GenderComponent;
