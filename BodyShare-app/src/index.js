import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styled from "styled-components";
import { RecoilRoot } from "recoil";

const Container = styled.div`
  max-width: 390px;
  max-height: calc(100vh - 65px);
  margin: 0 auto;
  overflow-x: hidden;

  @media screen and (max-width: 390px) {
    width: 100%;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <Container>
      <App />
    </Container>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
