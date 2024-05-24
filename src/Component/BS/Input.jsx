import React, { useContext } from "react";

import { FormContext } from "./FormItem";

const Input = () => {
  const { value, onChange } = useContext(FormContext);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
