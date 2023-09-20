import "./App.css";
import { Layout } from "antd";
import SiderContent from "./Sider";
import Content from "./Content";
import data from "./data.json";

function App() {
  return (
    <>
      <Layout>
        <SiderContent />
        <Content data={data} />
      </Layout>
    </>
  );
}

export default App;
