import { useState } from "react";
import "./accountGenderModal.css";
function GenderComponent(props) {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const onChangeMale = () => {
    setIsMale(isMale ? false : true);
    props.setGender(0);
    setIsFemale(false);
  };
  const onChangeFemale = () => {
    setIsFemale(isFemale ? false : true);
    props.setGender(1);
    setIsMale(false);
  };
  return (
    <div className="modalGenderBox">
      <input
        type="checkbox"
        checked={isMale ? true : false}
        className="modalCheckBox"
        onChange={onChangeMale}
      ></input>
      <p className="modalCheckBoxText">남</p>
      <input
        type="checkbox"
        checked={isFemale ? true : false}
        className="modalCheckBox"
        onChange={onChangeFemale}
      ></input>
      <p className="modalCheckBoxText">여</p>
    </div>
  );
}
export default GenderComponent;
