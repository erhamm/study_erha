import React from "react";
import { Modal, Form, Input, Select } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 },
};
//跟进状态
const options = [
  "待触达",
  "待促销",
  "活动重度用户",
  "日常购买用户",
  "批发",
  "个人",
];
const FollowUserModal = ({
  isModalFollowOpen,
  handleFollowOk,
  handleFollowCancel,
  form,
}) => {
  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        handleFollowOk(values);
      })
      .catch((error) => {
        console.error("表单验证失败:", error);
      });
  };
  const onTypeChange = (value) => {
    form.setFieldsValue({ type: value });
  };
  return (
    <Modal
      title="客户跟进1"
      open={isModalFollowOpen}
      onOk={onFinish}
      onCancel={handleFollowCancel}
      width={400}
    >
      <Form form={form}>
        <Form.Item name="type" label="客户类型">
          <Select
            mode="tags"
            style={{
              width: 200,
            }}
            placeholder="请输入客户类型"
            // value={state.type}
            allowClear
            // onChange={(newValue) => setState({ type: newValue })}
          >
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="commit" label="跟进备注">
          <Input.TextArea
            rows={4}
            allowClear
            // value={state.commit}
            // onChange={(e) => setState({ commit: e.target.value })}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FollowUserModal;
