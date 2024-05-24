import React from "react";
import FormItem from "./FormItem";
import Input from "./Input";
import VirtualizedList from "./VirtualizedList";

const FormItem2 = () => {
  // 模拟数据
  const numItems = 1000; // 列表项数量
  const itemHeight = 50; // 单个列表项的高度
  const windowHeight = 300; // 可见窗口的高度

  // 渲染列表项的函数
  const renderItem = ({ index, style }) => (
    <div key={index} style={style}>
      Item {index}
    </div>
  );

  return (
    <div>
      <FormItem name="ceshi">
        <Input />
      </FormItem>
      <hr />
      {/* numItems, itemHeight, renderItem, windowHeight */}
      <VirtualizedList
        numItems={numItems}
        itemHeight={itemHeight}
        windowHeight={windowHeight}
        renderItem={renderItem}
      />
    </div>
  );
};

export default FormItem2;
