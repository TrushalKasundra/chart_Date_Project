import { Input, Row, Col } from "antd";
import { Layout } from "antd";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface props {
  data: any;
};

const Content: React.FC<props> = ({ data }) => {
  const [startDate, setStartDate] = useState<Date | string>("");
  const [endDate, setEndDate] = useState<Date | string>("");

  //Date Filter According to Date Range

  const filterData = data.filter((e: any) => {
    const [month, day, year] = e.date.split("/");

    let newMonth = month.padStart(2, "0");
    let newDay = day.padStart(2, "0");

    let date = `${year}-${newMonth}-${newDay}`;

    return date >= startDate && date <= endDate;
  });

  let filterClick: number = 0;

  for (let i = 0; i < filterData.length; i++) {
    filterClick += parseFloat(filterData[i]?.clicks);
  }

  let filterImpressions: number = 0;

  for (let i = 0; i < filterData.length; i++) {
    filterImpressions += parseFloat(filterData[i]?.impressions);
  }

  //css

  interface textInterface {
    fontFamily: string;
    alignItems: string;
    display: string;
    height: string;
  }

  const textStyle: textInterface = {
    fontFamily: "Manjari",
    alignItems: "center",
    display: "flex",
    height: "16px",
  };

  const iconStyle = {
    height: "32px",
    width: "32px",
    backgroundColor: "#5d1b9b",
    color: "white",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };

  return (
    <>
      <Layout style={{ marginLeft: "10px", fontFamily: "Manjari" }}>
        {/* Date input */}

        <Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
          <Col md={6} sm={8} xs={24} lg={4}>
            <Input
              type="date"
              allowClear
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
          </Col>
          <Col md={6} sm={8} xs={24} lg={4}>
            <Input
              type="date"
              allowClear
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </Col>
        </Row>

        {/* total clicks and impressions */}

        <Row gutter={[16, 16]} style={{ marginTop: "8vh" }}>
          <Col
            md={10}
            sm={12}
            xs={24}
            lg={8}
            style={{
              marginLeft: "10px",
              boxShadow: "5px 10px 10px 5px rgba(68, 68, 68, 0.1)",
            }}
          >
            <Row>
              <Col
                md={5}
                sm={6}
                xs={12}
                lg={4}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div style={iconStyle}>
                  <i className="fa fa-signal" aria-hidden="true"></i>
                </div>
              </Col>
              <Col md={10} sm={12} xs={24} lg={8}>
                <h4 style={textStyle}>Total Clicks</h4>
              </Col>
            </Row>
            <Row style={{ marginLeft: "10px" }}>
              <h1 style={{ color: "rgb(46, 49, 51)" }}>
                {filterClick.toFixed(2)}
              </h1>
            </Row>
          </Col>
          <Col
            md={10}
            sm={12}
            xs={24}
            lg={8}
            style={{
              marginLeft: "20px",
              boxShadow: "5px 10px 10px 5px rgba(68, 68, 68, 0.1)",
            }}
          >
            <Row>
              <Col
                md={5}
                sm={6}
                xs={12}
                lg={4}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <div style={iconStyle}>
                  <i className="fa fa-pie-chart" aria-hidden="true"></i>
                </div>
              </Col>
              <Col md={10} sm={12} xs={24} lg={8}>
                <h4 style={textStyle}>Total Impressions</h4>
              </Col>
            </Row>
            <Row style={{ marginLeft: "10px" }}>
              <h1 style={{ color: "rgb(46, 49, 51)" }}>{filterImpressions}</h1>
            </Row>
          </Col>
        </Row>

        {/*Chart*/}

        <Row>
          <div style={{ marginTop: "10px" }}>
            <h4>Product Trends By Month</h4>
            <LineChart width={1000} height={300} data={filterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="impressions"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
            </LineChart>
          </div>
        </Row>
      </Layout>
    </>
  );
};

export default Content;
