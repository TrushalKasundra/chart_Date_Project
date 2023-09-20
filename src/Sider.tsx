import { Layout } from "antd";
const { Sider } = Layout;

const SiderContent = () => {
  return (
    <>
      <Sider
        style={{
          backgroundColor: "LightGray",
          fontFamily: "Manjari",
        }}
      >
        <div style={{ marginLeft: "10px" }}>
          <h1 style={{ color: "#5d1b9b" }}>Dashboard</h1>
          <div style={{ opacity: "0.6" }}>
            <h4>Analytical</h4>
            <h4>ECommerce</h4>
            <h4>Notes</h4>
            <h4>Calender</h4>
            <h4>Extras</h4>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default SiderContent;
