import {
  DeleteOutlined,
  EditOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Col, Select, Row, Form, Input, Checkbox, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { AntdBreadcrumb } from "../../layout";

function CreatePatient() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("required");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  const layout = {
    labelCol: {
      span: 24,
      md: 24,
      lg: 24,
      xl: 24,
      xxl: 24,
    },
    wrapperCol: {
      span: 24,
      md: 24,
      lg: 24,
      xl: 24,
      xxl: 24,
    },
  };
  return (
    <Container>
      <AntdBreadcrumb />
      <div className="mt-1">
        <Row justify="space-between">
          <Col>
            <h1>Create New Patient</h1>
          </Col>
        </Row>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark,
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
          {...layout}
          onFinish={(values)=>{
console.log("form values",values);
          }}
        >
          <Form.Item label="Patient Id" required tooltip="This is a required field">
            <Input style={{ width: "300px" }} placeholder="Eg: P01" />
          </Form.Item>
          <Form.Item label="Patient Name" required tooltip="This is a required field">
            <Input style={{ width: "300px" }} placeholder="Eg: Jone Doe" />
          </Form.Item>
          <Form.Item
            label="Diagnosis"
            required
            tooltip="This is a required field"
          >
            <Input.TextArea placeholder="Eg: Fever" />
          </Form.Item>
          <Form.Item name="properties" label="Properties">
            <Checkbox.Group>
              <Row gutter={[24, 0]}>
                <Col>
                  <Checkbox value="positive" style={{ lineHeight: "32px" }}>
                    Covid Positive
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="Diabetic" style={{ lineHeight: "32px" }}>
                    Diabetic
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox value="Heart" style={{ lineHeight: "32px" }}>
                    Heart Patient
                  </Checkbox>
                </Col>
                <Col>
                  <Checkbox
                    value="Lung"
                    style={{ lineHeight: "32px" }}
                  >
                    Chronic Lung Disorder
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="patientType"
            label="Type"
            rules={[{ required: true }]}
            tooltip="This is a required field"
            required={false}
          >
            <Select
              style={{ width: "300px" }}
              placeholder="Select patient type"
              onChange={() => console.log("form changed")}
              allowClear
            >
              <Option value="in">In-Patient</Option>
              <Option value="out">Out-Patient</Option>
              <Option value="op">OP-Patient</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="delivery-channel"
            label="Room No"
            rules={[
              {
                required: true,
                message: "Please select Room No",
                type: "array",
              },
            ]}
          >
            <Select
              mode="multiple"
              placeholder="Please select Room No"
            >
              <Option value="r1">Room 1</Option>
              <Option value="r2">Room 2</Option>
              <Option value="r3">Room 3</Option>
            </Select>
          </Form.Item>
          <Form.List name="medicine-list" label="Medicines List">
            {(fields, { add, remove }) => (
              <Form.Item label="Medicines List">
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", flexGrow: "1" }}
                    align="baseline"
                    // block={true}
                    wrap={true}
                  >
                    <Form.Item
                      {...restField}
                      name={[name, "type"]}
                      rules={[
                        {
                          // required: true,
                          // message: "Missing first name",
                          // type: "array",
                        },
                      ]}
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <Select placeholder="Select type">
                        <Option value="heart">Heart</Option>
                        <Option value="lung">Lung</Option>
                        <Option value="diabetes">Diabetes</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "recipients"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing recipients",
                          type: "array",
                        },
                      ]}
                      style={{
                        marginBottom: "0.5rem",
                        justifySelf: "stretch",
                        minWidth: "300px",
                        flexGrow: "1",
                        marginLeft: "auto",
                      }}
                    >
                      <Select
                        mode="multiple"
                        placeholder="Please select relevant medicines"
                      >
                        <Option value="cardace">Cardace</Option>
                        <Option value="insulin">
                           Insulin
                        </Option>
                        <Option value="asthaline">Asthaline</Option>
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    // block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </Form.Item>
            )}
          </Form.List>
          <Form.Item
          wrapperCol={{
            span: 16
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {/* <Button onClick={resetFilter} htmlType="reset">
              Reset
            </Button> */}
          </Space>
        </Form.Item>
        </Form>
      </div>
    </Container>
  );
}

export default CreatePatient;

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
