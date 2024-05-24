import React, { useEffect } from "react";
import {
  Space,
  Table,
  Tag,
  Form,
  Input,
  Button,
  Popconfirm,
  message,
} from "antd";
import axios from "./mock-user-api.js";
import EditUserModal from "./EditUserModal.jsx";
import { useSetState } from "ahooks";
import FollowUserModal from "./FollowUserModal.jsx";

const UserMenage = () => {
  const [state, setState] = useSetState({
    users: [],
    editingKey: null,
    followKey: null,
    isModalOpen: false,
    isModalFollowOpen: false,
    searchText: "",
    selectedRowKeys: [],
    isAddingUser: false,
    // type: "",
    // commit: "",
  });
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (state.followKey) {
      showFollowModal();
    }
  }, [state.followKey]);

  const fetchData = () => {
    axios
      .get("/api/users")
      .then((response) => {
        setState({ users: response.data.users });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  //编辑
  const onEdit = (record) => {
    if (state.selectedRowKeys.length > 1) {
      message.warning("不支持批量编辑，请只选择一个用户进行编辑。");
    } else {
      setState({ editingKey: record.id, isAddingUser: false });

      const userFields = [
        "id",
        "name",
        "age",
        "address",
        "tags",
        "jobtags",
        "totalorder",
        "totalmoney",
        "lastContactTime",
        "activitybuynum",
        "dailybuynum",
        "type",
      ];
      form.setFieldsValue(
        Object.fromEntries(userFields.map((field) => [field, record[field]]))
      );
      showModal();
    }
  };

  const showAddUserModal = () => {
    setState({ isAddingUser: true });
    showModal();
  };

  const showModal = () => {
    setState({ isModalOpen: true });
  };

  const handleOk = (values) => {
    if (state.isAddingUser) {
      // 添加用户
      /* 
        const newUser = {
        id: Math.floor(Math.random() * 1000),
        type: "待跟进",
        ...values,
      };
      setState((prev) => ({ users: [...prev.users, newUser] }));
      message.success("用户添加成功");
      */
      const newUser = {
        id: Math.floor(Math.random() * 1000),
        type: "待跟进",
        ...values,
      };
      setState((prev) => ({ users: [...prev.users, newUser] }));
      // axios.post("/api/users", newUser).then((response) => {
      //   if (response.status === 201) {
      //     message.success("用户添加成功");

      //     fetchData();
      //   } else {
      //     message.error("用户添加失败");
      //   }
      // });
    } else {
      // 编辑用户
      const updatedUser = {
        ...state.users.find((user) => user.id === state.editingKey),
        ...values,
      };
      const updatedUsers = state.users.map((user) =>
        user.id === state.editingKey ? updatedUser : user
      );
      axios.put(`/api/users/${state.editingKey}`, updatedUser).then(() => {
        setState({ users: updatedUsers });
        message.success("用户信息更新成功");
      });
    }
    setState({ editingKey: null });
    setState({ isModalOpen: false });
  };

  // const handleFollowOk = (values) => {
  //   console.log("Received values:", values);

  //   const updatedRecord = {
  //     type: values.type,
  //     commit: values.commit,
  //   };

  //   const updatedUsers = state.users.map((user) =>
  //     user.id === state.followKey
  //       ? { ...user, type: values.type, commit: values.commit }
  //       : user
  //   );

  //   console.log("Updated record:", updatedRecord);
  //   console.log("Updated users:", updatedUsers);

  //   axios.put(`/api/users/${state.followKey}`, updatedRecord).then(() => {
  //     setState({ users: updatedUsers, isModalFollowOpen: false });
  //     message.success("用户跟进信息更新成功");
  //   });
  // };
  const handleFollowOk = (values) => {
    console.log("Received values:", values);
    console.log("Users before update:", state.users);

    const updatedRecord = {
      type: values.type,
      commit: values.commit,
    };

    const updatedUsers = state.users.map((user) =>
      user.id === state.followKey
        ? { ...user, type: values.type, commit: values.commit }
        : user
    );

    console.log("Updated record:", updatedRecord);
    console.log("Updated users:", updatedUsers);

    axios.put(`/api/users/${state.followKey}`, updatedRecord).then(() => {
      setState({ users: updatedUsers, isModalFollowOpen: false });
      message.success("用户跟进信息更新成功");
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setState({ isModalOpen: false, isAddingUser: false });
  };

  const handleFollowCancel = () => {
    form.resetFields();
    setState({ isModalFollowOpen: false, followKey: null });
  };
  //删除
  const onConfirmDelete = async (record) => {
    try {
      if (state.selectedRowKeys.length > 0) {
        await Promise.all(
          state.selectedRowKeys.map((key) => axios.delete(`/api/users/${key}`))
        );
        setState({
          users: state.users.filter(
            (user) => !state.selectedRowKeys.includes(user.id)
          ),
        });
        setState({ selectedRowKeys: [] });
      } else {
        await axios.delete(`/api/users/${record.id}`);
        // 更新用户列表
        setState({
          users: state.users.filter((user) => user.id !== record.id),
        });
      }
      message.success("删除成功。");
    } catch (error) {
      message.error("删除失败。");
    }
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

  const showFollowModal = () => {
    if (state.followKey) {
      setState({ isModalFollowOpen: true });
    }
  };

  const onFollow = (record) => {
    if (state.selectedRowKeys.length > 1) {
      message.warning("不支持批量跟进，请只选择一个用户进行跟进。");
    } else {
      setState({ followKey: record.id });
      form.setFieldsValue({
        type: record.type,
        commit: record.commit,
      });
      showFollowModal();
    }
  };

  const columns = [
    {
      title: "用户id",
      dataIndex: "id",
      key: "id",
      fixed: "left",
      width: 80,
    },
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: 80,
    },

    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      width: 60,
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
      width: 100,
    },
    {
      title: "总购买单量",
      dataIndex: "totalorder",
      key: "totalorder",
    },
    {
      title: "总购买金额",
      dataIndex: "totalmoney",
      key: "totalmoney",
    },
    {
      title: "距离上次触达天数",
      dataIndex: "lastContactTime",
      key: "lastContactTime",
    },
    {
      title: "活动购买单量",
      dataIndex: "activitybuynum",
      key: "activitybuynum",
    },
    {
      title: "日常购买单量",
      dataIndex: "dailybuynum",
      key: "dailybuynum",
    },
    {
      title: "状态",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => {
        let color = tags === "已注销" ? "red" : "green";
        return (
          <>
            <Tag color={color} key={tags}>
              {tags}
            </Tag>
          </>
        );
      },
    },
    {
      title: "工作",
      key: "jobtags",
      dataIndex: "jobtags",
    },
    {
      title: "跟进结果",
      dataIndex: "type",
      key: "type",
      width: 100,
      render: (_, { type }) => {
        return (
          <>
            <Tag color={type && type === "待跟进" ? "red" : "green"} key={type}>
              {type}
            </Tag>
          </>
        );
      },
    },
    {
      title: "操作",
      key: "action",
      width: 250,
      fixed: "right",
      render: (_, record) => {
        return (
          <Space size="small">
            <Button onClick={() => onEdit(record)}>编辑</Button>
            <Popconfirm
              title="确定删除吗？"
              description="用户信息删除后将无法恢复，请谨慎操作！"
              okText="确定"
              cancelText="取消"
              onConfirm={() => onConfirmDelete(record)}
            >
              <Button danger>删除</Button>
            </Popconfirm>
            <Button onClick={() => onFollow(record)}>跟进</Button>
          </Space>
        );
      },
    },
  ];
  //搜索
  const onSearch = (value) => {
    setState({ searchText: value });
  };

  const filteredUsers = state.users.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(state.searchText.toLowerCase())
    )
  );

  //多选框
  const onSelectChange = (selectedKeys) => {
    setState({ selectedRowKeys: selectedKeys });
  };

  const rowSelection = {
    selectedRowKeys: state.selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <>
      <Input.Search
        placeholder="请输入搜索"
        onSearch={onSearch}
        allowClear
        style={{
          width: 300,
          paddingBottom: 10,
        }}
      />
      <Button onClick={showAddUserModal}>添加用户</Button>
      <Table
        scroll={{
          x: 1500,
          y: 300,
        }}
        rowSelection={rowSelection}
        dataSource={filteredUsers.map((user) => ({
          ...user,
          form: form,
          key: user.id,
        }))}
        columns={columns}
      />
      <EditUserModal
        isModalOpen={state.isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        form={form}
        isAddingUser={state.isAddingUser}
      />
      <FollowUserModal
        isModalFollowOpen={state.isModalFollowOpen}
        handleFollowOk={handleFollowOk}
        handleFollowCancel={handleFollowCancel}
        form={form}
      />
    </>
  );
};
export default UserMenage;
