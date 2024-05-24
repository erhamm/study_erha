// // /* const PROMISE_STATE = {
// //   PENDING: 0,
// //   FULFILLED: 1,
// //   REJECTED: 2,
// // };
// // class MyPromise {
// //   result;
// //   state = PROMISE_STATE.PENDING;
// //   callback = [];
// //   constructor(exe) {
// //     exe(this.resolve.bind(this), this.reject.bind(this));
// //   }

// //   resolve(value) {
// //     if (this.state !== PROMISE_STATE.PENDING) return;

// //     this.result = value;
// //     this.state = PROMISE_STATE.FULFILLED;
// //     queueMicrotask(() => this.callback && this.callback.forEach((cb) => cb()));
// //   }

// //   reject(reason) {
// //     if (this.state !== PROMISE_STATE.PENDING) return;
// //     this.result = reason;
// //     this.state = PROMISE_STATE.REJECTED;
// //     queueMicrotask(() => this.callback && this.callback.forEach((cb) => cb()));
// //   }

// //   then(onFulfilled, onRejected) {
// //     return new MyPromise((resolve, reject) => {
// //       if (this.state === PROMISE_STATE.FULFILLED) {
// //         queueMicrotask(() => onFulfilled(this.result));
// //       }
// //       if (this.state === PROMISE_STATE.PENDING) {
// //         //   this.callback.push(onFulfilled);
// //         this.callback.push(() => resolve(onFulfilled(this.result)));
// //         this.callback.push(() => reject(onRejected(this.result)));
// //       }
// //       if (this.state === PROMISE_STATE.REJECTED) {
// //         queueMicrotask(() => onRejected(this.result));
// //       }
// //     });
// //   }

// //   catch() {}
// // }

// // const mp = new MyPromise((resolve, reject) => {
// //   // reject("出错了");
// //   setTimeout(() => {
// //     resolve("erha");
// //     // reject("出错了");
// //   });
// // });

// // mp.then(
// //   (result) => {
// //     console.log("then res1:", result);
// //     return "res1";
// //   },
// //   (e) => {
// //     console.log("e=>", e);
// //   }
// // ); */
// // // .then((result) => {
// // //   console.log("then res2:", result);
// // // });
// // //   .catch((e) => {
// // //     console.log("出错了", e);
// // //   });
// // // mp.then((result) => {
// // //   console.log("then res3:", result);
// // // });
// // // console.log(mp);

// // // let arr = [1, 2, 3, 4, "hello"];
// // // Array.prototype.exta = "erha";
// // // for (let value in arr) {
// // //   if (arr.hasOwnProperty(value)) {
// // //     console.log(value);
// // //   }
// // // }
// // // let arr = [1, 2, [3, 4, [5, 6], 7]];
// // // for (let value of arr) {
// // //   console.log(value);
// // // }

// // // 冒泡排序：
// // // let arr = [1, 2, 5, 3, 4];
// // // for (let i = 0; i < arr.length - 1; i++) {
// // //   for (let j = 0; j < arr.length - 1; j++) {
// // //     if (arr[i] > arr[i + 1]) {
// // //       let temp;
// // //       temp = arr[i];
// // //       arr[i] = arr[i + 1];
// // //       arr[i + 1] = temp;
// // //     }
// // //   }
// // // }
// // // console.log(arr);
// // /* const PROMISE_STATE2 = {
// //   PENDING: 0,
// //   FULFILLED: 1,
// //   REJECTED: 2,
// // };
// // class MyPromise2 {
// //   result;
// //   state = PROMISE_STATE2.PENDING;
// //   callback = [];
// //   constructor(exe) {
// //     exe(this.resolve.bind(this), this.reject.bind(this));
// //   }
// //   resolve(value) {
// //     if (this.state !== PROMISE_STATE2.PENDING) return;
// //     this.result = value;
// //     this.state = PROMISE_STATE2.FULFILLED;
// //     queueMicrotask(() => this.callback && this.callback.forEach((c) => c()));
// //   }
// //   reject(reason) {
// //     if (this.state !== PROMISE_STATE2.PENDING) return;
// //     this.state = PROMISE_STATE2.REJECTED;
// //     this.result = reason;
// //     queueMicrotask(() => this.callback && this.callback.forEach((c) => c()));
// //   }
// //   then(onFulfilled, onRejected) {
// //     return new MyPromise2((resolve, reject) => {
// //       if (this.state === PROMISE_STATE2.FULFILLED) {
// //         queueMicrotask(() => {
// //           onFulfilled(this.result);
// //         });
// //       }
// //       if (this.state === PROMISE_STATE2.REJECTED) {
// //         queueMicrotask(() => onRejected(this.result));
// //       }
// //       if (this.state === PROMISE_STATE2.PENDING) {
// //         this.callback.push(() => resolve(onFulfilled(this.result)));
// //         this.callback.push(() => reject(onRejected(this.result)));
// //       }
// //     });
// //   }
// // }
// // const mp = new MyPromise2((resolve, reject) => {
// //   // reject("出错了");
// //   setTimeout(() => {
// //     resolve("erha");
// //     // reject("出错了");
// //   });
// // });

