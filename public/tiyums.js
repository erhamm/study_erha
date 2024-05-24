// 实现一个方法，检查对象一是否是对象二的子集。
function check(a, b) {
  for (let key in a) {
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      if (!check(a[key], b[key])) {
        return false;
      }
    } else if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
const obj = {
  a: 0,
  c: "",
  d: true,
  e: {
    f: 1,
    e: { e: 0, f: 2 },
  },
};
// console.log("2", check({ a: 0 }, obj)); //true

// 第一种方法：
/* function checkSubset(subset, superset) {
  for (const key in subset) {
    if (typeof subset[key] === 'object' && typeof superset[key] === 'object') {
      if (!checkSubset(subset[key], superset[key])) {
        return false;
      }
    } else if (subset[key] !== superset[key]) {
      return false;
    }
  }
  return true;
}

const obj = {
  a: 0,
  c: "",
  d: true,
  e: {
    f: 1,
    e: {
      e: 0,
      f: 2,
    },
  },
};

console.log(checkSubset({ a: 0 }, obj)); // true
 */

//第二种方法：
/* // 安装 lodash
// npm install lodash

// 引入 isEqual
// 使用 _.pick 和 _.keys 的组合的确是为了找出两个对象在指定键上的相同部分。
//通过这个过程，我们可以获取两个对象在指定键上的相同键值对，
//然后使用 isEqual 来比较这些相同键值对的值是否相等，从而判断子集关系。
const isEqual = require('lodash/isEqual');

function checkSubset(subset, superset) {
  return isEqual(subset, _.pick(superset, _.keys(subset)));
}

const obj = {
  a: 0,
  c: "",
  d: true,
  e: {
    f: 1,
    e: {
      e: 0,
      f: 2,
    },
  },
};

console.log(checkSubset({ a: 0 }, obj)); // true
 */

//实现一个url的get参数解析函数，返回一个key>value形式的object，

function querySearch1(url) {
  let arr = url.split("#")[0].split("?")[1].split("&");
  let str = {};
  arr.forEach((item) => {
    const [key, value] = item.split("=");
    str[key] = value || "";
  });

  return str;
}

// console.log(querySearch1("http://sample.com/?a=1&b=2&c=xx&d#hash"));

// 输出：｛a:”1”,b:”2”,c:”xx”,d:””}

/* function querySearch(url) {
  const queryString = url.split("?")[1];
  if (!queryString) return {};

  const paramsArray = queryString.split("&");
  const paramsObject = {};

  paramsArray.forEach((param) => {
    const [key, value] = param.split("=");
    paramsObject[key] = value || ""; // If no value, set it to an empty string
  });

  return paramsObject;
}

const result = querySearch("http://sample.com/?a=1&b=2&c=xx&d#hash");
console.log("result=>", result); // { a: "1", b: "2", c: "xx", d: "" } */
const str = "a,b,c,d";
const arrayFromSplit = str.split(",");
// console.log(arrayFromSplit); // ["a", "b", "c", "d"]


function myJSONStringify(value) {
  let result;

  // 非复杂类型的直接转换
  if (typeof value === 'string') {
    result = `"${value.replace(/(["\\])/g, '\\$1')}"`;
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    result = String(value);
  }

  // 如果是undefined，则忽略（默认JSON.stringify()会忽略undefined）
  if (value === undefined) {
    return undefined;
  }

  // 处理对象和数组
  if (Array.isArray(value)) {
    result = '[';
    for (let i = 0; i < value.length; i++) {
      if (i > 0) {
        result += ',';
      }
      result += myJSONStringify(value[i]);
    }
    result += ']';
  } else if (typeof value === 'object' && value !== null) {
    result = '{';
    let first = true;
    for (let key in value) {
      if (!value.hasOwnProperty(key)) continue; // 忽略原型链上的属性
      if (!first) {
        result += ',';
      }
      first = false;
      result += `"${key}":${myJSONStringify(value[key])}`;
    }
    result += '}';
  }

  return result;
}

// 示例用法
const obj2 = {
  name: "Alice",
  age: 30,
  pets: ["Dog", "Cat"],
  details: {
    gender: "Female",
    hobbies: ["Reading", "Hiking"]
  }
};

console.log("myJSONStringify=>",myJSONStringify(obj2));