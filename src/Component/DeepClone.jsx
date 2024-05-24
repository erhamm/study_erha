import React from "react";

const DeepClone = () => {
  const obj = { name: "erha", age: 20 };

  const deepCloneFn = (obj) => {
    // let newObj = {};
    if (obj === null || typeof obj !== "object") {
      return obj; // 如果不是对象类型或者为null，直接返回该值
    }

    let newObj = Array.isArray(obj) ? [] : {}; // 判断是否为数组

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCloneFn(obj[key]);
      }
    }
    return newObj;
  };
  let newObj = deepCloneFn(obj);
  console.log("newObj=>", newObj);
  console.log("obj=>", obj);
  //   obj.name = "pp";
  //   console.log("1newObj=>", newObj);
  //   console.log("obj=>", obj);
  //   console.log("判断", obj === newObj);
  return <div></div>;
};

export default DeepClone;
