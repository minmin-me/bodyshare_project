import styled from "styled-components";
import ChartBox from "pages/home/chart/Chart";
import Record from "pages/home/record/Record";
import CommunityRe from "pages/home/communityre/CommunityRe";
import axios from "axios";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 10px;
  text-align: center;
  padding: 5px 10px;
`;

const MainHome = function () {
  const check = async function (){
    const result = await instance.get("/users/checksession");
    if(!result.data.check)
    {
      localStorage.removeItem('recoil-persist');
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <Container>
      <Record />
      <ChartBox />
      <CommunityRe />
    </Container>
  );
};

export default MainHome;
