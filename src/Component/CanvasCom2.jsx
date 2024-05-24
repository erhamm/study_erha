import React, { useRef, useState } from "react";

const CanvasCom2 = () => {
  const canvasRef = useRef(null);
  const [isDraw, setIsDraw] = useState(false);

  const onStartDraw = (e) => {
    setIsDraw(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  };

  const onDraw = (e) => {
    if (!isDraw) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
  };

  const onEndDraw = () => {
    setIsDraw(false);
  };
  const onClearDraw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  const onSubmitDraw = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const webpUrl = URL.createObjectURL(blob);
      console.log("webpUrl=>", webpUrl);
    }, "image/webp");
  };
  return (
    <div>
      <canvas
        // id="canvas_div"
        ref={canvasRef}
        // style={{ width: "300px", height: "200px", border: "1px solid black" }}
        width={400}
        height={200}
        style={{ border: "1px solid #000" }}
        onMouseDown={onStartDraw} //鼠标按下
        onMouseMove={onDraw} //鼠标移动
        onMouseUp={onEndDraw} //鼠标按回
        onMouseOut={onEndDraw}
      ></canvas>
      <button onClick={onClearDraw}>clear</button>
      <button onClick={onSubmitDraw}>submit</button>
    </div>
  );
};

export default CanvasCom2;
