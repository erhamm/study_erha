import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

const users = [
  {
    id: 123,
    name: "香飘飘",
    phonenumber: "12345678901",
    totalorder: 10,
    totalmoney: 100,
    lastContactTime: 22,
    activitybuynum: 5,
    dailybuynum: 0,
    age: 22,
    address: "余杭区",
    tags: "已注销",
    jobtags: "前端",
    type: "待跟进",
    commit: "无",
    email: "li@alibaba.com",
  },
  {
    id: 124,
    name: "优乐美",
    phonenumber: "12345678902",
    totalorder: 20,
    totalmoney: 200,
    lastContactTime: 3,
    activitybuynum: 5,
    dailybuynum: 5,
    age: 33,
    address: "拱墅区",
    tags: "在线",
    jobtags: "后端",
    type: "待跟进",
    commit: "无",
    email: "yu@alibaba.com",
  },
  {
    id: 125,
    name: "一点点",
    phonenumber: "12345678903",
    totalorder: 0,
    totalmoney: 0,
    lastContactTime: 50,
    activitybuynum: 0,
    dailybuynum: 0,
    age: 44,
    address: "西湖区",
    tags: "离线",
    jobtags: "测试",
    type: "待跟进",
    commit: "无",
    email: "piao@alibaba.com",
  },
  {
    id: 126,
    name: "哈哈哈",
    phonenumber: "12345678901",
    totalorder: 10,
    totalmoney: 100,
    lastContactTime: 40,
    activitybuynum: 5,
    dailybuynum: 0,
    age: 22,
    address: "拱墅区",
    tags: "已注销",
    jobtags: "前端",
    type: "待跟进",
    commit: "无",
    email: "li@alibaba.com",
  },
];
// 模拟 GET 请求
mock.onGet("/api/users").reply(200, {
  // users: [],
  users: [...users],
});

// 模拟 POST 请求
mock.onPost("/api/users").reply((config) => {
  const newUser = JSON.parse(config.data);

  // 将新用户添加到 users 列表中
  users.unshift(newUser);

  // 更新模拟的 GET 请求的响应，确保返回最新的用户列表
  mock.onGet("/api/users").reply(200, { users: [...users] });

  // 返回包含新用户信息的响应
  return [201, { message: "User added successfully", user: newUser }];
});

// 模拟 PUT 请求
mock.onPut(/\/api\/users\/\d+/).reply(200, {
  message: "User updated successfully",
});

// 模拟 DELETE 请求
mock.onDelete(/\/api\/users\/\d+/).reply(200, {
  message: "User deleted successfully",
});

export default axiosInstance;
