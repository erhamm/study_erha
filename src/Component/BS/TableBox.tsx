import React from "react";
import { Table } from "antd";

enum Type {
  enum, // 枚举型
  date, // 日期型，单位为毫秒
  dateRange, // 日期范围，单位为毫秒
  string, // 简单字符串
}

// schema配置项含义
interface Ischema {
  dataIndex: string; // 字段key，对应数据源中的哪个数据
  label: string; // 列头显示文字
  type: Type; // 列展示类型，具体类型见下enum Type
  enums: { label: string; value: string }[]; // 枚举类型专用，枚举类型label和value的映射关系
}

// schema
const schema: Ischema[] = [
  {
    dataIndex: "field1",
    type: Type.enum,
    label: "枚举",
    enums: [
      {
        label: "值为-1",
        value: "-1",
      },
      {
        label: "值为0",
        value: "0",
      },
      {
        label: "值为1",
        value: "1",
      },
      {
        label: "值为2",
        value: "2",
      },
    ],
  },
  {
    dataIndex: "field2",
    type: Type.date,
    label: "日期",
    enums: [],
  },
  {
    dataIndex: "field3",
    type: Type.dateRange,
    label: "日期范围",
    enums: [],
  },
  {
    dataIndex: "field4",
    type: Type.string,
    label: "简单字符串",
    enums: [],
  },
];

// 数据源
const dataSource = [
  {
    field1: 1,
    field2: 1711027564449,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串",
  },
  {
    field1: -1,
    field2: 1711123199000,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串2",
  },
];

const TableBox: React.FC = () => {
  // 日期格式转换
  const formatDate = (date: number): string => {
    const formattedDate = new Date(date).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate.replace(/\//g, "/");
  };

  // 数据源转换
  const convertDataSource = dataSource.map((item) => {
    return {
      ...item,
      field1: `值为${item.field1}`,
      field2: formatDate(item.field2),
      field3: item.field3.map((date: number) => formatDate(date)).join(" - "),
    };
  });
  // interface longLength {
  //   length: number;
  // }
  // function loggingIdentity<T extends longLength>(arg: T): T {
  //   console.log(arg.length);
  //   return arg;
  // }
  // loggingIdentity([1, 2]);
  // interface Fn2face<T, number> {
  //   arg: T;
  //   b: number;
  // }
  // interface Myinterface {
  //   data: string;
  // }
  // function fn2<T extends Myinterface>(arg: T, b: number): T {
  //   return arg;
  // }
  // console.log(fn2({ data: "sttr" }, 1));
  // let arr = [1, 2, 3];
  // let res = arr.slice(1); //2,3
  // console.log("arr=>", arr);
  // console.log("res=>", res);
  // let str = "erha";
  // let res2 = str.split("");
  // console.log("arr=>", str);
  // console.log("res2=>", res2);

  // 1. 利用 reduce 给数组实现一个 myMap 方法，和 map 一样的效果
  // Array.prototype.myMap = function (callback) {
  //   return this.reduce((acc, cur) => {
  //     acc.push(callback(cur));
  //     return acc;
  //   }, []);
  // };
  // let arr = [1, 2, 3];
  // let res = arr.myMap((item) => item + 1);
  // console.log("arr=>", arr);
  // console.log("res2=>", res);

  // 通过await和setTimeout来设计一个函数使其完成延迟一秒的功能
  // function myFun(): Promise<void> {
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 1000);
  //   });
  // }
  // async function myFun2() {
  //   console.log("1");
  //   await myFun();
  //   console.log("2");
  // }
  // myFun2();

  // 数组扁平化
  // let arr = [1, 2, [3, [4, 5]]];
  // function myFlat(arr) {
  //   return arr.reduce((acc, cru) => {
  //     if (Array.isArray(cru)) {
  //       acc.push(...myFlat(cru));
  //     } else {
  //       acc.push(cru);
  //     }
  //     return acc;
  //   }, []);
  // }
  // let res = myFlat(arr);
  // console.log("arr=>", arr);
  // console.log("res=>", res);

  // 让实现一个输入123456789返回123，456，789的函数
  function myFn(a) {
    let b = a.match(/\d{1,3}/g);
    console.log("b=>", b);
    if (!b) {
      return a;
    }
    return b.join(",");
  }
  console.log(myFn("123456789"));

  return (
    <Table
      columns={schema.map((column) => ({
        title: column.label,
        dataIndex: column.dataIndex,
        key: column.dataIndex,
      }))}
      dataSource={convertDataSource.map((data, index) => ({
        ...data,
        key: index,
      }))}
    />
  );
};
export default TableBox;
