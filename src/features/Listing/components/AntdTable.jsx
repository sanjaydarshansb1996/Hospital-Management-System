import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Table,
  Input,
  Select,
  Popover,
  Button,
  Space,
  Tag,
} from "antd";
import styled from "styled-components";
import {
  SettingOutlined,
  ColumnHeightOutlined,
  ReloadOutlined,
  CopyOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import VisibleColumnTree from "./tree/VisibleColumnTree";
import { useTheme } from "styled-components";
const generatePriorityTags = (tags) => {
  let tagComponents = [];
  tags.map((tag) => {
    switch (tag) {
      case "high":
        tagComponents.push(
          <Tag key={tag} color="red">
            High
          </Tag>
        );
        break;
      case "medium":
        tagComponents.push(
          <Tag key={tag} color="orange">
            Medium
          </Tag>
        );
        break;
      case "low":
        tagComponents.push(
          <Tag key={tag} color="lime">
            Log
          </Tag>
        );
        break;
      default:
        tagComponents.push(<Tag key={tag}>{tag}</Tag>);
    }
  });
  return tagComponents;
};

const columns = [
  {
    title: "Patient Id",
    width: 70,
    dataIndex: "id",
    key: "id",
    align: "right",
    hidden: false,
  },
  {
    title: "Patient Name",
    width: 150,
    dataIndex: "name",
    key: "name",
    // render: (text) => (
    //   <div style={{ display: "flex", columnGap: "25px" }}>
    //     {text} <CopyOutlined />
    //   </div>
    // ),
    hidden: false,
  },
  {
    title: "Diagnosis",
    width: 200,
    dataIndex: "diagnosis",
    key: "diagnosis",
    align: "left",
    hidden: false,
    ellipsis: "true",
  },
  {
    title: "Treatment",
    dataIndex: "treatment",
    key: "treatment",
    width: 150,
    hidden: false,
  },
  {
    title: "Room No",
    dataIndex: "roomno",
    key: "roomno",
    width: 150,
    hidden: false,
  },
  {
    title: "Priority",
    dataIndex: "dname",
    key: "dname",
    width: 150,
    hidden: false,
    render: (tags) => (
      <div style={{ display: "flex", columnGap: "25px" }}>
        {generatePriorityTags(tags)}
      </div>
    ),
  },
  {
    title: "Action",
    key: "operation",
    width: 100,
    // dataIndex: "action",
    hidden: false,
    render: (_, record) => (
      <Space size="middle">
        <a key="eidt">Edit</a>
        <a key="delete">Delete</a>
      </Space>
    ),
  },
];

const { Option } = Select;
const { Search } = Input;

const onSearch = (value) => {
  console.log(`searched ${value}`);
};

const data = [];

// Generate some random data set!
for (let i = 0; i < 100; i++) {
  data.push({
    id: i + 1,
    key: i,
    name: `Patient ${i}`,
    diagnosis: "Spondylolisthesis",
    treatment: `Treament Procedure ${i}`,
    roomno: `Room_${i}`,
    dname: ["medium"],
  });
}
const AntdTable = () => {
  const [columnData, setColumnData] = useState([]);
  const [tableSize, setTableSize] = useState("default");
  const currentTheme = useTheme();
  const handleReset = () => {
    setColumnData(columns);
  };
  const ColumnSettings = (
    <>
      <Button
        style={{
          width: "100%",
          marginLeft: "auto",
        }}
        type="text"
        onClick={handleReset}
        icon={<ClearOutlined />}
      >
        Rest Columns
      </Button>

      <SmallTitle>Visible Columns</SmallTitle>
      <VisibleColumnTree
        columnData={columnData}
        setColumnData={setColumnData}
      />
    </>
  );
  useEffect(() => {
    setColumnData(columns);
  }, []);
  return (
    <TableWrapper>
      <Row justify="space-between" style={{ marginBottom: "0.8rem" }}>
        {/* <Col style={{ display: "flex" }}>
          <div className="table-title"></div>
        </Col> */}

        <Row gutter={[8, 0]}>
          <Col>
            <Select
              showSearch
              style={{
                width: 160,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => option.children.includes(input)}
            >
              <Option value="1">Today</Option>
              <Option value="2">This Week</Option>
              <Option value="3">Last Week</Option>
              <Option value="4">This Month</Option>
              <Option value="5">Last 30 Days</Option>
              <Option value="6">Last 90 Days</Option>
            </Select>
          </Col>
          <Col>
            <Search
              placeholder="Search Patient"
              allowClear
              onSearch={onSearch}
              style={{ width: 200 }}
            />
          </Col>
        </Row>

        <Row gutter={[8, 0]}>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              margin: "0 0.5rem",
            }}
          >
            <Select
              // size="small"
              style={{
                width: "100px",
              }}
              // defaultValue="small"
              onChange={(size) => {
                setTableSize(size);
              }}
              placeholder="Size"
            >
              <Option value="small">Small</Option>
              <Option value="middle">Middle</Option>
              <Option value="defalut">Default</Option>
            </Select>
            <ReloadOutlined className="table-tool-icons" />

            <Popover
              placement="rightTop"
              trigger={"click"}
              arrowPointAtCenter
              content={ColumnSettings}
              title={"Column Order"}
            >
              <SettingOutlined className="table-tool-icons" />
            </Popover>
          </Col>
        </Row>
      </Row>
      {/* <SingleLevelTree /> */}
      <Table
        // bordered
        columns={columnData.filter((data) => !data.hidden)}
        dataSource={data}
        size={tableSize}
        pagination={{ position: ["bottomCenter"] }}
        scroll={{
          x: "1500px",
          // y: "70",
        }}
        style={{
          border: `1px solid ${currentTheme.grayShade10}`,
        }}
      />
    </TableWrapper>
  );
};

export default AntdTable;

const TableWrapper = styled.div`
  padding: 20px 20px 20px 20px;
  background: ${(props) => props.theme.body};
  .table-title {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .table-tool-icons {
    color: ${(props) => props.theme.text};
    font-size: 16px;
  }
`;

const SmallTitle = styled.div`
  color: #999;
  margin: 0.4rem 0.8rem;
`;
