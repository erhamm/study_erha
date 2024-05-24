import { Col, Row } from "antd";

import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import React from "react";

const items: DescriptionsProps["items"] = [
  {
    label: "Product",
    children: "Cloud Database",
  },
  {
    label: "Billing",
    children: "Prepaid",
  },
  {
    label: "Time",
    children: "18:00:00",
  },
];

const Dashboard: React.FC = () => {
  return (
    <Row gutter={26}>
      <Col span={22}>
        <div style={{ backgroundColor: "#00aaff", height: "50px" }}>
          Column 1
        </div>
      </Col>
      <Col span={22} offset={8}>
        <div style={{ backgroundColor: "#ffaa00", height: "50px" }}>
          Column 2
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
