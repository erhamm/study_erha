import React, { useState, useRef, useEffect } from "react";

const VirtualList = () => {
  const data = Array.from({ length: 1000 }, (_, i) => `Item ${i}`); // 模拟数据
  const itemHeight = 50; // 模拟项高度
  const containerHeight = 300; // 模拟容器高度

  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 }); // 初始可见范围

  const containerRef = useRef(null);

  const calculateVisibleRange = () => {
    const containerScrollTop = containerRef.current.scrollTop;
    const startIndex = Math.floor(containerScrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      data.length
    );
    setVisibleRange({ start: startIndex, end: endIndex });
  };

  const handleScroll = () => {
    calculateVisibleRange();
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      calculateVisibleRange(); // 初始化可见范围
      return () => {
        containerRef.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ height: `${data.length * itemHeight}px` }}>
        {data.slice(visibleRange.start, visibleRange.end).map((item, index) => (
          <div
            key={index}
            style={{
              height: itemHeight,
              borderBottom: "1px solid #eee",
              padding: "10px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
