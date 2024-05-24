import React, { useState } from "react";
import { Upload, message } from "antd";

const UploadFile = (props) => {
  const [fileList, setFileList] = useState();
  console.log("props=>", props);
  const { title, uploadUrl, multiple, maxSize } = props;
  console.log("title=>", title);
  const handleChange = () => {
    console.log("shangchuan");
  };
  const beforeUpload = (file) => {
    const isAllowedType =
      file.type === "application/pdf" || file.type.startsWith("image/");
    if (!isAllowedType) {
      message.error("只能上传PDF或图片文件！");
      return false;
    }

    const isUnderSizeLimit = file.size / 1024 / 1024 < maxSize; // 限制文件小于5MB
    if (!isUnderSizeLimit) {
      message.error("文件大小必须小于5MB！");
      return false;
    }

    return true; // 允许上传
  };
  return (
    <div style={{ width: 300 }}>
      <p>{title}：</p>
      <Upload
        action={uploadUrl}
        fileList={fileList}
        onChange={handleChange}
        beforeUpload={beforeUpload}
        multiple={multiple}
      >
        <button>点击上传</button>
      </Upload>
    </div>
  );
};

export default UploadFile;
