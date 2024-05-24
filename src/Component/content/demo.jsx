import React, { useEffect, useState, useMemo, useRef } from "react";

const Demo = () => {
  const [num, setNum] = useState(0);
  //   const msg = useMemo(
  //     () => ({
  //       name: "erha",
  //     }),
  //     []
  //   );
  const msg = useRef({
    name: "erha",
  });
  useEffect(() => {
    console.log("变化了");
  }, [msg]);
  const onAdd = () => {
    setNum((pre) => pre + 1);
  };
  return (
    <div>
      测试
      <span>{num}</span>
      <button onClick={onAdd}>+1</button>
    </div>
  );
};

export default Demo;
