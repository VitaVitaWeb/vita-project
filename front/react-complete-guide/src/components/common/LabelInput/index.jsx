import React from 'react';

const LabelInput = ({
  label = '',
  readOnly = true,
  value = '',
  onChange = () => null
}) => {
  return (
    <div>
      <p>{label}</p>
      <input type='text' readOnly={readOnly} value={value} onChange={(e) => {
        if (readOnly) return;
        onChange(e.target.value);
      }}/>
    </div>
  );
};

export default LabelInput;
