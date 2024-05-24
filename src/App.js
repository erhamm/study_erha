import "./App.css";
// import { React, lazy, useState, Suspense } from "react";
// import { useSetState } from "ahooks";

// import Com from "./Component/RTK/Com";
// import MyRegister from "./Component/MyRegister/index.tsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/MyRegister/Home.tsx";
import Hello from "./Component/MyRegister/Hello.tsx";
import About from "./Component/MyRegister/About.tsx";
import Person from "./Component/MyRegister/Person.tsx";
import Mycom from "./Component/MyRegister/Home.tsx";
// import ExampleForm from "./Component/fcom/ExampleForm.jsx"
// import Tab from "./Component/fcom/mytab.tsx";
// import ParentCom from "./Component/fcom/chuandi/parentcom.tsx";

function App() {
  // const [getLati, setGetLati] = useState();
  // const [getLong, setGetLong] = useState();
  // const [position, setPositon] = useState({
  //   latitude: null,
  //   longitude: null,
  // });
  /* const [state, setState] = useSetState({
    longitude: null,
    latitude: null,
  });
  const success = (position) => {
    let coords = position.coords;
    setState({ latitude: coords.latitude, longitude: coords.longitude });
    // setPositon({ latitude: coords.latitude, longitude: coords.longitude });
    // setGetLong(coords.longitude);
  }; */
  /* const error = (err) => {
    console.warn("ERROR(" + err.code + ")=> " + err.message);
  };
  const onGetPosition = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };
  const { latitude, longitude } = state;
  const BigComponent = lazy(() => import("./Component/BigCom")); */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path={"hello"} element={<Hello />} />
        </Route>
        <Route path="/person" element={<Person />}></Route>
      </Routes>
      {/* <Mycom /> */}
      {/* <Com /> */}
      {/* <hr /> */}
      {/*<img src="thumbnail1111111" alt="sdf" />
      <img src="thumbna" alt="sf111" />
      <img src="thumbnail" alt="11" />
      <span>获取您的当前位置</span>
      <span>经度:{latitude}</span>
      <span>纬度:{longitude}</span>
      <button onClick={onGetPosition}>点击</button>
      <hr />
      <div className="div">
        <div className="div_first">1</div>
      </div>
      <hr />
      <p className="name">erhameimei</p>
      <p className="name2">erhameimei</p>
      {/* <Suspense fallback={<div>1111Loading...</div>}>
        <BigComponent />
      </Suspense> */}
    </div>
  );
}

export default App;
// import { useState } from "react";
// import FitScreen from "@fit-screen/react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <FitScreen width={1920} height={1080} mode="fit">
//       <div className="App">
//         <div>
//           <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//             <img src="/vite.svg" className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://reactjs.org" target="_blank" rel="noreferrer">
//             React logo
//           </a>
//         </div>
//         <h1>Vite + React</h1>
//         <div className="card">
//           <button onClick={() => setCount((count) => count + 1)}>
//             count is {count}
//           </button>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </div>
//     </FitScreen>
//   );
// }

// export default App;
