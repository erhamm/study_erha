import React from "react";
import { Modal, Form, Input, Select } from "antd";
const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 10 },
};

const EditUserModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  form,
  isAddingUser,
}) => {
  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        handleOk(values);
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
      title={isAddingUser ? "添加用户" : "编辑信息"}
      open={isModalOpen}
      onOk={onFinish}
      onCancel={handleCancel}
      width={340}
      okText="确定"
      cancelText="取消"
    >
      <Form form={form} style={{ width: 400 }} {...layout}>
        {isAddingUser ? null : (
          <Form.Item label="用户ID" name="id">
            <Input disabled />
          </Form.Item>
        )}
        <Form.Item
          label="姓名"
          name="name"
          rules={
            isAddingUser ? [{ required: true, message: "请输入姓名" }] : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={
            isAddingUser ? [{ required: true, message: "请输入年龄" }] : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={
            isAddingUser ? [{ required: true, message: "请输入地址" }] : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="总购买单量"
          name="totalorder"
          rules={
            isAddingUser
              ? [{ required: true, message: "请输入总购买单量" }]
              : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="总购买金额"
          name="totalmoney"
          rules={
            isAddingUser ? [{ required: true, message: "总购买金额" }] : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="未触达天数"
          name="lastContactTime"
          rules={
            isAddingUser
              ? [{ required: true, message: "请输入上次触达时间" }]
              : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="活动购买单量"
          name="activitybuynum"
          rules={
            isAddingUser
              ? [{ required: true, message: "请输入活动购买单量" }]
              : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="日常购买单量"
          name="dailybuynum"
          rules={
            isAddingUser
              ? [{ required: true, message: "请输入日常购买单量" }]
              : []
          }
        >
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="状态"
          name="tags"
          rules={
            isAddingUser ? [{ required: true, message: "请输入状态" }] : []
          }
        >
          <Select>
            <Option value="已注销">已注销</Option>
            <Option value="在线">在线</Option>
            <Option value="离线">离线</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="工作"
          name="jobtags"
          rules={
            isAddingUser ? [{ required: true, message: "请输入工作" }] : []
          }
        >
          <Select>
            <Option value="前端">前端</Option>
            <Option value="后端">后端</Option>
            <Option value="测试">测试</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="跟进状态"
          name="type"
          rules={
            isAddingUser ? [{ required: true, message: "请输入跟进状态" }] : []
          }
        >
          <Select onChange={onTypeChange}>
            <Option value="待促销">待促销</Option>
            <Option value="待触达">待触达</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
