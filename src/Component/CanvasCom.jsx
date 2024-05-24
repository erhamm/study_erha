import React, { useRef, useState } from "react";

const CanvasCom = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [webpURL, setWebpURL] = useState("");

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath(); 
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  };//意思是：x轴为可视窗口的x轴减去画布的左测？y轴为可视窗口的y轴减去画布的顶侧？

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  const submitCanvas = () => {
    const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    const imageData = canvas.toDataURL("image/png");
    console.log("imageData=>", imageData);
    // const webpimg = URL.createObjectURL(imageData);
    canvas.toBlob(
      (blob) => {
        const webpURL = URL.createObjectURL(blob);
        setWebpURL(webpURL);
        console.log("转换后的WebP格式图片URL:", webpURL);
        console.log("blob=>", blob);
        // 这里可以使用webpURL进行其他操作，比如展示在页面上或者上传给后端
      },
      "image/webp",
      0.8
    ); // 设置图片质量
    // console.log("webpimg=>", webpURL);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "1px solid #000" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
      ></canvas>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={submitCanvas}>Submit</button>
      {/* 显示生成的WebP图片 */}
      {webpURL && <img src={webpURL} alt="Generated WebP" />}
    </div>
  );
};

export default CanvasCom;
