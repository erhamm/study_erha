import React, { useState } from "react";
import useMemoizedFn from "./useMemo"; // 请替换为实际的文件路径

function MyMemo() {
  const [name, setName] = useState("a");

  // 使用 useMemoizedFn 创建 memoized 函数
  const memorizedFn = useMemoizedFn(() => {
    console.log("name", name);
  }, [name]); // 将依赖项传递给 useMemoizedFn

  // 在需要时调用 memoized 函数
  const handleClick = () => {
    memorizedFn(); // 这里会输出当前的 name 值
  };

  return (
    <div>
      <p>Current name: {name}</p>
      <button onClick={handleClick}>Invoke Memoized Function</button>
    </div>
  );
}

export default MyMemo;
