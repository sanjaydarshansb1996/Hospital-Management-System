import { useState } from "react";
import "./App.css";
import { AppLayout } from "./features/layout";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, Button, Card } from "antd";
import { theme as AntdTheme } from "antd";
import themeConfig from "./utils/theme.json";
function App() {
  const [theme, setTheme] = useState("dark");
  const { defaultAlgorithm, darkAlgorithm } = AntdTheme;

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === "dark" ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <ThemeProvider
        theme={theme === "dark" ? themeConfig.dark : themeConfig.light}
      >
        <AppLayout className="loader" theme={theme} setTheme={setTheme} />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