// // mp.then(
// //   (result) => {
// //     console.log("then res1:", result);
// //     return "res1";
// //   },
// //   (e) => {
// //     console.log("e=>", e);
// //   }
// // ); */

// // /**
// //  * 解构数组
// //  * @param targetArray {Array} 目标数组
// //  * @param formater {String} 解构格式
// //  * @return {Object} 结果对象
// //  */
// // /* var destructuringArray = function (targetArray, formater) {
// //   formater = formater.replace(/[\[\]]/g, "");

// //   var formaterArray = formater.split(",");

// //   if (targetArray.length !== formaterArray.length) {
// //     throw new Error("Target array and formater length mismatch");
// //   }

// //   var result = {};

// //   var destructure = function (arr, format, res) {
// //     for (var i = 0; i < format.length; i++) {
// //       if (Array.isArray(format[i])) {
// //         destructure(arr[i], format[i], res);
// //       } else {
// //         res[format[i]] = arr[i];
// //       }
// //     }
// //   };

// //   destructure(targetArray, formaterArray, result);

// //   return result;
// // };
// // var targetArray = [1, [2, 3], 4];
// // var formater = "[a,[b],c]";
// // // 运行
// // console.log(destructuringArray(targetArray, formater), "1"); */

// // // import React, { useEffect } from "react";

// // // const InfiniteScroll = () => {
// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const triggerElement = document.getElementById("loadMoreTrigger");

// // //       if (triggerElement) {
// // //         const rect = triggerElement.getBoundingClientRect();

// // //         // 如果触发元素进入视口底部，执行加载逻辑
// // //         if (rect.bottom <= window.innerHeight) {
// // //           // 执行加载更多数据的操作
// // //           loadMoreData();
// // //         }
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);

// // //     return () => {
// // //       window.removeEventListener("scroll", handleScroll);
// // //     };
// // //   }, []);

// // //   const loadMoreData = () => {
// // //     // 执行加载更多数据的逻辑
// // //     console.log("加载更多数据");
// // //   };

// // //   return (
// // //     <div>
// // //       {/* 加载更多触发元素 */}
// // //       <div
// // //         id="loadMoreTrigger"
// // //         style={{ height: "50px", background: "lightblue" }}
// // //       >
// // //         加载更多
// // //       </div>

// // //       {/* 显示已加载的数据 */}
// // //       {/* ... */}
// // //     </div>
// // //   );
// // // };

// // // export default InfiniteScroll;

// // // 实现一个Promise.all
// // // function myPromiseAll(promises) {
// // //   if (!Array.isArray(promises)) {
// // //     return new Error("must array");
// // //   }
// // //   return new Promise((resolve, reject) => {
// // //     let result = [];
// // //     let finishedCount = 0;
// // //     const finishedFn = () => {
// // //       if (result.length === promises.length) {
// // //         resolve(result);
// // //       }
// // //     };
// // //     promises.forEach((promise, index) => {
// // //       promise
// // //         .then((res) => {
// // //           result[index] = res;
// // //           finishedCount += 1;
// // //           finishedFn();
// // //         })
// // //         .catch((e) => {
// // //           reject(e);
// // //         });
// // //     });
// // //   });
// // // }
// // // const promise1 = Promise.resolve(1);
// // // const promise2 = Promise.resolve(2);
// // // const promise3 = Promise.resolve(3);
// // // let promiseArr = [promise1, promise2, promise3];

