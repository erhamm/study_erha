import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FileUpload from "../fcom/fileupload.tsx";
import Filedownload from "../fcom/filedownload.tsx";
import CanvasFile from "../fcom/canvasfile.tsx";
// import ControlCom from "../ControlCom.jsx";
import Tab from "../fcom/mytab.tsx";
import PCom from "../fcom/chuandi/pCom.tsx";
import InfiniteScroll from "../fcom/xialajiazai.jsx";
import MyMemo from "../fcom/myMemo.jsx";
// import DaPing from "../fcom/daping.jsx";
import Demo from "../content/demo.jsx";

const Home = () => {
  const state = useSelector((state: any) => state.islog);
  let username = state?.user?.username;
  // let isLogged = state?.islog?.isLogged;
  let jwt = localStorage.getItem("jwt");
  const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
  ];
  return (
    <div>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/about">关于登录</Link>
      </li>
      {jwt && (
        <li>
          <Link to="/person">{username}</Link>
        </li>
      )}
      <hr />
      <FileUpload />
      <Filedownload />
      <CanvasFile />
      {/* <ControlCom /> */}
      <hr />
      <Tab tabs={tabs} />
      <PCom />
      <p>hhhhhhhhh</p>
      <p>hhhhhhhhh</p>
      <p>hhhhhhhhh</p>
      <p>hhhhhhhhh</p>
      {/* <InfiniteScroll /> */}
      <hr />
      <MyMemo />
      <hr />
      {/* <DaPing /> */}
      <Demo />
    </div>
  );
};

export default Home;
