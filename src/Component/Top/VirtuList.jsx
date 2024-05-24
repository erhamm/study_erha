import React, { useState } from "react";

const VirtuList = (props) => {
  const [scrollTop, setScrollTop] = useState(0);
  const { data, height, itemNum, itemHeight = 20, renderItem } = props;
  //   let startIndex = Math.floor(scrollTop / itemHeight);
  //   let endIndex = startIndex + itemNum - 1;
  const onScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  const innerHeight = itemNum * itemHeight; //全部列表项的高度
  const startIndex = Math.floor(scrollTop / itemHeight); //滚走的高度除以item的高度=第一个item的索引
  const endIndex = Math.min(
    itemNum - 1, // 不要渲染超过列表末尾的项
    Math.floor((scrollTop + height) / itemHeight) //滚走的高度+视窗高度 除以item的高度=当前最后一个item的索引
  );
  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%",
        },
      })
    );
  }
  return (
    <div
      style={{ height, overflowY: "scroll", backgroundColor: "red" }}
      onScroll={onScroll}
    >
      <div
        style={{
          position: "relative",
          height: `${innerHeight}px`,
        }}
      >
        {items}
      </div>
    </div>
  );
};

export default VirtuList;