// // // myPromiseAll(promiseArr)
// // //   .then((res) => console.log("res=>", res))
// // //   .catch((e) => console.error(e));

// // // 设计一个三秒的Promise，如果我超时了，直接丢弃咋做到？
// // function thirdPromise() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       reject("timeout 3s");
// //     }, 3000);
// //   });
// // }

// // function getData() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       resolve("get data");
// //     }, 5000);
// //   });
// // }

// // Promise.race([thirdPromise(), getData()])
// //   .then((res) => console.log("res=>", res))
// //   .catch((e) => console.error("e=>", e));

// // // 如何实现并发请求数量控制？
// // /* async function fetchData(url) {
// //   // 模拟异步请求
// //   return new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve(`Data from ${url}`);
// //     }, 2000);
// //   });
// // }

// // async function fetchWithConcurrency(urls, concurrency) {
// //   const results = [];
// //   const executing = [];

// //   for (const url of urls) {
// //     const task = fetchData(url).then((result) => {
// //       results.push(result);
// //     });

// //     executing.push(task);

// //     if (executing.length >= concurrency) {
// //       await Promise.race(executing);
// //     }
// //   }

// //   await Promise.all(executing);

// //   return results;
// // }

// // const urlsToFetch = ["url1", "url2", "url3", "url4", "url5"];
// // const concurrentRequests = 3;

// // fetchWithConcurrency(urlsToFetch, concurrentRequests)
// //   .then((results) => {
// //     console.log("Results:", results);
// //   })
// //   .catch((error) => {
// //     console.error("Error:", error);
// //   });
// //  */

// // // 实现一个函数，将请求分批发送出去，
// // async function sendBatchedRequests(requests, batchSize) {
// //   for (let i = 0; i < requests.length; i += batchSize) {
// //     const batch = requests.slice(i, i + batchSize);
// //     await sendBatch(batch);
// //   }
// // }

// // async function sendBatch(batch) {
// //   const promises = batch.map((request) => {
// //     // 使用 fetch API 发送请求
// //     return fetch(request.url, {
// //       method: request.method || "GET",
// //       body: JSON.stringify(request.data),
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then((response) => response.json())
// //       .catch((error) => console.error("Error:", error));
// //   });

// //   // 等待所有请求完成
// //   await Promise.all(promises);
// // }

// // // 使用示例
// // const requests = [
// //   { url: "https://api.example.com/1", method: "GET" },
// //   { url: "https://api.example.com/2", method: "POST", data: { key: "value" } },
// //   // 添加更多请求...
// // ];

// // sendBatchedRequests(requests, 2);

// // // 原数组[[0],[2,3,4],1,[1,[2,3]]]，写一段代码，将该数组扁平化，输出[0,2,3,4,1,1,2,3]
// // // const expendFn = (arr) => {
// // //   return arr.reduce((total, item) => {
// // //     if (Array.isArray(item)) {
// // //       total.push(...expendFn(item));
// // //     } else {
// // //       total.push(item);
// // //     }
// // //     return total;
// // //   }, []);
// // // };

// // // let expendArr = [[0], [2, 3, 4], 1, [1, [2, 3]]];
// // // console.log(expendFn(expendArr));

// // // 手写一个promise.all
// // /* function myPromiseAll1(promises) {
// //   return new Promise((resolve, reject) => {
// //     if (!Array.isArray(promises)) {
// //       reject(new Error("must be array"));
// //     }
// //     let results = [];
// //     let completePromise = 0;

// //     promises.forEach((promise, index) => {
// //       Promise.resolve(promise)
// //         .then((res) => {
// //           results[index] = res;
// //           completePromise++;

// //           if (completePromise === promises.length) {
// //             resolve(results);
// //           }
// //         })
// //         .catch((e) => reject(e));

// //       if (results.length === 0) {
// //         resolve(results);
// //       }
// //     });
// //   });
// // }
// // const prom1 = Promise.resolve(1);
// // const prom2 = Promise.resolve(2);
// // const prom3 = Promise.resolve(3);
// // // const prom3 = Promise.reject("errorrr");

