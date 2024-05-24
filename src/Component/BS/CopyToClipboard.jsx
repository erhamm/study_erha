import React, { useState } from "react";

const CopyOnLongPress = () => {
  const [copyText, setCopyText] = useState("");
  let longPressTimer;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(copyText)
      .then(() => alert("文本已复制到剪贴板"))
      .catch((err) => console.error("复制失败:", err));
  };

  const handleTouchStart = () => {
    longPressTimer = setTimeout(copyToClipboard, 1000); // 设置长按时间为1秒
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <p>长按这里进行复制</p>
    </div>
  );
};

export default CopyOnLongPress;
