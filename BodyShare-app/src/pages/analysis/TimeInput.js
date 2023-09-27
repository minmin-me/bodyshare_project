import React from 'react';
import styled from "styled-components";
import previous from "assets/Img/Previous.png";
import Button from "components/commons/Button";
import plus from "assets/Img/buttonplus.png";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { sportTimeState } from "recoil/sportTime";
import { selectedSportNameState } from 'recoil/sportList'; 

const TimeInputContainer = styled.div`
  display: grid;
  margin: auto;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 5px;
  width: 360px;
`;

const PreviousButton = styled.img`
  grid-row: 1;
  width: 21px;
  height: 21px;
  margin-top: 10px;
  cursor: pointer;
`;

const SportTitle = styled.div`
  grid-row: 2;
`;

const Line = styled.div`
  width: 360px;
  height: 2px;
  margin-top: 20px;
  background-color: rgba(135, 135, 135, 0.3);
`;

const SportDate = styled.div`
  grid-row: 3;
  height: 44px;
`;

const P = styled.p`
  display: inline-block;
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
`;

const BoxContainer = styled.div`
  float: right;
`;

const Box = styled.div`
  width: 210px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  text-align: center;
  line-height: 44px;
  margin-left: 10px;
`;

const SportTime = styled.div`
  grid-row: 4;
`;

const SmallBox = styled.input`
  float: right;
  width: 205px;
  height: 44px;
  background-color: rgba(85, 111, 255, 0.3);
  border-radius: 15px;
  border: none;
  text-align: center;
`;

const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  float: left;
`;

const SmallLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: rgba(135, 135, 135, 0.3);
  float: left;
  margin-right: 10px;
`;

const SportName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

const TimeInput = function () {
  const navigate = useNavigate();
  const [sportTime, setSportTime] = useRecoilState(sportTimeState); //시간 recoil에 저장
  const selectedSportName = useRecoilValue(selectedSportNameState);
  const today = new Date().toLocaleDateString();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

  // 숫자 3자리 제한해준다.
  if (/^\d{0,3}$/.test(value)) {
    setSportTime((prevSportTime) => ({
      ...prevSportTime,
      [name]: value,
    }));
  }
  };
  
  return (
    <>
      <TimeInputContainer>
        <PreviousButton src={previous} onClick={() => navigate('/analysis')}></PreviousButton>
        
        <SportTitle>
          {/* <Category>유산소</Category> */}
          {/* <SmallLine></SmallLine> */}
          <SportName>{selectedSportName}</SportName>
          <Line></Line>
        </SportTitle>
        <SportDate>
          <P>날짜</P>
          <BoxContainer>
            <Box>{today}</Box>
          </BoxContainer>
        </SportDate>
        <SportTime>
          <P>운동한 시간</P>
          <SmallBox
            type="text"
            maxLength="3"
            name="hours" 
            value={sportTime.hours} 
            onChange={handleInputChange} 
          />
        </SportTime>
      </TimeInputContainer> 

      <Button
          name="입력하기"
          img={plus}
          ml="auto"
          mt="130px"
          width="150px"
          display="block"
          onClick={() => navigate('/analysis')}
      />     
    </>
  );
};

export default TimeInput;