// // myPromiseAll1([prom1, prom2, prom3])
// //   .then((res) => console.log("res=>", res))
// //   .catch((e) => console.error("e=>", e));
// //  */

// // // 防抖
// // /* function debounceFn(wait, func) {
// //   let timer;
// //   return function (...args) {
// //     clearTimeout(timer);
// //     timer = setTimeout(() => {
// //       func.apply(this, args);
// //     }, wait);
// //   };
// // }

// // function fn() {
// //   console.log("1");
// // }
// // let res = debounceFn(2000, fn);
// // // let input = document.querySelector("input");
// // let btn = document.querySelector("button");
// // // btn.addEventListener("click", res); */

// // // 节流
// // /* function thr(wait, func) {
// //   let start = false;
// //   let timer;
// //   return function (...args) {
// //     if (!start) {
// //       start = true;
// //       clearTimeout(timer);
// //       timer = setTimeout(() => {
// //         func.apply(this, args);
// //         start = false;
// //       }, wait);
// //       // start = false;
// //     }
// //     // start = false;
// //   };
// // }
// // function fn2() {
// //   console.log("2");
// // }

// // let res2 = thr(2000, fn2);
// // window.addEventListener("resize", res2); */

// // //用promise写个Lazyman函数，返回的对象提供eat和sleep两个函数，支持链式调用。
// // /* function lazyman(name) {
// //   console.log(name);
// //   let fn = Promise.resolve();

// //   function eat(food) {
// //     fn = fn.then(() => {
// //       return new Promise((resolve) => {
// //         console.log(food);
// //         resolve();
// //       });
// //     });
// //     return this;
// //   }

// //   function sleep(time) {
// //     fn = fn.then(() => {
// //       return new Promise((resolve) => {
// //         setTimeout(() => {
// //           console.log(time);
// //           resolve();
// //         }, time);
// //       });
// //     });
// //     return this;
// //   }

// //   return { eat, sleep };
// // }

// // lazyman("erha").eat("apple").sleep(2000).eat("banana").sleep(2000); */

// // /* const lazyman = function (name) {
// //   console.log(name);
// //   return {
// //     executeChain: Promise.resolve(),
// //     eat,
// //     sleep,
// //   };
// // };

// // const eat = function (food) {
// //   this.executeChain = this.executeChain.then(
// //     () =>
// //       new Promise((resolve) => {
// //         console.log(food);
// //         resolve();
// //       })
// //   );
// //   return this;
// // };

// // const sleep = function (time) {
// //   this.executeChain = this.executeChain.then(
// //     () =>
// //       new Promise((resolve) => {
// //         setTimeout(() => {
// //           resolve();
// //           console.log(time);
// //         }, time);
// //       })
// //   );
// //   return this;
// // };

// // // lazyman("erha").eat("apple").sleep("2000").eat("pig");
// // lazyman("erha").eat("apple").sleep(2000).eat("banana").sleep(2000); */

// // // Promise.any

// // function myPromiseAny(promises) {
// //   return new Promise((resolve, reject) => {
// //     if (!Array.isArray(promises)) {
// //       return reject(new Error("must be array"));
// //     }
// //     let results = [];
// //     let complete = 0;
// //     promises.forEach((pro, index) => {
// //       Promise.resolve(pro)
// //         .then((res) => {
// //           resolve(res);
// //         })
// //         .catch((e) => {
// //           results[index] = e;
// //           complete++;
// //           if (complete === promises.length) {
// //             reject(results);
// //           }
// //         });
// //     });
// //   });
// // }
// // const promises2 = [Promise.reject(1), Promise.reject(2), Promise.reject(3)];
// // myPromiseAny(promises2)
// //   .then((res) => console.log("res=>", res))
// //   .catch((e) => console.error("e=>", e));

// // // ==============================================

// // function myPromiseAny3(promises) {
// //   return new Promise((resolve, reject) => {
// //     if (!Array.isArray(promises)) {
// //       return reject(new Error("must be array"));
// //     }

// //     let results = [];
// //     let complete = 0;

// //     promises.forEach((pro, index) => {
// //       Promise.resolve(pro)
// //         .then((value) => {
// //           resolve(value);
// //         })
// //         .catch((reason) => {
// //           results[index] = reason;
// //           complete++;
// //           if (complete === promises.length) {
// //             reject(results);
// //           }
// //         });
// //     });
// //   });
// // }

