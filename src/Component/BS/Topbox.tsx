import React, { useState, useEffect } from "react";
import { Affix } from "antd";
import "./topbox.css";

const Topbox = () => {
  const [isTabSticky, setIsTabSticky] = useState(false);
  const [isTitleSticky, setIsTitleSticky] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const titleElement = document.querySelector(".title");
      const tabElement = document.querySelector(".tab");
      const contentElement = document.querySelector(".content");

      if (titleElement && tabElement && contentElement) {
        const titleRect = titleElement.getBoundingClientRect();
        const tabRect = tabElement.getBoundingClientRect();
        const contentRect = contentElement.getBoundingClientRect();

        setIsTitleSticky(titleRect.top <= 0);
        setIsTabSticky(
          tabRect.top <= titleRect.bottom && tabRect.bottom >= contentRect.top
        );
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`title ${isTitleSticky ? "sticky" : ""}`}>标题</header>
      <div className="content-placeholder"></div>
      <main className="main">内容展示区</main>
      <Affix
        offsetTop={isTitleSticky ? 50 : 0}
        style={{ zIndex: 1, width: "100%" }}
        className={isTabSticky ? "sticky" : ""}
      >
        <div className="tabbox">
          tab区
          <div className="tabright">
            <div className="tab">tab1</div>
            <div className="tab">tab2</div>
            <div className="tab">tab3</div>
          </div>
        </div>
      </Affix>
      <div className="content">长页面</div>
    </div>
  );
};

export default Topbox;
