import UploadFile from "./UploadFile";
import VirtuList from "./VirtuList";

import React from "react";

const Demo = () => {
  const virtulistData = [
    { name: "erha", age: 20, city: "hz" },
    { name: "erha1", age: 20, city: "hz" },
    { name: "erha2", age: 20, city: "hz" },
    { name: "erha3", age: 20, city: "hz" },
    { name: "erha4", age: 20, city: "hz" },
    { name: "erha5", age: 20, city: "hz" },
    { name: "erha6", age: 20, city: "hz" },
    { name: "erha7", age: 20, city: "hz" },
    { name: "erha8", age: 20, city: "hz" },
    { name: "erha9", age: 20, city: "hz" },
    { name: "erha10", age: 20, city: "hz" },
  ];
  const renderItem = ({ index, style }) => {
    const item = virtulistData[index];
    return <div key={item.name}>{item.name + item.age + item.city}</div>;
  };
  return (
    <div>
      <p>1、文件上传</p>
      <UploadFile
        title={"证明文件"}
        multiple={true}
        uploadUrl="/upload"
        maxSize={5}
      />
      <hr />
      <p>2、虚拟列表</p>
      <VirtuList
        data={virtulistData}
        height={100}
        itemNum={4}
        renderItem={renderItem}
      />
    </div>
  );
};

export default Demo;
