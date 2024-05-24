import React, { useState, useEffect } from "react";

const Com = () => {
  const [countdown, setcountdown] = useState(10);
  const [isSending, setIsSetting] = useState(false);

  let arr = [
    { id: 0, name: "1", parent: -1, childNode: [] },
    { id: 1, name: "1", parent: 0, childNode: [] },
    { id: 99, name: "1-1", parent: 1, childNode: [] },
    { id: 111, name: "1-1-1", parent: 99, childNode: [] },
    { id: 66, name: "1-1-2", parent: 99, childNode: [] },
    { id: 1121, name: "1-1-2-1", parent: 112, childNode: [] },
    { id: 12, name: "1-2", parent: 1, childNode: [] },
    { id: 2, name: "2", parent: 0, childNode: [] },
    { id: 21, name: "2-1", parent: 2, childNode: [] },
    { id: 22, name: "2-2", parent: 2, childNode: [] },
    { id: 221, name: "2-2-1", parent: 22, childNode: [] },
    { id: 3, name: "3", parent: 0, childNode: [] },
    { id: 31, name: "3-1", parent: 3, childNode: [] },
    { id: 32, name: "3-2", parent: 3, childNode: [] },
  ];
  function arrToTree(arr) {
    const map = {};
    const tree = [];

    arr.forEach((item) => {
      map[item.id] = item;
      item.childNode = [];
    });
    arr.forEach((item) => {
      if (item.parent !== -1 && map[item.parent]) {
        map[item.parent].childNode.push(item);
      } else {
        tree.push(item);
      }
    });
    return tree;
  }
  const tree = arrToTree(arr);
  console.log("tree=>", tree);

  useEffect(() => {
    let timer;
    if (isSending && countdown > 0) {
      timer = setTimeout(() => {
        setcountdown(countdown - 1);
      }, 1000);
    } else if (isSending && countdown === 0) {
      setIsSetting(false);
      setcountdown(10);
    }
    return () => clearTimeout(timer);
  }, [countdown, isSending]);

  const handleClick = () => {
    if (!isSending) {
      setIsSetting(true);
      setcountdown(10);
    }
  };
  return (
    <div>
      <button onClick={handleClick} disabled={isSending}>
        {isSending ? `倒计时 ${countdown}s` : "获取验证码"}
      </button>
    </div>
  );
};
export default Com;
