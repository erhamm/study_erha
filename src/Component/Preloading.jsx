import React, { useEffect, useState } from "react";
import img1 from "../img/img.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";

const ImageLoader = () => {
  const [images] = useState([img1, img2, img3]); // 图片路径数组
  const [loadedImageIndex, setLoadedImageIndex] = useState(-1); // 已加载完成的图片索引

  useEffect(() => {
    const loadImage = (index) => {
      const img = new Image();
      img.onload = () => {
        // 加载成功后，更新已加载完成的图片索引
        setLoadedImageIndex(index);
      };
      img.src = images[index];
    };

    // 逐一加载图片
    images.forEach((_, index) => {
      loadImage(index);
    });
  }, [images]);
  console.log("loadedImageIndex=>", loadedImageIndex);
  return (
    <div>
      {images.map((src, index) => {
        if (index <= loadedImageIndex) {
          return <img key={index} src={src} alt="" />;
        }
        return null;
      })}
      {loadedImageIndex === images.length - 1 && <p>All images loaded</p>}
    </div>
  );
};

export default ImageLoader;
