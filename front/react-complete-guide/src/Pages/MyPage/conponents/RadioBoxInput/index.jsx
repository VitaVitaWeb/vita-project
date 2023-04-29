// make RadioBoxInput component
import { Radio } from 'antd';

const RadioBoxInput = ({ label, options,readOnly, value,onChange = () => null }) => {

  return (
    <div>
    <p>{label}</p>
      <Radio.Group onChange={(e) => {
        onChange(e.target.value);
      }} value={value} optionType="button" options={options}/>

    </div>
  );
};

export default RadioBoxInput;