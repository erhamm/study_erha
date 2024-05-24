import React from "react";

const LineCom = () => {
  // let obj = { name: "erha", age: 20 };
  // const copyFn = (obj) => {
  //   if (obj === null || typeof obj !== "object") {
  //     return obj;
  //   }
  //   let newObj = Array.isArray(obj) ? [] : {};
  //   for (let o in obj) {
  //     if (Object.prototype.hasOwnProperty.call(obj, o)) {
  //       newObj[o] = copyFn(obj[o]);
  //     }
  //   }
  //   return newObj;
  // };
  // console.log(copyFn(obj) === obj);
  // let newObj2 = JSON.stringfy(obj);
  // let newObj3 = JSON.parse(JSON.stringify(obj));
  // console.log("newObj3=>", newObj3);
  // console.log("is=>", newObj3 === obj);

  // let newObj4 = { ...obj };
  // let newObj4 = Object.assign({});
  // console.log("newObj4=>", newObj4);
  // console.log("is1=>", newObj4 === obj);
  // 实现bind函数:调用后直接返回函数，当传入一个参数后调用时再传入一个，那么两个参数都会执行。
  /*  function myBind(func, contexts, ...args) {
    return function () {
      return func.apply(
        contexts,
        args.concat(Array.prototype.slice.call(arguments))
      );
    };
  }
  let obj1 = { name: "erha" };
  function sayHello(greeting, additional) {
    console.log(greeting, this.name, additional);
  }
  let res = myBind(sayHello, obj1, "hhh");
  // sayHello.apply(obj1, "hhh");
  res("bb"); */
  /* const myFn = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("yes");
        resolve("操作成功");
        // reject("操作失败");
      }, [2000]);
    });
  };
  // myFn()
  //   .then((res) => {
  //     console.log("res=>", res);
  //   })
  //   .catch((error) => {
  //     throw new Error(error);
  //   });
  const res = async () => {
    try {
      const result = await myFn();
      console.log("yes", result);
    } catch {
      console.log("no");
    }
  };
  res(); */
  // 写一个promise函数,
  /*   function myPromise(exe) {
    let self = this;
    self.status = "pending";
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCb = [];
    self.onRejectedCb = [];

    const resolve = (value) => {
      if (self.status === "pending") {
        self.status = "resolved";
        self.value = value;
        self.onFulfilledCb.forEach((c) => c(value));
      }
    };

    const reject = (reason) => {
      if (self.status === "pending") {
        self.status = "rejected";
        self.reason = reason;
        self.onRejectedCb.forEach((c) => c(reason));
      }
    };

    try {
      exe(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    if (self.status === "resolved") {
      onFullfilled(self.value);
    }
    if (self.status === "rejected") {
      onRejected(self.reason);
    }
    if (self.status === "pending") {
      self.onFulfilledCb.push(onFullfilled);
      self.onFulfilledCb.push(onRejected);
    }
  };
  myPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  }; */

  function myPromise(exe) {
    let self = this;
    self.value = "undefined";
    self.status = "pending";
    self.reason = "undefined";
    self.onFullfilledCallback = []; //保存成功时需要执行的方法
    self.onRejectedCallback = [];

    const resolve = (value) => {
      if (self.status === "pending") {
        self.status = "fullfilled";
        self.value = value;
        self.onFullfilledCallback.forEach((c) => c(value));
      }
    };
    const reject = (reason) => {
      if (self.status === "pending") {
        self.status = "rejected";
        self.value = reason;
        self.onRejectedCallback.forEach((c) => c(reason));
      }
    };

    try {
      exe(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this;
    if (self.status === "pending") {
      self.onFullfilledCallback.push(onFullfilled);
      self.onRejectedCallback.push(onRejected);
    }
    if (self.status === "fullfilled") {
      onFullfilled(self.value);
    }
    if (self.status === "rejected") {
      onRejected(self.reason);
    }
  };
  myPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  return (
    <div className="div_box">
      {/* <div className="div1"></div>
      <div className="div2"></div> */}
    </div>
  );
};

export default LineCom;
