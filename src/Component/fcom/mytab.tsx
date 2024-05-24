import React, { useState, useEffect } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(() => {
    return parseInt(localStorage.getItem("activeTab") || "0");
  });
  const [formContent, setFormContent] = useState({ input1: "", input2: "" });

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormContent({ ...formContent, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // 在此处处理表单提交逻辑，可以使用 formContent 状态中的数据
  };
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab.toString());
  }, [activeTab]);

  return (
    <div className="tab-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <form onSubmit={handleFormSubmit}>
          {activeTab === 0 ? (
            <div>{tabs[activeTab].content}</div>
          ) : (
            <>
              <input
                type="text"
                name="input1"
                value={formContent.input1 || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="input2"
                value={formContent.input2 || ""}
                onChange={handleInputChange}
              />
              {/* 其他表单元素 */}
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Tab;
