import React from "react";
import VList from "./VList";
import "./styles.css";
import faker from "faker";
import _ from "lodash";

let data = [];
for (let id = 0; id < 100; id++) {
  const item = {
    id,
    value: faker.lorem.paragraphs(), // 长文本
  };
  data.push(item);
} //用faker造的item数据
// const obj1 = { name: "erha" };
// const obj2 = { name: "pppp" };

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { b: { d: 3 } };
const newObj = _.merge({}, obj1, obj2);
console.log("newObj=>", newObj);
const ListApp = () => {
  return (
    <div className="ListApp">
      <VList data={data} />
    </div>
  );
};

export default ListApp;
