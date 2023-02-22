import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import { useTheme } from "styled-components";
const { Sider } = Layout;
function Sidebar({ ...props }) {
  return <StyledSider {...props} />;
}

const StyledSider = styled(Sider)`
  background-color: ${(props) => `${props.styledtheme.body} !important`};
  color: ${(props) => props.styledtheme.text};
  .ant-menu.ant-menu-root {
    background-color: ${(props) => props.styledtheme.body};
  }

  .ant-menu.ant-menu-sub {
    background-color: ${(props) => props.styledtheme.body};
  }
  .ant-layout-sider-trigger {
    background-color: ${(props) => props.styledtheme.body};
    color: ${(props) => props.styledtheme.text};
  }
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }

  .logo {
    padding: 1rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: ${(props) => (props.collapsed === true ? "0" : "0.8rem")};

    .logo-svg {
      min-width: 2.2rem;
    }
    .logo-text {
      font-size: 0.7rem;
      width: 76px;
      font-weight: 600;
      color: ${(props) => props.styledtheme.text};
      overflow: hidden;
      display: ${(props) => props.collapsed && "none"};
    }
  }

  .profile-menu {
    margin-top: auto;
    gap: 0.5rem;
    padding-top: 0;
    overflow: hidden;
    .profile-text {
      font-size: 1rem;
      white-space: nowrap;
      display: ${(props) => props.collapsed && "none"};
    }
  }

  .fade-in-text {
    font-size: 60px;
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .ant-tooltip {
    display: none;
  }
`;

export default Sidebar;
