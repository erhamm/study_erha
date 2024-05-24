import React, { useState, createContext } from "react";
import ChildCom from "./ChildCom";
import ChildCom2 from "./ChildCom2";
import MyContext from "./content/content";

const ParentCom = () => {
  //   const Mycontext = createContext();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("liyu");

  const onSetMessage = (value) => {
    setMessage(value);
  };

  const onUpdatename = () => {
    setName("pp");
  };

  const contextValue = {
    name,
    onUpdatename,
  };

  console.log("contextValue1=>", contextValue);
  return (
    <div>
      <ChildCom onSetMessage={onSetMessage} />
      <p>this is {message} ParentChild</p>
      <hr />
      <MyContext.Provider value={contextValue}>
        <ChildCom2 />
      </MyContext.Provider>
    </div>
  );
};

export default ParentCom;
