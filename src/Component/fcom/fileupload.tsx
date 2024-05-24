import React, { useState, useEffect } from "react";
import "./index.css";
import { Button } from "antd";

export function FileUpload1() {
  const [imgsArr, setImgsArr] = useState(Array(6).fill(null));
  const [base64Arr, setBase64Arr] = useState(Array(6).fill(null));

  const onInputFile = (e, startIndex: number) => {
    const newImg = [...imgsArr];
    const newBase64Arr = [...base64Arr];
    let imgs = e.target.files as FileList;

    if (imgs.length > 6) {
      alert("只能上传最多6张图片");
      return;
    }

    Array.from(imgs).forEach((item: File, i: number) => {
      const index = startIndex + i; // 计算每张图片的索引
      if (index > 5) {
        alert("只能上传最多6张图片");
        return;
      }
      let url = URL.createObjectURL(item);

      newImg[index] = url;
      fetch(newImg[index])
        .then((response) => response.blob())
        .then((blobData) => {
          getBase64(blobData, (url) => {
            newBase64Arr[index] = url;
            setBase64Arr([...newBase64Arr]);
            console.log("index", index);
          });
        })
        .catch((error) => {
          console.error("获取Blob数据时出错:", error);
        });
    });

    setImgsArr(newImg);
  };
  const onImgClick = (index: number) => {
    let input_file = document.createElement("input");
    input_file.type = "file";
    input_file.accept = "image/*";
    input_file.multiple = true;

    input_file.addEventListener("change", (e) => {
      onInputFile(e, index);
    });

    input_file.click();
  };

  const getBase64 = (img, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const onImgSubmit = () => {
    console.log("base64Arr=>", base64Arr);
  };
  return (
    <div>
      <div>
        <Button type="primary">下载试用协议</Button>
      </div>
      <div className="imgs_box">
        {imgsArr.map((item, index) => {
          return (
            <div className="imginput" key={index}>
              <img
                src={item}
                alt=""
                className="imgs_box_img"
                onClick={() => onImgClick(index)}
              />
              <span className="img_icon">+</span>
            </div>
          );
        })}
      </div>
      <div>
        <Button>返回上一页</Button>
        <Button type="primary" onClick={onImgSubmit}>
          提交申请
        </Button>
      </div>
    </div>
  );
}
export default function FileUpload() {
  const [imgs, setImgs] = useState(Array(6).fill(null));
  const [base64Arr, setBase64Arr] = useState(Array(6).fill(null));
  //文件上传的onchange
  const onChangeUpload = (e, startIndex) => {
    let newImgs = [...imgs];
    const newBase64Arr = [...base64Arr];
    let files = e.target.files as FileList;

    Array.from(files).forEach((file, i) => {
      let index = startIndex + i;
      let url = URL.createObjectURL(file);
      // console.log("url=>", url);
      newImgs[index] = url;
      fetch(newImgs[index])
        .then((item) => item.blob())
        .then((item) =>
          getBase64(item, (url) => {
            newBase64Arr[index] = url;
            setBase64Arr([...newBase64Arr]);
          })
        );
    });
    setImgs([...newImgs]);
    console.log(files);
  };

  //点击图片=上传图片
  const onClickImg = (index) => {
    let input_file = document.createElement("input");
    input_file.type = "file";
    input_file.accept = "image/*";
    input_file.multiple = true;

    input_file.addEventListener("change", (e) => {
      onChangeUpload(e, index);
    });

    input_file.click();
  };

  //转换为base64格式
  const getBase64 = (img, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  const onSubmit = () => {
    console.log("base64Arr=>", base64Arr);
  };
  return (
    <div>
      <Button type="primary">下载试用1协议</Button>
      <div className="imgs_box">
        {imgs.map((item, index) => {
          return (
            <div className="imginput" key={index}>
              <img
                src={item}
                alt=""
                className="imgs_box_img"
                onClick={() => onClickImg(index)}
              />
              <span className="img_icon">+</span>
              {/* <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => onChangeUpload(e, index)}
                // style={{ display: "none" }}
                id="input_file"
              /> */}
            </div>
          );
        })}
      </div>
      <Button type="primary" onClick={onSubmit}>
        提交
      </Button>
    </div>
  );
}
