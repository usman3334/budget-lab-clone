import React from 'react';

function Checkbox({ id, checked, onChange, className }) {
  return (
    <div className={`${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default Checkbox;
