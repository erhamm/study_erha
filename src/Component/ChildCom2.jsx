import React, { useContext } from "react";
import MyContext from "./content/content"; // 导入上下文

const ChildCom2 = () => {
  const contentValue = useContext(MyContext);
  console.log("contentValue=>", contentValue);
  const { name, onUpdatename } = contentValue;
  return (
    <div>
      <p>this is {name} ChildCom2</p>
      <button onClick={onUpdatename}>更改pp</button>
    </div>
  );
};

export default ChildCom2;
