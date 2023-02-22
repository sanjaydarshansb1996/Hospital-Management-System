import React, { useState } from "react";
import { Sider } from "./";
import { Hospital } from "../../components";
import { Outlet, useNavigate } from "react-router-dom";
import {
  BellOutlined,
  HistoryOutlined,
  LogoutOutlined,
  SettingOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import { Dropdown, Layout, Menu, Avatar } from "antd";
import { useTheme } from "styled-components";

const { Content } = Layout;

function getItem(label, key, icon, path = "/", onClick, children) {
  return {
    key,
    icon,
    children,
    path,
    label,
    onClick,
  };
}

let navItems = [
  {
    key: "nav1",
    label: "Patients Listing",
    icon: <SettingOutlined />,
    children: [
      {
        key: "/patientListing/in-patient",
        label: "In Patient",
      },
      {
        key: "/patientListing/out-patient",
        label: "Out-Patient",
      },
      {
        key: "/patientListing/medicine-billing",
        label: "Medicine Billing",
      },
      {
        key: "/patientListing/rooms-available",
        label: "Rooms Availability",
      },
     
    ],
  },
  {
    key: "/notifications",
    label: "Notifications",
    icon: <BellOutlined />,
  },

];

const AppLayout = ({ theme, setTheme }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(
    "/patientListing/in-patient"
  );
  const [selectedMenuPath, setSelectedMenuPath] = useState(
    "/patientListing/in-patient"
  );
  const navigate = useNavigate();

  const currentTheme = useTheme();

  const handleMenuClick = (props) => {
    console.log(props);
    setSelectedMenu(props.key);
    // setSelectedMenuPath(props.path);
    navigate(props.key);
    // history.pushState();
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const profileItems = [
    {
      key: "1",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      key: "2",
      label: (
        <span onClick={handleThemeToggle}>
          {currentTheme.theme_name === "dark" ? "Light " : "Dark "}
          theme
        </span>
      ),
      icon: <BgColorsOutlined />,
    },
    {
      key: "3",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      className="layout"
    >
      <Sider
        theme={theme === "dark" ? "dark" : "light"}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="80"
        onCollapse={(value) => setCollapsed(value)}
        styledtheme={currentTheme}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0,
        }}
      >
        <div className="logo">
          <Hospital className="logo-svg" />
          <div className="logo-text fade-in-text">Hospital Management System</div>
        </div>
        <Menu
          defaultSelectedKeys={[selectedMenu]}
          mode="inline"
          items={navItems}
          onClick={handleMenuClick}
          style={{ backgroundColor: currentTheme.body }}
        />

        <Dropdown menu={{ items: profileItems }}>
          <div className="logo profile-menu">
            {/* <ProfileAvathar username="Alice Morgan" className="logo-svg" /> */}
            <Avatar
              className="logo-svg"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              J
            </Avatar>
            <div className="profile-text fade-in-text">Hi John</div>
          </div>
        </Dropdown>
      </Sider>
      <Outlet context={[collapsed, setCollapsed]} />
    </Layout>
  );
};

export default AppLayout;
