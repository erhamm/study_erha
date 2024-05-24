import React, { useContext, useState } from "react";

const FormContext = React.createContext();

const FormItem = ({ name, children }) => {
  const [formData, setFormData] = useState({});

  const contextValue = {
    value: formData[name] || "",
    onChange: (newVal) => setFormData({ ...formData, [name]: newVal }),
  };

  // 当前formData值
  console.log("formData:", formData);

  return (
    <FormContext.Provider value={contextValue}>
      <div>{children}</div>
    </FormContext.Provider>
  );
};

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

const ExampleForm = () => {
  return (
    <FormItem name="ceshi">
      <Input />
    </FormItem>
  );
};

export default ExampleForm;
