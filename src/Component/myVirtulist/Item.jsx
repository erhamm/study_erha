import React, { useRef, useEffect } from "react";

const Item = (props) => {
  const elementRef = useRef(null);
  const { index, item, measure } = props;

  useEffect(() => {
    measureItem(index);
    return observer();
  }, []);

  //检测高度变化
  const observer = () => {
    const resizeObserver = new ResizeObserver(() => {
      const el = elementRef.current;
      if (el && el.offsetHeight) {
        measure(index, el.offsetHeight);
      }
    });
    resizeObserver.observe(elementRef.current);

    return () => resizeObserver.disconnect();
  };

  const measureItem = (index) => {
    let item = elementRef.current;
    if (item?.clientHeight) {
      measure(index, item.clientHeight);
    }
  };

  return (
    <div index={index} className="list-item" ref={elementRef}>
      {item.value}
    </div>
  );
};

export default Item;
