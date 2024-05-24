import React, { useState, useRef } from "react";

export default function Zbo() {
  //   const [arr, setArr] = useState<number[]>([]);

  //   function incrementHandle() {
  //     let newArr = arr;
  //     console.log("arr=>", arr);
  //     console.log("newArr=>", newArr);
  //     newArr.push((arr[arr.length - 1] || 0) + 1);
  //     setArr(newArr);
  //     console.log("arr2=>", arr);
  //     console.log("newArr2=>", newArr);
  //   }

  //   return (
  //     <div>
  //       <button onClick={incrementHandle}>递增</button>
  //       {arr.map((item) => (
  //         <div key={item}>{item}</div>
  //       ))}
  //     </div>
  //   );
  // }
  const [count, setCount] = useState(0);
  // const [b,setB]=useState(0);

  let timer = useRef<any>(null);
  let inputRef = useRef<any>(null);
  function handle() {
    setCount(count + 1);
    let b = count * 2;
    // 当 setTimeout 执行时，
    // 回调函数的 count 值不是 1，而是 0
    setTimeout(() => {
      setCount(count + 2);
      b = count * 3;
      // console.log("count=>", count);
      // console.log("b=>", b);
    }, 0);
  }
  const onStart = () => {
    timer.current = setTimeout(() => {
      setCount((pre) => pre + 1);
    }, 300);
  };
  const onStop = () => {
    clearTimeout(timer.current);
  };
  const onFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // var x = 1;
  // var doSomeThing = function (y) {
  //   x = 100;
  //   return x + y;
  // };

  // console.log(doSomeThing(50)); // ?
  // console.log(x);

  // let b = 2;
  // console.log("b=>", --b); //1
  // console.log("b=>", b++); //1
  // console.log("b=>", --b); //1
  // console.log("b=>", --b); //0

  function counter() {
    let count = 0;
    return function () {
      return ++count;
    };
  }
  const myCounter = counter();
  console.log(myCounter()); // 输出是多少？
  console.log(myCounter()); // 此时输出是多少？

  return (
    <div>
      <div>{count}</div>
      <button onClick={handle}>递增</button>
      <button onClick={onStart}>启动</button>
      <button onClick={onStop}>停止</button>
      {/* <input type="text" ref={inputRef} />
      <button onClick={onFocusInput}>点击我focus input</button> */}
    </div>
  );
}
