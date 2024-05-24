/* 你是专业小偷，今天你打算偷遍一整条街的房子，每间房子都有不同数量的钱可以偷，但是房子之间有报警系统，如果你连偷两间相邻的房子，就会引来警察。

这里有一个List，每个元素都代表这间房子内可以偷到的钱，你要如何安排计划才能偷到最多的钱而且不会惊动警察。

如：[2,4,5,1,3]，最多可以偷到 2+5+3 = 10，因为4+5+3 = 12 虽然可以拿到比较多钱，但是会被警察抓。 */

/* const stealMax = (arr) => {
  let len = arr.length;
  if (len === 0) {
    return null;
  }
  if (len === 1) {
    return { totalLikes: arr[0], selectedHouse: [1] };
  }
  let dp = [];
  let selected = new Array(len).fill(false);
  dp[0] = arr[0];
  selected[0] = true;

  if (arr[1] > arr[0]) {
    dp[1] = arr[1];
    selected[1] = true;
  } else {
    dp[1] = arr[0];
    selected[1] = false;
  }
  for (let i = 2; i < len; i++) {
    if (dp[i - 1] > arr[i] + dp[i - 2]) {
      dp[i] = dp[i - 1];
      selected[i] = false;
    } else {
      dp[i] = arr[i] + dp[i - 2];
      selected[i] = true;
    }
  }
  const selectedHouse = [];
  let i = len - 1;
  while (i >= 0) {
    if (selected[i]) {
      selectedHouse.unshift(i + 1);
      i -= 2;
    } else {
      i -= 1;
    }
  }
  const totalLikes = dp[len - 1];
  return { totalLikes, selectedHouse, selected };
};

let stealArr = [5, 2, 1, 2, 3, 5, 8];
let res = stealMax(stealArr);
// let res = maxLikesSelection(7, stealArr);
console.log("res=>", res); //[1,4,5] 10 */
const stealMax = (arr) => {
  let len = arr.length;
  if (len === 0) {
    return { max: 0, selectArr: [] };
  }
  if (len === 1) {
    return { max: arr[0], selectArr: arr[0] };
  }

  let dp = [];
  let selected = new Array(len).fill(false);
  dp[0] = arr[0];
  selected[0] = true;

  dp[1] = Math.max(arr[0], arr[1]);
  selected[1] = arr[0] > arr[1] ? false : true;

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], arr[i] + dp[i - 2]);
    selected[i] = dp[i - 1] > arr[i] + dp[i - 2] ? false : true;
  }

  const selectHouse = [];
  let i = len - 1;
  while (i >= 0) {
    if (selected[i]) {
      selectHouse.unshift(i + 1);
      i -= 2;
    } else {
      i -= 1;
    }
  }
  const max = dp[len - 1];
  return { selectHouse, max, selected };
};

let stealArr = [5, 2, 1, 2, 3, 5, 8];
let res = stealMax(stealArr);
// console.log("res=>", res);
/*  实现一个debounce(func, wait, immediate)函数，该函数能够在高频调用(比如window.resize)的时候只执行最后一次调用（如下 250ms 内只能调用一次） */
/* function debounce(func, wait, immediate) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    if (!immediate) {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
    if (immediate && !timer) {
      func.apply(this, args);
    }
  };
}
let res = debounce(
  function () {
    console.log("1");
  },
  2500,
  false
);

window.addEventListener("resize", res); */

//节流函数：在一段时间内，该函数无论执行多少次，都只会按照固定频率执行，防抖函数：在触发函数后的一段时间内，如果没有再被触发，则执行函数，如果该事件内再被触发，则重新计时。
/* function throttle(timeout, func) {
  let isRun = true;
  return function (...args) {
    if (!isRun) {
      return;
    }
    isRun = false;
    setTimeout(() => {
      func.apply(this, args);
      isRun = true;
    }, timeout);
  };
}
let res = throttle(2000, function () {
  console.log("123");
});
window.addEventListener("resize", res); */

// 数组扁平化
/* const arrs = [1, 2, [3, 4, [5, 6], 7]];
const toOpen = (arrs) => {
  return arrs.reduce((total, item) => {
    if (Array.isArray(item)) {
      total.push(...toOpen(item));
    } else {
      total.push(item);
    }
    return total;
  }, []);
};
let res = toOpen(arrs);
console.log("res=>", res); */

// 深拷贝
/* const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
};

let obj = {
  name: "erha",
  age: 22,
  hello: {
    word: "mm",
  },
};
let res = deepClone(obj);
console.log("res1=>", res);

res.hello.word = "ppp";
console.log("obj=>", obj);
console.log("res2=>", res);
 */

// 手写一个promise
function myPromise(exe) {
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = "pending";
  self.fulfilledCb = [];
  self.rejectedCb = [];

  const resolve = (value) => {
    if (self.status === "pending") {
      self.status = "fulfilled";
      self.value = value;
      self.fulfilledCb.forEach((cb) => cb(self.value));
    }
  };

  const reject = (reason) => {
    if (self.status === "pending") {
      self.status = "rejected";
      self.reason = reason;
      self.rejectedCb.forEach((cb) => cb(self.reason));
    }
  };

  try {
    exe(resolve, reject);
  } catch (e) {
    reject(e);
  }
} 

myPromise.prototype.then = function (resolved, rejected) {
  let self = this;
  return new myPromise((resolve, reject) => {
    if (self.status === "fulfilled") {
      try {
        const result = resolved ? resolved(self.value) : self.value;
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }
    if (self.status === "rejected") {
      try {
        const result = rejected ? rejected(self.reason) : self.reason;
        resolve(result);
      } catch (e) {
        reject(e);
      }
      rejected(self.reason);
    }
    if (self.status === "pending") {
      if (resolved) {
        self.fulfilledCb.push((value) => {
          try {
            const result = resolved(value);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        self.fulfilledCb.push(resolve);
      }
      if (rejected) {
        self.rejectedCb.push((reason) => {
          try {
            const result = rejected(reason);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      } else {
        self.rejectedCb.push(reject);
      }
    }
  });
};

/* myPromise.prototype.all = function (promises) {
  return new myPromise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    let results = [];
    let count = 0;

    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          results[index] = value;
          count++;

          if (count === promise.length) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
}; */

// 手写一个bind
/* function myBind(func, contexts, ...args) {
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

// 手写一个call
/* function myCall(func, context, ...args) {
  context = context || window;
  context.fn = func;
  let res = context.fn(args);
  delete context.fn;
  return res;
}

function greeting(name) {
  return `hello,${name},I'm ${this.firstname}`;
}

const person = {
  firstname: "erha",
};

let res1 = myCall(greeting, person, "pppp");
console.log("res1=>", res1); */

function debounce1(func, wait, immediate) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    if (!immediate) {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
    if (immediate && !timer) {
      func.apply(this, args);
    }
  };
}
let fn = () => console.log("1");
let res4 = debounce1(fn, 2000, false);
// window.addEventListener("resize", res4);
// res4();

function throttle1(func, timeout) {
  let isRun = false;
  let timer;
  return function (...args) {
    if (!isRun) {
      isRun = true;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
        isRun = false;
      }, timeout);
    }
  };
}
let res5 = throttle1(fn, 2000);
window.addEventListener("resize", res5);

// const Promise=function(){
//   return new Promise()
// }
console.log(1);
setTimeout(() => {
  console.log(2);
});
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() =>
  setTimeout(() => {
    console.log(4);
  })
);
Promise.resolve().then(() => console.log(5));
setTimeout(() => {
  console.log(6);
});
console.log(7);
