import React, { useState, useEffect } from "react";
import img1 from "../img/img.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const Preloading2 = () => {
  const [imgArr] = useState([img1, img2, img3]);
  //   const [imgIndex, setImgIndex] = useState();
  const [loadImgIndex, setLoadImgIndex] = useState(-1);
  useEffect(() => {
    const loadImage = (index) => {
      const img = new Image();
      img.src = imgArr[index];
      img.onload = () => {
        setLoadImgIndex(index);
      };
    };
    imgArr.forEach((_, index) => {
      loadImage(index);
    });
  }, [imgArr]);
  return (
    <div>
      {imgArr.map((src, index) => {
        if (index <= loadImgIndex) {
          return <img src={src} key={index} alt="" />;
        }
        return null;
      })}
      {loadImgIndex === Image.length - 1 && <p>图片已全部加载完成</p>}
    </div>
  );
};

export default Preloading2;
