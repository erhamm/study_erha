import React from "react";
import { Table } from "antd";

// TypeScript;
// schema
const schema = [
  {
    dataIndex: "field1",
    type: "enum",
    label: "枚举",
    enums: [
      {
        label: "值为-1",
        value: "-1",
      },
      {
        label: "值为0",
        value: "0",
      },
      {
        label: "值为1",
        value: "1",
      },
      {
        label: "值为2",
        value: "2",
      },
    ],
  },
  {
    dataIndex: "field2",
    type: "date",
    label: "日期",
  },
  {
    dataIndex: "field3",
    type: "dateRange",
    label: "日期范围",
  },
  {
    dataIndex: "field4",
    type: "string",
    label: "简单字符串",
  },
];

// 数据源
const dataSource = [
  {
    field1: 1,
    field2: 1711027564449,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串",
  },
  {
    field1: -1,
    field2: 1711123199000,
    field3: [1713801599000, 1713887999000],
    field4: "我是简单字符串2",
  },
];

// 定义列展示类型枚举
enum Type {
  enum, // 枚举型
  date, // 日期型，单位为毫秒
  dateRange, // 日期范围，单位为毫秒
  string, // 简单字符串
}

// 定义 schema 类型
interface ISchema {
  dataIndex: string; // 字段key，对应数据源中的哪个数据
  label: string; // 列头显示文字
  type: Type; // 列展示类型，具体类型见下enum Type
  enums?: { label: string; value: string }[]; // 枚举类型专用，枚举类型label和value的映射关系
}

// 定义数据源类型
interface IDataSource {
  [key: string]: string | number | number[] | undefined;
}

// props 类型
interface Props {
  schema: ISchema[];
  dataSource: IDataSource[];
}

const MyComponent: React.FC<Props> = ({ schema, dataSource }) => {
  // 处理数据源
  const processedData = dataSource.map((item, index) => {
    const processedItem: IDataSource = {};
    schema.forEach((field) => {
      if (item[field.dataIndex] !== undefined) {
        if (field.type === Type.date) {
          processedItem[field.dataIndex] = new Date(
            item[field.dataIndex] as number
          ).toLocaleString();
        } else if (field.type === Type.dateRange) {
          processedItem[field.dataIndex] = (item[field.dataIndex] as number[])
            .map((date) => new Date(date).toLocaleString())
            .join(" ~ ");
        } else {
          processedItem[field.dataIndex] = item[field.dataIndex];
        }
      }
    });
    return { ...processedItem, key: index }; // 添加唯一的 key 属性
  });

  // 根据 schema 生成 columns
  const columns = schema.map((field) => ({
    title: field.label,
    dataIndex: field.dataIndex,
    key: field.dataIndex,
    render: (text: string | number) => {
      if (field.type === Type.enum) {
        const enumItem = field.enums?.find(
          (enumItem) => enumItem.value === text.toString()
        );
        return enumItem ? enumItem.label : text;
      }
      return text;
    },
  }));

  return <Table dataSource={processedData} columns={columns} />;
};

export default MyComponent;
