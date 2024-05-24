import React, { useState } from "react";
import CCom from "./cCom.tsx";
import useDebounce from "../useDebounce.jsx";
import useSetState from "../useSetState.jsx";

export default function PCom() {
  // const [name, setName] = useState("erha");
  // const [age, setAge] = useState(12);
  const [state, setState] = useSetState({
    name: "erha",
    age: 12,
  });
  const onHandleClick = () => {
    console.log(123);
  };
  const onChangeName = () => {
    // setName("pp");
    setState({ name: "pp" });
  };
  const onChangeAge = () => {
    // setAge(21);
    setState({ age: 21 });
  };

  return (
    <div>
      pCom
      <CCom />
      <button onClick={useDebounce(2000, onHandleClick)}>点击</button>
      <p>name:{state.name}</p>
      <button onClick={onChangeName}>切换姓名</button>
      <p>age:{state.age}</p>
      <button onClick={onChangeAge}>切换年龄</button>
    </div>
  );
}
