import "./Conte.css";
import { useEffect } from "react";
const Daping = () => {
  //封装手机号邮箱验证
  function curryValidator(validatorFun, regExp) {
    return function (targetString) {
      return validatorFun(regExp, targetString);
    };
  }
  function check(regExp, targetString) {
    return regExp.test(targetString);
  }
  function validator(type, targetString) {
    switch (type) {
      case "phone":
        return curryValidator(check, /^1[34578]\d{9}$/)(targetString);
      case "email":
        return curryValidator(
          check,
          /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
        )(targetString);
      case "idCard":
        return curryValidator(check, /^\d{17}[\dXx]$/)(targetString);
      default:
        return false;
    }
  }
  let res = validator("phone", "152580877733");
  console.log("res=>", res);
  //数据大屏自适应函数
  const handleScreenAuto = () => {
    const designDraftWidth = 1920; //设计稿的宽度
    const designDraftHeight = 960; //设计稿的高度
    //根据屏幕的变化适配的比例
    const scale =
      document.documentElement.clientWidth / // 屏幕宽高比2/1 2 < 设计稿的宽高比3/1 3 则scale为 屏幕宽/设计稿宽，否则为 屏幕高/设计稿高
        document.documentElement.clientHeight < // 小于代表设计稿更宽，所以需要按照宽的比例来缩放大小
      designDraftWidth / designDraftHeight // 大于代表设计稿更高，所以需要按照高的比例来缩放大小
        ? document.documentElement.clientWidth / designDraftWidth
        : document.documentElement.clientHeight / designDraftHeight;
    //缩放比例
    document.querySelector(
      "#screen"
    ).style.transform = `scale(${scale}) translate(-50%)`;
    // console.log("scale=>", scale);
  };

  useEffect(() => {
    //初始化自适应  ----在刚显示的时候就开始适配一次
    handleScreenAuto();
    //绑定自适应函数   ---防止浏览器栏变化后不再适配
    window.onresize = () => handleScreenAuto();
    //退出大屏后自适应消失   ---最好在退出大屏的时候接触自适应
    return () => (window.onresize = null);
  }, []);

  return (
    <div className="screen-wrapper">
      <div className="screen" id="screen">
        <div className="demo-root">
          <header>头部</header>
          <main>
            <div className="demo-left"></div>
            <div className="demo-center"></div>
            <div className="demo-right"></div>
          </main>
          <footer>底部</footer>
        </div>
      </div>
      <footer className="large-footer"></footer>
    </div>
  );
};

export default Daping;