// // // const promises3 = [Promise.reject(1), Promise.reject(2), Promise.reject(3)];

// // // myPromiseAny3(promises3)
// // //   .then((res) => console.log("res=>", res))
// // //   .catch((e) => console.error("e=>", e));

// // // compose函数，用于将多个函数组合成一个新的函数
// // /* const compose = (funs) => {
// //   return function (args) {
// //     return funs.reduce((total, fun) => {
// //       return fun(total);
// //     }, args);
// //   };
// // }; */
// // // 简写：
// // /* const compose1 = (funs) => (args) =>
// //   funs.reduce((total, fun) => fun(total), args);
// // const fn1 = (a) => a + 1;
// // const fn2 = (a) => a + 2;
// // const fn3 = (a) => a + 3;
// // const funs = [fn1, fn2, fn3];
// // console.log(compose(funs)(3));

// // function debounce1(func, wait, immediate) {
// //   let timer;
// //   return function (...args) {
// //     clearTimeout(timer);
// //     if (!immediate) {
// //       timer = setTimeout(() => {
// //         func.apply(this, args);
// //       }, wait);
// //     }
// //     if (immediate && !timer) {
// //       func.apply(this, args);
// //     }
// //   };
// // }
// // let fn = () => console.log("1");
// // let res4 = debounce1(fn, 2000, true);
// // window.addEventListener("resize", res4);
// // res4(); */

// // function thief(nums) {
// //   if (nums.length === 0) {
// //     return 0;
// //   }

// //   if (nums.length === 1) {
// //     return nums[0];
// //   }

// //   let dp = new Array(nums.length);
// //   dp[0] = nums[0];
// //   dp[1] = Math.max(nums[0], nums[1]);

// //   for (let i = 2; i < nums.length; i++) {
// //     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
// //   }

// //   return dp[nums.length - 1];
// // }

// // console.log(thief([2, 4, 5, 1, 3]));
// // //
// // function thiefWithRoute(nums) {
// //   if (nums.length === 0) {
// //     return { totalAmount: 0, route: [] };
// //   }

// //   if (nums.length === 1) {
// //     return { totalAmount: nums[0], route: [0] };
// //   }

// //   let dp = new Array(nums.length);
// //   dp[0] = { totalAmount: nums[0], route: [0] };
// //   dp[1] =
// //     nums[1] > nums[0]
// //       ? { totalAmount: nums[1], route: [1] }
// //       : { totalAmount: nums[0], route: [0] };

// //   for (let i = 2; i < nums.length; i++) {
// //     if (dp[i - 1].totalAmount > dp[i - 2].totalAmount + nums[i]) {
// //       dp[i] = {
// //         totalAmount: dp[i - 1].totalAmount,
// //         route: dp[i - 1].route.slice(),
// //       };
// //     } else {
// //       dp[i] = {
// //         totalAmount: dp[i - 2].totalAmount + nums[i],
// //         route: dp[i - 2].route.concat(i),
// //       };
// //     }
// //   }

// //   return dp[nums.length - 1];
// // }

// // const result = thiefWithRoute([2, 4, 5, 1, 3]);
// // console.log(`Total Amount: ${result.totalAmount}`);
// // console.log(`Route: ${result.route}`);
// // //
// // const thiefMax = (moneyArr) => {
// //   if (moneyArr.length === 0) {
// //     return { maxMoney: 0, route: [] };
// //   }
// //   if (moneyArr.length === 1) {
// //     return { maxMoney: moneyArr[0], route: [0] };
// //   }
// //   let dp = [];
// //   dp[0] = { maxMoney: moneyArr[0], route: [0] };
// //   dp[1] =
// //     moneyArr[1] > moneyArr[0]
// //       ? { maxMoney: moneyArr[1], route: [1] }
// //       : { maxMoney: moneyArr[0], route: [0] };

