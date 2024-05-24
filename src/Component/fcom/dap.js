// 替换这里的baseWidth和baseHeight为你希望的宽高比例的基础宽度和基础高度
const baseWidth = 800;
const baseHeight = 600;

const el = document.querySelector("#xxx");
//计算所需保持的宽高比
const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5));//1.3333
//计算当前屏幕的宽高比
const currentRate = parseFloat(
  (window.innerWidth / window.innerHeight).toFixed(5)//911/434=2.09907
);
console.log("currentRate=>", currentRate);
//用于存储宽度和高度的缩放比例。
const scale = {
  widthRatio: 1,
  heightRatio: 1,
};
//如果当前屏幕宽高比大于指定的宽高比,说明屏幕较宽，需要根据高度进行等比缩放
if (currentRate > baseProportion) {
  scale.widthRatio = parseFloat(
    ((window.innerHeight * baseProportion) / baseWidth).toFixed(5)
  );
  scale.heightRatio = parseFloat((window.innerHeight / baseHeight).toFixed(5));
} else {
  //如果当前屏幕宽高比小于指定的宽高比（currentRate <= baseProportion），说明屏幕较高，需要根据宽度进行等比缩放。
  scale.heightRatio = parseFloat(
    (window.innerWidth / baseProportion / baseHeight).toFixed(5)
  );
  scale.widthRatio = parseFloat((window.innerWidth / baseWidth).toFixed(5));
}
//使用 transform 属性将 el 元素进行等比缩放或放大，实现在不同屏幕尺寸上保持指定宽高比例的效果。
el.style.transform = `scale(${scale.widthRatio}, ${scale.heightRatio})`;
