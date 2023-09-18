import React, { useState } from 'react';
import styled from "styled-components";

const ResultList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

const ResultButton = styled.button`
  margin-top: 10px;
  background-color: ${(props) => (props.active ? props.hoverColor : 'white')};
  border: none;
  border-radius: 15px;
  padding-top: 40px;
  cursor: pointer;
  transition: background-color 0.2s; 

  &:hover {
    background-color: ${(props) => (props.active ? props.hoverColor : 'white')};
  }
`;

const RP = styled.p`
  font-size: 17px;
  text-align: left;
  margin-bottom: 10px;
`;

const Line = styled.div`
  width: 340px;
  border: 1px solid rgba(135, 135, 135, 0.3);
`;

const ResultCate = function () {
  
  const [buttonStates, setButtonStates] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
  });

  const handleButtonClick = (buttonName) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return(
    <>
      <ResultList>
        <ResultButton 
          active={buttonStates.button1} 
          onClick={() => handleButtonClick('button1')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
            <RP>김치</RP>
            <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button2}
          onClick={() => handleButtonClick('button2')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>닭가슴살</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button3}
          onClick={() => handleButtonClick('button3')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>바나나</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button4}
          onClick={() => handleButtonClick('button4')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>계란</RP>
          <Line></Line>
        </ResultButton>
        <ResultButton
          active={buttonStates.button5}
          onClick={() => handleButtonClick('button5')}
          hoverColor="rgba(85, 111, 255, 0.7)"
        >
          <RP>김밥</RP>
          <Line></Line>
        </ResultButton>
      </ResultList>
    </>
  )
};

export default ResultCate