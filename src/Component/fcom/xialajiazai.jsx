// import React, { useEffect, useState } from "react";

// const InfiniteScroll = () => {
//   const [items, setItems] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const triggerElement = document.getElementById("loadMoreTrigger");

//       if (triggerElement && !isLoading) {
//         const rect = triggerElement.getBoundingClientRect();
//         console.log("rect=>", rect.bottom);
//         console.log("window.innerHeight=>", window.innerHeight);
//         // 如果触发元素进入视口底部，执行加载逻辑
//         if (rect.bottom <= window.innerHeight) {
//           // 执行加载更多数据的操作
//           loadMoreData();
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isLoading]);

//   const loadMoreData = () => {
//     // 模拟异步请求数据
//     setIsLoading(true);
//     setTimeout(() => {
//       const newData = generateMockData(10); // 生成模拟数据
//       setItems((prevItems) => [...prevItems, ...newData]);
//       setIsLoading(false);
//     }, 1000); // 模拟异步加载延迟
//   };

//   // 生成模拟数据的函数
//   const generateMockData = (count) => {
//     return Array.from(
//       { length: count },
//       (_, index) => `Item ${items.length + index + 1}`
//     );
//   };

//   return (
//     <div>
//       {/* 显示已加载的数据 */}
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* 加载更多触发元素 */}
//       <div
//         id="loadMoreTrigger"
//         style={{ height: "50px", background: "lightblue" }}
//       >
//         {isLoading ? "Loading..." : "加载更多"}
//       </div>
//     </div>
//   );
// };

// export default InfiniteScroll;
import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // 你的每页数据量

  useEffect(() => {
    const handleScroll = () => {
      const triggerElement = document.getElementById("loadMoreTrigger");

      if (triggerElement && !isLoading) {
        const rect = triggerElement.getBoundingClientRect();

        // 如果触发元素进入视口底部，执行加载逻辑
        if (rect.bottom <= window.innerHeight) {
          // 执行加载更多数据的操作
          loadMoreData(currentPage, pageSize);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, currentPage, pageSize]);

  const loadMoreData = async (page, size) => {
    setIsLoading(true);
    try {
      // 发起后端请求，获取新的数据
      const response = await fetch(`/api/items?page=${page}&pageSize=${size}`);
      const newData = await response.json();

      // 更新前端状态，将新数据合并到已有数据中
      setItems((prevItems) => [...prevItems, ...newData]);
      // 更新当前页码
      setCurrentPage(page + 1);
    } catch (error) {
      console.error("Error loading more data:", error);
    } finally {
      // 标记加载完成
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* 显示已加载的数据 */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* 加载更多触发元素 */}
      <div
        id="loadMoreTrigger"
        style={{ height: "50px", background: "lightblue" }}
      >
        {isLoading ? "Loading..." : "加载更多"}
      </div>
    </div>
  );
};

export default InfiniteScroll;
