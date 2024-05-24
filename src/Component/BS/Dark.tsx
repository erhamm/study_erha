import React, { useState } from "react";
import "../css/index.css";
import { Button } from "antd";

const Dark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`div ${isDarkMode ? "dark-mode" : ""}`}>
      <header className="header">
        Header
        <Button className={isDarkMode ? "dark-mode" : ""} onClick={toggleTheme}>
          切换模式
        </Button>
      </header>
      <main className="main">
        <div className="content">content</div>
        <div className="sider">sider</div>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Dark;
