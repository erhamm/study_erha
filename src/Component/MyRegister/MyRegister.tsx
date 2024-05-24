import React, { useEffect, useState } from "react";
import { Form, Button, Checkbox, Input } from "antd";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../../Component/RTK/store/slice/isLogin";

type FieldType = {
  username?: string;
  password?: string;
  email?: string;
  remember?: string;
};

export default function MyRegister() {
  const [err, setErr] = useState("");
  const [hasCount, setHasCount] = useState(true);
  const [isLogin, setisLogin] = useState(false);
  
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onRegister = async (values: any) => {
    console.log("values=>", values);

    try {
      const response = await fetch(
        "http://localhost:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("注册失败,用户名或邮箱已注册");
      }
      console.log("注册成功");
      setisLogin(true);
    } catch (err) {
      setErr(err.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = async (values: any) => {
    const { username, password } = values;
    let identifier = username;
    try {
      const response = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (!response.ok) {
        throw new Error("登录失败,用户名或密码错误");
      }
      console.log("登录成功");
      setisLogin(true);
      const responseData = await response.json();
      dispatch(Login({ jwt: responseData.jwt, user: responseData.user }));
      // Log the parsed data
      console.log("Response Data:", responseData);
    } catch (err) {
      setErr(err.message);
    }
  };

  const onToregister = () => {
    setHasCount(false);
  };

  const handleGetFieldsValue = () => {
    const fieldsValue = form.getFieldsValue();
    console.log("Fields Value:", fieldsValue);
  };

  return (
    <div className="regi_div">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ username: "erha" }}
        onFinish={hasCount ? onFinish : onRegister}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        {!hasCount && (
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        {!isLogin && err && <div>Error: {err}</div>}
        {hasCount ? (
          <>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <span onClick={onToregister}>点击注册</span>
            </Form.Item>
          </>
        ) : (
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Button onClick={handleGetFieldsValue}>Get Fields Value</Button>
          </Form.Item>
        )}
      </Form>
      {isLogin && <Navigate to="/person" replace></Navigate>}
    </div>
  );
}

/* 
setFieldsValue:设置表单的值（该值将直接传入 form store 中并且重置错误信息。如果你不希望传入对象被修改，请克隆后传入）。如果你只想修改 Form.List 中单项值，请通过 setFieldValue 进行指定
setFields:设置一组字段状态
*/
