import styled from "styled-components";
import backButton from "assets/Img/back.png";
import plus from "assets/Img/check.png"
import Button from "components/commons/Button"
import { useNavigate } from "react-router-dom";
import SearchCate from 'pages/mypage/intermod/SearchCate';
import ResultCate from 'pages/mypage/intermod/ResultCate';

const Container = styled.div`
  padding: 10px 20px;
`;

const PreviousButton = styled.button`
  margin-top: 3px;
  grid-row: 1;
  width: 20px;
  height: 20px;
  background-image: url(${backButton});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const InterestModify = function () {
  const navigate = useNavigate();

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/mypage/modify")} />
      <SearchCate />
      <ResultCate />
      <Button
        name="선택완료"
        img={plus}
        width="200px"
        display="block"
        ml="auto"
        mt="15px"
        onClick={() => navigate("/mypage/modify")}
      />
    </Container>
  );
};

export default InterestModify;