// //   for (let i = 2; i < moneyArr.length; i++) {
// //     if (dp[i - 1].maxMoney > dp[i - 2].maxMoney + moneyArr[i]) {
// //       dp[i] = {
// //         maxMoney: dp[i - 1].maxMoney,
// //         route: dp[i - 1].route.slice(),
// //       };
// //     } else {
// //       dp[i] = {
// //         maxMoney: dp[i - 2].maxMoney + moneyArr[i],
// //         route: dp[i - 2].route.concat(i),
// //       };
// //     }
// //   }
// //   return dp[moneyArr.length - 1];
// // };
// // const result1 = thiefMax([2, 4, 5, 1, 3]);
// // console.log(`Total Amount1: ${result1.maxMoney}`);
// // console.log(`Route1: ${result1.route}`);
// // //
// // function quickSort(arr) {
// //   if (arr.length <= 1) {
// //     return arr;
// //   }
// //   const pivotIndex = Math.floor(arr.length / 2);
// //   const pivot = arr[pivotIndex];
// //   const left = [];
// //   const right = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (i === pivotIndex) {
// //       continue;
// //     }
// //     if (arr[i] < pivot) {
// //       left.push(arr[i]);
// //     } else {
// //       right.push(arr[i]);
// //     }
// //   }
// //   return quickSort(left).concat(pivot, quickSort(right));
// // }

// // console.log("quickSort=>", quickSort([2, 4, 5, 1, 3]));

// // // function arrayToTree(arr, parentId = null) {
// // //   const tree = [];

// // //   for (let i = 0; i < arr.length; i++) {
// // //     const node = arr[i];

// // //     if (node.parentId === parentId) {
// // //       const children = arrayToTree(arr, node.id); // Pass parentId here

// // //       if (children.length) {
// // //         node.children = children;
// // //       }

// // //       tree.push(node);
// // //     }
// // //   }

// // //   return tree;
// // // }

// // // console.log("arrayToTree=>", arrayToTree([2, 4, 5, 1, 3]));

// // 1. 请实现一个函数，将下面树状结构的 json 对象中所有的 icon 属性删除，要求在不改变原来 json 值的前提下返回新的对应 json 对象（请注意该树状 json 深度未知）

// function removeIconProperty(obj) {
//   if (Array.isArray(obj)) {
//     // 如果是数组，递归处理数组中的每个元素
//     return obj.map((item) => removeIconProperty(item));
//   } else if (typeof obj === "object" && obj !== null) {
//     // 如果是对象，递归处理对象中的每个属性
//     const newObj = {};
//     for (const key in obj) {
//       if (key !== "icon") {
//         newObj[key] = removeIconProperty(obj[key]);
//       }
//     }
//     return newObj;
//   } else {
//     // 如果是基本类型或者 null，直接返回
//     return obj;
//   }
// }

// // 示例用法
// const originalJson = [
//   {
//     id: "huuEQ5Pv",
//     parentId: "0",
//     name: "菜单1",
//     subMenus: [
//       {
//         id: "R1PRWTsS",
//         parentId: "huuEQ5Pv",
//         name: "菜单2",
//         route: "/s1",
//         type: "menu",
//         icon: "123",
//         subMenus: [
//           // ...
//         ],
//       },
//       {
//         id: "R2PRWTsxx",
//         parentId: "huuEQ5Pv",
//         name: "菜单3",
//         route: "/s2",
//         type: "menu",
//         icon: "",
//       },
//       // ...
//     ],
//   },
//   // ...
// ];

// const modifiedJson = removeIconProperty(originalJson);
// console.log("modifiedJson=>", modifiedJson);

// // 1. 请用Promise实现函数，要求每 5 秒获取一个随机数，如果该随机数小于 5，则函数立即结束，如果大于5，则 60 秒后函数运行结束
// function getNumberRandom() {
//   return new Promise((resolve, reject) => {
//     let timer = setInterval(() => {
//       let num = Math.random() * 10;
//       console.log("num=>", num);
//       if (num < 5) {
//         clearInterval(timer);
//         reject("num<5");
//       }
//     }, 2000);

//     setTimeout(() => {
//       resolve("num>5");
//     }, 3000);
//   });
// }
// getNumberRandom()
//   .then((res) => console.log("res1=>", res))
//   .catch((e) => console.error("e1=>", e));
// // 1. 实现一个持久化 function 的自定义 Hook： useMemoizedFn，解决 Hook 中的 dep 引起的闭包问题，同时保证函数调用的准确性与实时性，使用方式如下：
// // const [name, setName] = useState('a');
// // const memorizedFn = useMemoizedFn(() => {
// //   console.log('name', name);
// // });

