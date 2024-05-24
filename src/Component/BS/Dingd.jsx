// import { useState, useEffect, useRef } from "react";

// const Dingd = () => {
//   const scrollTopRef = useRef(null);
//   const [scrollTop, setScrollTop] = useState(0);
//   const orignData = [
//     { id: 1, name: "zhangsan1", content: "like erha1" },
//     { id: 2, name: "zhangsan2", content: "like erha2" },
//     { id: 3, name: "zhangsan3", content: "like erha3" },
//     { id: 4, name: "zhangsan4", content: "like erha4" },
//     { id: 5, name: "zhangsan5", content: "like erha5" },
//     { id: 6, name: "zhangsan6", content: "like erha6" },
//     { id: 7, name: "zhangsan7", content: "like erha7" },
//     { id: 8, name: "zhangsan8", content: "like erha8" },
//     { id: 9, name: "zhangsan9", content: "like erha9" },
//     { id: 10, name: "zhangsan10", content: "like erha10" },
//     // { id: 11, name: "zhangsan11", content: "like erha11" },
//     // { id: 12, name: "zhangsan12", content: "like erha12" },
//     // { id: 13, name: "zhangsan13", content: "like erha13" },
//     // { id: 14, name: "zhangsan14", content: "like erha14" },
//     // { id: 15, name: "zhangsan15", content: "like erha15" },
//   ];
//   const itemHeight = 30;
//   const containerHeight = 100;
//   const totalHeight = orignData.length * itemHeight; // 整个列表的总高度
//   const onSrcoll = (e) => {
//     console.log("Scroll event occurred");
//     console.log("scrollTop:", e.target.scrollTop);
//     setScrollTop(e.target.scrollTop);
//   };
//   useEffect(() => {
//     const current = scrollTopRef.current;
//     if (current) {
//       current.addEventListener("scroll", onSrcoll);
//     }
//     return () => {
//       if (current) {
//         current.removeEventListener("scroll", onSrcoll);
//       }
//     };
//   }, []);
//   let from = Math.floor(scrollTop / itemHeight);
//   let to = Math.ceil((scrollTop + containerHeight) / itemHeight);
//   let newData = orignData.slice(from, to);
//   return (
//     <div
//       ref={scrollTopRef}
//       style={{
//         height: containerHeight,
//         backgroundColor: "red",
//         overflow: "auto",
//         position: "relative", // 为了绝对定位内容
//       }}
//     >
//       <div style={{ height: totalHeight }}>
//         <ul>
//           {newData.map((item) => {
//             return (
//               <li key={item.id}>
//                 {item.name}
//                 <span>+</span>
//                 {item.content}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dingd;
import { useState, useEffect, useRef } from "react";

const Dingd = () => {
  const scrollTopRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const originalData = [
    { id: 1, name: "zhangsan1", content: "like erha1" },
    { id: 2, name: "zhangsan2", content: "like erha2" },
    { id: 3, name: "zhangsan3", content: "like erha3" },
    { id: 4, name: "zhangsan4", content: "like erha4" },
    { id: 5, name: "zhangsan5", content: "like erha5" },
    { id: 6, name: "zhangsan6", content: "like erha6" },
    { id: 7, name: "zhangsan7", content: "like erha7" },
    { id: 8, name: "zhangsan8", content: "like erha8" },
    { id: 9, name: "zhangsan9", content: "like erha9" },
    { id: 10, name: "zhangsan10", content: "like erha10" },
    { id: 11, name: "zhangsan11", content: "like erha11" },
    { id: 12, name: "zhangsan12", content: "like erha12" },
    { id: 13, name: "zhangsan13", content: "like erha13" },
    { id: 14, name: "zhangsan14", content: "like erha14" },
    { id: 15, name: "zhangsan15", content: "like erha15" },
  ];

  const itemHeight = 30;
  const containerHeight = 100;
  const totalHeight = originalData.length * itemHeight;

  const onScroll = (e) => {
    console.log("Scroll event occurred");
    console.log("scrollTop:", e.target.scrollTop);
    setScrollTop(e.target.scrollTop);
  };

  useEffect(() => {
    const current = scrollTopRef.current;
    if (current) {
      current.addEventListener("scroll", onScroll);
    }
    return () => {
      if (current) {
        current.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  // 增加缓冲区，避免抖动
  const buffer = 1; // 可以根据需要调整
  const from = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer); // 确保不小于0
  const to = Math.min(
    originalData.length,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer
  ); // 确保不超过数据长度

  const newData = originalData.slice(from, to);

  return (
    <div
      ref={scrollTopRef}
      style={{
        height: containerHeight,
        overflowY: "auto",
        backgroundColor: "red",
        position: "relative", // 需要相对定位
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {" "}
        {/* 总高度，绝对定位 */}
        {/* <ul> */}
        {newData.map((item, index) => (
          <li
            key={item.id}
            style={{
              position: "absolute", // 绝对定位
              top: (from + index) * itemHeight, // 根据位置确定顶端距离
            }}
          >
            {item.name}
            <span>+</span>
            {item.content}
          </li>
        ))}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Dingd;
