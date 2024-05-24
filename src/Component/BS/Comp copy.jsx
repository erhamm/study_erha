import React, { useState } from "react";
import Draggable from "react-draggable";
import "./Conte.css";

function Comp() {
  const chartWidth = 200; // 图表的宽度
  const chartHeight = 150; // 图表的高度
  const margin = 10; // 边距

  const gridSize = chartWidth + margin; // 单元格大小

  const [charts, setCharts] = useState([
    { id: 1, x: 0, y: 0 },
    { id: 2, x: 0, y: 0 },
    { id: 3, x: 0, y: 0 },
    { id: 4, x: 0, y: 0 },
    { id: 5, x: 0, y: 0 },
    { id: 6, x: 0, y: 0 },
    // Add more charts as needed
  ]);

  const handleDragStop = (index, e, data) => {
    const { x, y } = data;
    const newX = Math.round(x / gridSize) * gridSize;
    const newY = Math.round(y / gridSize) * gridSize;

    setCharts((prevCharts) => {
      const updatedCharts = [...prevCharts];
      updatedCharts[index] = { ...updatedCharts[index], x: newX, y: newY };
      return updatedCharts;
    });
  };

  return (
    <div className="container">
      {charts.map((chart, index) => (
        <Draggable
          key={chart.id}
          defaultPosition={{ x: chart.x * gridSize, y: chart.y * gridSize }}
          onStop={(e, data) => handleDragStop(index, e, data)}
        >
          <div className="chart">
            {/* Render your chart component here */}
            Chart {chart.id}
          </div>
        </Draggable>
      ))}
    </div>
  );
}

export default Comp;
