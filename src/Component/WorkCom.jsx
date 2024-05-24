import React, { useState } from "react";
import img from "../img/img.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import "./css/index.css";

const WorkCom = () => {
  // const [anum, setAnum] = useState(0);
  // const [bnum, setBnum] = useState(0);

  // const onAddanum = () => {
  //   setAnum((pre) => pre + 2);
  // };
  // const onAddbnum = () => {
  //   setBnum((pre) => pre + 1);
  // };
  // let a = [];
  // const fn = (a) => {
  //   // if(Object.keys(a)){}
  //   console.log("Object.keys(a)=>", Object.keys(a).length);
  //   console.log(a.constructor === Object);
  // };
  // fn(a);
  //深拷贝
  // const deepClone = (obj) => {
  //   if (typeof obj !== "object" || obj === null) {
  //     return obj;
  //   }
  //   let newObj = Array.isArray(obj) ? [] : {};
  //   for (let key in obj) {
  //     if (obj.hasOwnProperty(key)) {
  //       newObj[key] = deepClone(obj[key]);
  //     }
  //   }
  //   return newObj;
  // };
  // let obj1 = { name: "erha", age: 20, fn: () => console.log("1") };
  // // let res = deepClone(obj1);
  // // let obj2 = { ...obj1 };
  // let obj2 = obj1;
  // console.log("res=>", res);
  // console.log(res === obj1);
  // res.name = "meimei";
  // console.log("res2=>", res);
  // console.log("obj1=>", obj1);
  // console.log("obj2=>", obj2);
  // obj2.name = "mm";
  // console.log("obj1=>", obj1);
  // console.log("obj2=>", obj2);

  // console.log(navigator.userAgent, "userAgent");
  // let newWeakMap = new WeakMap();
  // let man1111 = { name: "erha" };
  // newWeakMap.set(man1111, "done");
  // // console.log("newWeakMap=>", newWeakMap);
  // man1111 = null;
  // console.log("newWeakMap2=>", newWeakMap);

  // let obj2 = {
  //   name: "erha",
  //   age: 20,
  // };
  // obj2.address = "浙江";
  // Object.defineProperty(obj2, "gender", {
  //   value: "lady",
  //   writable: true,
  //   enumerable: true,
  //   configurable: true,
  // });
  // obj2.gender = "men";
  // console.log("gender", obj2.gender);

  // // console.log(Object.keys(obj2));
  // // console.log("值", Object.values(obj2));
  // console.log("键值对", Object.entries(obj2));

  /* function asyncTask1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("task1");
        resolve();
      }, 1000);
    });
  }
  function asyncTask2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("task2");
        resolve();
      }, 1000);
    });
  }
  asyncTask1()
    .then((res) => {
      return asyncTask2();
    })
    .then((res) => {
      console.log("over");
    }); */

  // let res = setTimeout(() => {
  //   console.log("ppp");
  // }, 1000);
  // clearTimeout(res);
  // console.log("res=>", res);
  //大文件上传：

  //
  // function fn1() {
  // const fn = (...args) => {
  //   console.log("argument=>", args);
  // };
  // fn("er", "ha");
  // }
  // fn1("erha");
  // window.name = "erha";
  // let f1 = function () {
  //   return this.name;
  // };
  // let f2 = () => this.name;
  // let obj = { name: "obj_name" };
  // console.log(f1());

  return (
    <div className="div">
      {/* <span>a={anum}</span>
      <button onClick={onAddanum}>a+2</button>
      <hr />
      <span>b={bnum}</span>
      <button onClick={onAddbnum}>b+1</button> */}
      {/* <div className="iediv">IE盒模型</div>
      <div className="bzdiv">标准盒模型</div> */}
      {/* <div className="calcdiv">calc</div> */}
      {/* <ul className="img-wrapper">
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <img src={img2} alt="" />
        </li>
        <li>
          <img src={img3} alt="" />
        </li>
      </ul> */}
      {/* <div className="square"></div>1<div className="square1"></div>2 */}
      <div className="test1">test</div>
    </div>
  );
};

export default WorkCom;
