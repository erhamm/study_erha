import React from "react";
import _ from "lodash";
import { Tooltip } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import "./index.css";

const fileList = [
  {
    attachmentName: "的符号啥地方卡",
    attachmentId: "34783957892347892",
    attachmentPath:
      "https://yjsb.wzu.edu.cn/system/_content/download.jsp?urltype=news.DownloadAttachUrl&owner=1349113857&wbfileid=F969EFD47FB0C170E4824B2C1F7CDFE2",
  },
];
const FileDownload = () => {
  return (
    <div className="filedownload">
      <div className="filedownload-box">
        {_.map(fileList, (file) => {
          return (
            <Tooltip
              title="点击可下载附件"
              placement="topLeft"
              key={file?.attachmentId}
            >
              <a href={file?.attachmentPath}>
                <span className="filedownload-icon">
                  <PaperClipOutlined />
                </span>
                <span className="filedownload-name">
                  {file?.attachmentName}
                </span>
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default FileDownload;
