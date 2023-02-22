import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Row,
  Tag,
  Badge,
  Descriptions,
  Table,
} from "antd";
import React from "react";
import styled from "styled-components";
import { AntdBreadcrumb } from "../../layout";

function ViewNotification() {
  return (
    <Container>
      <AntdBreadcrumb />
      <div className="mt-1">
        <Row justify="space-between">
          <Col>
            <h1>Patient Details</h1>
          </Col>
          <Col>
            <Row gutter={[8, 0]}>
              <Col>
                <Button icon={<DeleteOutlined />}>Delete</Button>
              </Col>
              <Col>
                <Button type="primary" icon={<EditOutlined />}>
                  Edit
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[0, 2]}>
          <Col span={24}>
            <span className="title">Created At :</span>
            <span>2022-09-01 09:01:15</span>
          </Col>
          <Col span={24}>
            <span className="title">Last updated :</span>
            <span>2022-09-01 09:01:15</span>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className="basic-details">
        <Row>
          <Col>
            <h3 className="title">Basic Details</h3>
          </Col>
        </Row>
        <div className="basic-group">
          <Col>
            <span className="title">Name : </span>
            <span> John</span>
          </Col>
          <Col>
            <span className="title">Code : </span>
            <span> P001</span>
          </Col>
          <Col>
            <span className="title">Diagnosis : </span>
            <span>Spondylolysis</span>
          </Col>
          <Col>
            <span className="title">Id : </span>
            <span> C0102</span>
          </Col>
          <Col>
            <span className="title">Status : </span>
            <Badge status="processing" text="In Treatment" />
          </Col>
        </div>
        <Row>
          <Col>
            <span className="title">Description : </span>
          </Col>
          <Col>
            <span>Pain in lower lumbar region</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="title">Pre History Illness : </span>
          </Col>
          <Col>
            <Tag>Heart Patient</Tag>
            <Tag>Lung Disorder</Tag>
            <Tag>Type 2 Diabetes</Tag>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className="doctor-list">
        <Row>
          <Col span={24}>
            <h3 className="title">Consulted Doctors</h3>
          </Col>
          <Col>
            <Tag>Dr. John</Tag>
            <Tag>Dr. Alice</Tag>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className="Report-details">
        <Row>
          <Col>
            <h3 className="title">Report Details</h3>
          </Col>
        </Row>
        <Table
          bordered
          pagination={false}
          columns={ReportDetailsColumns}
          dataSource={reportDetailsData}
        />
      </div>
      <Divider />
    
    </Container>
  );
}

export default ViewNotification;

const Container = styled.div`
  .mt-1 {
    margin-top: 1rem;
  }
  .title {
    font-weight: 500;
    margin-right: 0.5rem;
  }
  .basic-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .basic-group {
      display: grid;
      column-gap: 50px;
      row-gap: 0.8rem;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 10px 0;
    }
  }
`;

const ReportDetailsColumns = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Report Status",
    dataIndex: "reportStatus",
    key: "reportStatus",
  },
];

const reportDetailsData = [
  {
    key: "1",
    type: "X-Ray",
    reportStatus: "Positive",
  },
  {
    key: "2",
    type: "ECG",
    reportStatus: "Negative",
  },
];
