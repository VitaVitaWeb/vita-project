import "../../LoginPage/component/signUpPage.css";
import "./searchPage.css";
import Select from "react-select";
import { useMemo } from "react";

function BirthComponent(props) {
  const monthOptions = [
    { value: "0", label: "1" },
    { value: "1", label: "2" },
    { value: "2", label: "3" },
    { value: "3", label: "4" },
    { value: "4", label: "5" },
    { value: "5", label: "6" },
    { value: "6", label: "7" },
    { value: "7", label: "8" },
    { value: "8", label: "9" },
    { value: "9", label: "10" },
    { value: "10", label: "11" },
    { value: "11", label: "12" },
  ];
  const onChangeYear = (val) => {
    props.birthDate.setYear(val.target.value);
    props.setValue((prevState) => ({
      ...prevState,
      date: props.birthDate,
    }));
  };

  const onChangeMonth = (val) => {
    props.birthDate.setMonth(val.value);
    props.setValue((prevState) => ({
      ...prevState,
      date: props.birthDate,
    }));
  };

  const onChangeDay = (val) => {
    props.birthDate.setDate(val.target.value);
    props.setValue((prevState) => ({
      ...prevState,
      date: props.birthDate,
    }));
  };
  const customStyles = useMemo(
    () => ({
      option: (provided, state) => ({
        ...provided,
        fontSize: "20px",
      }),
      control: (provided) => ({
        ...provided,
        borderColor: "gray",
        borderRadius: "2px",
        fontSize: "20px",
        width: 100,
        left: 5,
        height: 40,
        boxShadow: "black",
        "&:hover": {
          border: "2px solid black",
        },
      }),
      singleValue: (provided, state) => ({
        ...provided,
        fontSize: "20px",
        marginTop: -5,
        color: state.data.color,
      }),
    }),
    []
  );
  return (
    <div className="idSearchPageBirthBox">
      <input
        className="idSearchPageInputYear"
        placeholder="생일(년):"
        onChange={onChangeYear}
      ></input>
      <Select
        options={monthOptions}
        styles={customStyles}
        placeholder="월"
        onChange={(e) => onChangeMonth(e)}
      />
      <input
        className="idSearchPageInputMonthDay"
        placeholder="생일(일):"
        onChange={onChangeDay}
      ></input>
    </div>
  );
}
export default BirthComponent;
