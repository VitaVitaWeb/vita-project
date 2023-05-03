import "./signUpPage.css";

function PasswordComponent(props) {
  const onChangePassword = (val) => {
    //비밀번호 입력시 갱신
    props.setValue((prevState) => ({
      ...prevState,
      password: val.target.value,
    }));
    props.setPassword(val.target.value);
  };

  const onChangePasswordCheck = (val) => {
    //비밀번호 확인 입력시 갱신
    props.setCheckPassword(val.target.value);
  };
  return (
    <div>
      <div className="signUpPageBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호:"
          onChange={onChangePassword}
        ></input>
      </div>
      <div className="signUpPageBox">
        <input
          type="password"
          className="signUpPageInput"
          placeholder="비밀번호 확인:"
          onChange={onChangePasswordCheck}
        ></input>
      </div>
    </div>
  );
}
export default PasswordComponent;
