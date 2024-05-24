import { useState, useRef, useEffect } from "react";

const ControlCom = () => {
  const [imgsUrl, setImages] = useState([null, null, null, null, null, null]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleUpload = (e) => {
    let files = e.target.files;
    let len = files.length;

    if (len > 6) {
      alert("最多上传6张");
      return;
    }

    const newImages = [...imgsUrl];
    const selectedIndex =
      selectedImageIndex !== null
        ? selectedImageIndex
        : newImages.indexOf(null);

    Array.from(files).forEach((file, index) => {
      const url = URL.createObjectURL(file);
      if (selectedIndex + index < 6) {
        newImages[selectedIndex + index] = url;
      }
    });

    setImages(newImages);
    setSelectedImageIndex(null);
  };

  const handleFileClick = (index) => {//点击上传
    setSelectedImageIndex(index);
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleReplaceImage = () => {//替换
    const fileInput = document.getElementById("fileInput");
    fileInput.dataset.index = selectedImageIndex;
    fileInput.click();
  };

  const handleDeleteImage = (index, e) => {//删除
    e.stopPropagation();
    const newImages = [...imgsUrl];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <div className="img_div">
      {imgsUrl.map((img, index) => (
        <div
          className="img_div_inner"
          key={index}
          onClick={() => handleFileClick(index)}
          style={{ cursor: "pointer" }}
        >
          {img ? (
            <div>
              <img
                src={img}
                alt=""
                style={{
                  width: "100px",
                  height: "80px",
                }}
              />
              <button onClick={handleReplaceImage}>替换</button>
              <button onClick={(e) => handleDeleteImage(index, e)}>删除</button>
            </div>
          ) : (
            <div>点击上传</div>
          )}
        </div>
      ))}
      <input
        id="fileInput"
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
    </div>
  );
};

export default ControlCom;
