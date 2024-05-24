import React from "react";
export interface FileProps {
  /**
   * @description 文件id
   * @default ""
   */
  attachmentId: string;
  /**
   * @description 文件下载路径
   * @default ""
   */
  attachmentPath: string;
  /**
   * @description 文件名称
   * @default ""
   */
  attachmentName: string;
}
export interface FileDownloadProps {
  /**
   * @description 附件
   * @default ""
   */
  fileList?: FileProps[];
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 链接尾部内容
   * @default null
   */
  afterContent?: React.ReactNode;
}
