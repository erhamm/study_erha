import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Component/RTK/store";
import { BrowserRouter } from "react-router-dom";
// import UserMenage from "./UserMenage";
import FollowUserModal from "./FollowUserModal";
import ExampleForm from "./Component/fcom/ExampleForm.jsx";
import WorkCom from "./Component/WorkCom.jsx";
// import MyComponent from "./Component/MyComponent.tsx";
import Dark from "./Component/BS/Dark.tsx";
import Topbox from "./Component/BS/Topbox.tsx";
import TableBox from "./Component/BS/TableBox.tsx";
import FormItem from "./Component/BS/FormItem.jsx";
import Dshang from "./Component/BS/Dshang.jsx";
import FormItem2 from "./Component/BS/FormItem2.jsx";
import Conte from "./Component/BS/Conte.jsx";
// import CopyToClipboard from "./Component/BS/CopyToClipboard.jsx";
import Com from "./Component/BS/Com.jsx";
import Tuo from "./Component/BS/Tuo.jsx";
import Daping from "./Component/BS/Daping.jsx";
import Zbo from "./Component/BS/Zbo.tsx";
import Dingd from "./Component/BS/Dingd.jsx";
import VirtualizedList from "./Component/BS/VirtualizedList.jsx";
import Shoukong from "./Component/BS/Shoukong.jsx";
import Demo from "./Component/Top/Demo.jsx";
import Dashboard from "./Component/ALI/Dashboard.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderItem = (index, style) => {
  return (
    <div>
      <p style={style} key={index}>
        {index}
      </p>
    </div>
  );
};
root.render(
  // <BrowserRouter>
  //   <Provider store={store}>
  //   <App />
  //   </Provider>
  // </BrowserRouter>
  <>
    {/* <WorkCom /> */}
    {/* <TableBox /> */}
    {/* <FollowUserModal /> */}
    {/* <FormItem2 /> */}
    {/* <Conte /> */}
    {/* <Com /> */}
    {/* <Shoukong />！！！！ */}
    {/* <Demo /> */}
    {/* <VirtualizedList
      numItems={10}
      itemHeight={10}
      renderItem={renderItem}
      windowHeight={400}
    /> */}
    {/* <CopyToClipboard /> */}
    {/* <hr />
    <Dshang /> */}
    <Dashboard />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
