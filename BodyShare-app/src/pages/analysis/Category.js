import { useEffect, useState } from "react";
import styled from "styled-components";
import Record from "./record/Calendar";
import SportHome from "./sportchart/SportChart";
import FoodHome from "./foodchart/FoodChart";

const Container = styled.div`
  margin-bottom: 30px;
`;

const Tab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  font-weight: bold;
`;

const Tab1 = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 50px;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};
  
  &:hover{
    background-color: rgba(85,111,255,0.3);
  }
`;

const Tab2 = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};

  &:hover{
    background-color: rgba(85,111,255,0.3);
  }
`;

const Tab3 = styled.div`
  display: grid;
  place-items: center;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border-radius: 23px 23px 0 0;
  background-color: ${(props) => props.bg};
  border-bottom: ${(props) => props.under};

  &:hover{
    background-color: rgba(85,111,255,0.3);
  }
`;

const Text = styled.span`
  color: ${(props) => props.color};
`;

const Category = function () {
  const [Calender, setCalender] = useState(true);
  const [SportChart, setSportChart] = useState(false);
  const [FoodChart, setFoodChart] = useState(false);

  const showCalender = async () => {
    setCalender(true);
    setSportChart(false);
    setFoodChart(false);
  };

  const showSportChart = async () => {
    setCalender(false);
    setSportChart(true);
    setFoodChart(false);
  };

  const showFoodChart = async () => {
    setCalender(false);
    setSportChart(false);
    setFoodChart(true);
  };

  useEffect(() => {
    showCalender();
  }, []);

  return (
    <Container>
      <Tab>
        <Tab1
          onClick={showCalender}
          bg={Calender ? "rgba(85,111,255,0.3)" : "white"}
          under={Calender ? "2px solid #556FFF" : "2px solid rgba(0,0,0,0.25)"}
        >
          <Text color={Calender ? "#556FFF" : "rgba(0,0,0,0.2)"}>기록</Text>
        </Tab1>
        <Tab2
          onClick={showSportChart}
          bg={SportChart ? "rgba(85,111,255,0.3)" : "white"}
          under={SportChart ? "2px solid #556FFF" : "2px solid rgba(0,0,0,0.25)"}
        >
          <Text
            color={SportChart ? "#556FFF" : "rgba(0,0,0,0.2)"}
          >
            운동
          </Text>
        </Tab2>
        <Tab3
          onClick={showFoodChart}
          bg={FoodChart ? "rgba(85,111,255,0.3)" : "white"}
          under={FoodChart ? "2px solid #556FFF" : "2px solid rgba(0,0,0,0.25)"}
        >
          <Text
            color={FoodChart ? "#556FFF" : "rgba(0,0,0,0.2)"}
          >
            식단
          </Text>
        </Tab3>
      </Tab>
      {Calender ? <Record /> : null}
      {SportChart ? <SportHome /> : null}
      {FoodChart ? <FoodHome /> : null}
    </Container>
  );
};

export default Category;