import { useState, useRef } from "react";

// 模拟大量消息
const generateLargeData = () => {
  return Array.from({ length: 100000 }, (_, i) => `Message ${i + 1}`).join(
    "\n"
  );
};

const Shoukong = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  // 每批处理的元素数量
  const batchSize = 1000;

  const handleDownload = () => {
    setIsProcessing(true);
    setProgress(0);

    // 获取全部数据
    const largeData = generateLargeData().split("\n");

    let currentIndex = 0;
    let chunks = [];

    const processBatch = () => {
      const end = Math.min(currentIndex + batchSize, largeData.length);
      const batch = largeData.slice(currentIndex, end);

      // 将当前批次添加到 chunks
      chunks.push(batch.join("\n"));

      // 更新进度
      setProgress(((currentIndex + batchSize) / largeData.length) * 100);

      currentIndex = end;

      if (currentIndex < largeData.length) {
        // 延迟一会再继续处理，防止阻塞
        setTimeout(processBatch, 0);
      } else {
        // 所有批次处理完成后，开始下载
        downloadFile(chunks.join("\n"));
        setIsProcessing(false);
      }
    };

    // 开始处理
    processBatch();
  };

  const downloadFile = (content) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "messages.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // 释放URL对象
  };

  return (
    <div>
      <button onClick={handleDownload} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Download Messages"}
      </button>
      {isProcessing && <p>Progress: {progress.toFixed(2)}%</p>}
    </div>
  );
};

export default Shoukong;
