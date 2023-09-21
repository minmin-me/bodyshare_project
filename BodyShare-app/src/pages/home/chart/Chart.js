import React from "react";
import styled from "styled-components";
import { Chart } from "react-google-charts";
import { Link, useNavigate } from "react-router-dom";
import { atom, selector } from 'recoil';
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:33000/api";
const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
}); 

const ChartBox = styled.div`
  grid-row: 2;
  display: flex;
  width: 370px;
  height: 280px;
  border-radius: 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  place-items: center;
`;

const ChartContainer = styled.div`
  width: 180px;
  height: 270px;
  background-color: white;
  border-radius: 30px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  cursor: pointer;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

const Charts = function () {
  const navigate = useNavigate();

  const chartData2 = [
    ["작업", "하루 시간"],
    ["탄", 3],
    ["단", 5],
    ["지", 2],
  ];

  const chartOptions2 = {
    title: "Calorie",
    pieHole: 0.4,
    titleTextStyle: {
      fontSize: 16,
    },
  };

  const chartData = [
    ["", "운동 분"],
    ["월", 60],
    ["화", 45],
    ["수", 30],
    ["목", 75],
    ["금", 90],
    ["토", 120],
    ["일", 60],
  ];

  const chartOptions = {
    legend: { position: "none" },
    chart: {
      title: "Daily Diet",
    },
  };
  /*
  const Charts = function () {
  const navigate = useNavigate();

  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);

  useEffect(() => {
    const chartDatas = async () => {
      try {
        // 스포츠 차트 데이터 가져오기
        const sportsResponse = await axios.get(`/api-server/sport/${userId}`);
        const sportsData = sportsResponse.data;
        setChartData(sportsData);

        // 푸드 차트 데이터 가져오기
        const foodResponse = await axios.get(`/api-server/food/${userId}`);
        const foodData = foodResponse.data;
        setChartData2(foodData);
      } catch (error) {
        console.error("차트 데이터를 불러오는 데 실패했습니다.", error);
      }
  };

  chartDatas();
}, [userId]);

 return (
    <ChartBox>
      {chartData.map((chart, index) => (
        <ChartContainer
          key={index}
          onClick={() => {
            navigate(`/analysis/sportschart/${chart.id}`);
          }}
        >
          <Chart
            chartType="Bar"
            width="170px"
            height="240px"
            data={chart.data}
            options={chart.options}
            graph_id={`sports-chart-${chart.id}`}
            border-radius="30px"
          />
        </ChartContainer>
      ))}
      {chartData2.map((chart, index) => (
        <ChartContainer
          key={index}
          onClick={() => {
            navigate(`/analysis/foodchart/${chart.id}`);
          }}
        >
          <Chart
            chartType="PieChart"
            width="170px"
            height="240px"
            data={chart.data}
            options={chart.options}
            graph_id={`food-chart-${chart.id}`}
            border-radius="30px"
          />
        </ChartContainer>
      ))}
    </ChartBox>
  );
};
*/

  return (
    <ChartBox>
      <ChartContainer
        onClick={() => {
          navigate("/analysis/sportschart");
        }}
      >
        <Chart
          chartType="Bar"
          width="170px"
          height="240px"
          data={chartData}
          options={chartOptions}
          graph_id="barchart2"
          border-radius="30px"
        />
      </ChartContainer>
      <ChartContainer
        onClick={() => {
          navigate("/analysis/foodchart");
        }}
      >
        <Chart
          chartType="PieChart"
          width="170px"
          height="240px"
          data={chartData2}
          options={chartOptions2}
          graph_id="donutchart"
          border-radius="30px"
        />
      </ChartContainer>
    </ChartBox>
  );
};

export default Charts;
