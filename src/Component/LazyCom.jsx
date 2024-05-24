import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]); // 存放加载的数据
  const [isLoading, setIsLoading] = useState(false); // 控制加载状态
  const [page, setPage] = useState(1); // 当前页码

  const fetchData = async () => {
    setIsLoading(true);

    // 模拟从后端获取数据的操作，可以使用fetch、axios等进行异步请求
    try {
      const response = await fetch(
        `https://api.example.com/data?page=${page}&pageSize=5`
      );
      const newData = await response.json();

      setData((prevData) => [...prevData, ...newData]); // 合并新数据到已有数据列表
      setPage((prevPage) => prevPage + 1); // 更新页码
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      fetchData(); // 当滚动到页面底部时触发加载数据
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 在组件挂载时添加滚动事件监听器

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default App;