// // memorizedFn(); // name a

// // const toDeleteIconFn = (obj) => {
// //   if (Array.isArray(obj)) {
// //     return obj.map((o) => toDeleteIconFn(o));
// //   } else if (typeof obj === "object" && obj !== null) {
// //     let newObj = {};
// //     for (let key in obj) {
// //       if (key !== "icon") {
// //         newObj[key] = toDeleteIconFn(obj[key]);
// //       }
// //     }
// //     return newObj;
// //   } else {
// //     // 如果是基本类型，直接返回
// //     return obj;
// //   }
// // };
// // console.log("1", toDeleteIconFn(originalJson));

/**
 *
 * 问题：请实现 p3 函数，合并 p1, p2 2个 Promise 函数为一个异步返回。并使p3能正确执行输出（张三 18）
 */

// function p1() {
//   return Promise.resolve("张三");
// }

// function p2() {
//   return Promise.resolve("18");
// }

// function p3(promises) {
//   // ...请完成函数主体
//   return new Promise((resolve, reject) => {
//     if (!Array.isArray(promises)) {
//       reject(new Error("be array"));
//     }
//     let result = [];
//     let com = 0;

//     promises.forEach((pro, index) => {
//       Promise.resolve(pro)
//         .then((res) => {
//           result[index] = res;
//           com++;

//           if (com === promises.length) {
//             resolve(result);
//           }
//         })
//         .catch((e) => reject(e));
//     });
//   });
// }
// const promises = [p1, p2];
// p3(promises).then((data) => {
//   console.log(data.name, data.age); // 张三 18
// });

// /*
//  * 题目：编写函数`versionCompare(v1, v2)` ，比较两个版本大小, v1 > v2 返回1; v1 < v2 返回-1; 相等返回0
//  * 版本格式固定xxx.xxx.xxx (且都是数值类型)
//  */
// function versionCompare(v1, v2) {
//   if (v1 === v2) {
//     return 0;
//   }
//   // let vison1=Number(v1);
//   // let vison2=Number(v2);
//   // v1.join(".")
//   console.log("1", v1.split());
// }

// versionCompare("0.1.0", "0.1.2"); // => -1 v1 < v2
// versionCompare("0.10.0", "0.1.0"); // => 1 v1 > v2
// versionCompare("0.1.0", "0.1.0"); // => 0

// /**
//  * 题目: 实现简单的事件处理器 EventEmitter
//  * on 方法用于注册事件监听器，emit 方法用于触发事件并传递数据，off 方法用于移除指定事件的所有监听器
//  */
// class EvenEmitter {
//   // 代码逻辑区
//   on(value, cb) {

//   }
// }

// const em = new EvenEmitter();
// em.on("abc", function (event) {
//   console.log(event); //==> 111
// });
// em.emit("abc", 111);
// em.off("abc");

let obj1 = "abc";
let obj2 = 1;
let obj3 = { name: "abc" };
let obj4 = () => {
  console.log("abc");
};
let obj5 = false;
let obj6 = undefined;
let obj7 = null;
let obj8 = [1, 2, 3];
// console.log(Object.prototype.toString.call(obj1));
// console.log(Object.prototype.toString.call(obj2));
// console.log(Object.prototype.toString.call(obj3));
// console.log(Object.prototype.toString.call(obj4));
// console.log(Object.prototype.toString.call(obj5));
// console.log(Object.prototype.toString.call(obj6));
// console.log(Object.prototype.toString.call(obj7));
// console.log(Object.prototype.toString.call(obj8));
let obj9 = [];
// Object.defineProperty(obj9, Symbol.toStringTag, { value: "Number" });
// console.log(Object.prototype.toString.call(obj9));
// console.log("obj9=>", obj9);
console.log("1=>", Object.prototype.toString.call(obj9));
// const obj10 = {};

// //定义属性
// Object.defineProperty(obj10, Symbol.toStringTag, { value: "Number" });

// //查看自定义类型
// console.log("obj10", Object.prototype.toString.call(obj10)); //'[object Module]'改变了类型为Module
