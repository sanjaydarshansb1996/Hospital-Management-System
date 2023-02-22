import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import { AntdBreadcrumb } from "../../layout";

function Header({ showModal, showCreateModal }) {
  return (
    <HeaderBox>
      <Row justify="space-between" style={{ marginBottom: "0.8rem" }}>
        <Col span={12}>
          <h2>In Patient</h2>
          <AntdBreadcrumb />
        </Col>
        <Col span={12}>
          <div className="icon-group">
            <Button onClick={showModal}>Edit Patient Details</Button>
            <Button type="primary" onClick={showCreateModal}>
              Add new Patient
            </Button>
          </div>
        </Col>
      </Row>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  min-height: 4rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1rem 1.5rem;
  .icon-group {
    display: flex;
    justify-content: right;
    align-items: center;
    height: 100%;
    gap: 0.5rem;
  }
`;
export default Header;
