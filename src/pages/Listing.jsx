import React, { useState } from "react";
import styled from "styled-components";
import {
  Header,
  AntdTable,
  ViewNotification,
  CreatePatient,
} from "../features/Listing/components";
import { Layout, Modal } from "antd";
import { useOutletContext } from "react-router-dom";

const { Content } = Layout;

function Listing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useOutletContext();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  return (
    <ListingLayout>
      <Header showModal={showModal} showCreateModal={showCreateModal} />
      <Content>
        <Wrapper>
          <AntdTable />
          <Modal
            // title="Basic Modal"
            style={{
              top: 20,
            }}
            open={isModalOpen}
            onCancel={handleCancel}
            width={800}
            closable={false}
            okButtonProps={{ style: { display: "none" } }}
          >
            <ViewNotification />
          </Modal>
          <Modal
            style={{
              top: 20,
            }}
            open={isCreateModalOpen}
            onCancel={closeCreateModal}
            width={800}
            closable={false}
            // okButtonProps={{ style: { display: "none" } }}
            okText="Submit"
          >
            <CreatePatient />
          </Modal>
        </Wrapper>
      </Content>
    </ListingLayout>
  );
}

export default Listing;

const ListingLayout = styled(Layout)`
  margin-left: 8px;
  padding-right: 8px;
  height: auto;
  width: calc(100% - 8px);
  overflow: auto;
`;
const Wrapper = styled.div`
  margin: 0.6rem 0;
`;
