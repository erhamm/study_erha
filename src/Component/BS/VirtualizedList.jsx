import React, { useState } from "react";

const VirtualizedList = (props) => {
  const {
    numItems, //列表项的数量
    itemHeight, //item的高度
    renderItem, //渲染列表项的函数
    windowHeight, //视窗高度
  } = props;

  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight; //全部列表项的高度
  const startIndex = Math.floor(scrollTop / itemHeight); //滚走的高度除以item的高度=第一个item的索引
  const endIndex = Math.min(
    numItems - 1, // 不要渲染超过列表末尾的项
    Math.floor((scrollTop + windowHeight) / itemHeight) //滚走的高度+视窗高度 除以item的高度=当前最后一个item的索引
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
  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div
      className="scroll"
      style={{ overflowY: "scroll", height: `${windowHeight}px` }}
      onScroll={onScroll}
    >
      <div
        className="inner"
        style={{ position: "relative", height: `${innerHeight}px` }}
      >
        {items}
      </div>
    </div>
  );
};

export default VirtualizedList;
