import React, { useRef, useState } from "react";

export default function CanvasFile() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [webpURL, setWebpURL] = useState("");

  const onStartdraw = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.beginPath();
        // 其他绘制操作
        const offsetX = e.nativeEvent.offsetX;
        const offsetY = e.nativeEvent.offsetY;
        ctx.moveTo(offsetX, offsetY);
      }
    }
    /* const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    ctx.moveTo(offsetX, offsetY); */
  };
  const onDraw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };
  const onEnddraw = () => {
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
    );
  };
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400}
        height={200}
        style={{ border: "1px solid black" }}
        onMouseDown={onStartdraw}
        onMouseMove={onDraw}
        onMouseUp={onEnddraw}
        onMouseOut={onEnddraw}
      ></canvas>
      <button onClick={clearCanvas}>Clear</button>
      <button onClick={submitCanvas}>Submit</button>
      {/* 显示生成的WebP图片 */}
      {webpURL && <img src={webpURL} alt="Generated WebP" />}
    </div>
  );
}
/* 在React中，事件对象（SyntheticEvent）是React封装的一种合成事件，它包装了原生浏览器事件对象，提供了一致的跨浏览器行为。`e.nativeEvent` 表示在React合成事件中，对应的原生DOM事件对象。因为React合成事件是对原生事件的封装，所以通过 `e.nativeEvent` 可以访问到底层原生事件对象的属性和方法。

在前面提到的代码中，`e.nativeEvent.offsetX` 和 `e.nativeEvent.offsetY` 是原生DOM事件对象中的属性，它们分别表示相对于触发事件的元素左上角的偏移量，用来获取鼠标事件在 `<canvas>` 元素内的相对位置坐标。

通过使用 `e.nativeEvent.offsetX` 和 `e.nativeEvent.offsetY`，你可以在React中获取到原生事件对象的属性，从而实现对应用于 `<canvas>` 元素上的鼠标事件的位置计算。 */
