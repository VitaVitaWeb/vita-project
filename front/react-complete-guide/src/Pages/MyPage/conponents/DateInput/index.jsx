const DateInput = ({
  label = '',
  value = '',
  readOnly= true,
  onChange = () => null,
}) => {
  return (
    <div className="date-input">
      <label>{label}</label>
      <input
        readOnly={readOnly}
        type="date"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DateInput;