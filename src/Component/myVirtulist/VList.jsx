import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";

const VList = (props) => {
  const viewportRef = useRef(null);
  const listPhantomRef = useRef(null);
  const listAreaRef = useRef(null);
  const { data } = props;

  // 预估高度
  const defaultItemSize = 100;
  const [positions, setPositions] = useState(
    data.map((item, index) => {
      return {
        index,
        height: defaultItemSize,
        top: index * defaultItemSize,
        bottom: (index + 1) * defaultItemSize,
      };
    })
  );

  // 列表总高度
  const [phantomHeight, setphantomHeight] = useState(
    //真实高度
    positions.reduce((total, item) => {
      return total + item.height;
    }, 0)
  );

  // 渲染数量
  const viewCount = 1;
  // 开始index
  const [startIndex, setStartIndex] = useState(0);
  // 结束index
  const endIndex = startIndex + viewCount;
  // 偏移量
  const [startOffset, setStartOffset] = useState(0);

  useEffect(() => {
    if (positions?.length) {
      const totalHeight = positions.reduce((total, item) => {
        return total + item.height;
      }, 0);
      setphantomHeight(totalHeight);
    }
  }, [positions]);

  // 测量高度
  const measure = (index, height) => {
    // 如果没有传入height，主动进行测量
    if (height === undefined) {
      height =
        listAreaRef.current.querySelector(`[index="${index}"]`)?.clientHeight ||
        defaultItemSize;
    }

    positions.forEach((item) => {
      if (item.index === index) {
        let oldHeight = item.height;
        let dHeight = oldHeight - height; //新高度和旧高度的差值，如果为负则新高度更高，反之更低

        // 向下更新
        if (dHeight) {
          //如果有差
          item.height = height; //覆盖旧值
          item.bottom = item.bottom - dHeight; //底部=原来的底部-差值，当新高更高时等于原来底部+差值，反之低时等于原来底部减去差值。

          for (let k = index + 1; k < positions.length; k++) {
            positions[k].top = positions[k - 1].bottom;
            positions[k].bottom = positions[k].bottom - dHeight;
          }
        }
      }
    });
    setPositions(positions);
  };
  const getStartIndex = (scrollTop) => {
    let item = positions.find((item) => {
      return item && item.bottom > scrollTop;
    });
    return item.index;
  };

  const getStartOffset = (startIndex) => {
    return startIndex >= 1 ? positions[startIndex - 1].bottom : 0;
  };

  const onScroll = () => {
    const scrollTop = viewportRef.current.scrollTop; // 滚动距离
    const startIndex = getStartIndex(scrollTop);
    setStartIndex(startIndex);

    const startOffset = getStartOffset(startIndex);
    setStartOffset(startOffset);
  };

  return (
    <div className="viewPort" ref={viewportRef} onScroll={onScroll}>
      <div
        className="list_phantom"
        ref={listPhantomRef}
        style={{ height: `${phantomHeight}px` }}
      ></div>
      <div
        className="list_area"
        ref={listAreaRef}
        style={{ transform: `translate3d(0,${startOffset}px,0)` }}
      >
        {data.map((item, index) => {
          return (
            index >= startIndex &&
            index <= endIndex && (
              <Item index={index} item={item} key={item.id} measure={measure} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default VList;
