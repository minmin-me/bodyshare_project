import styled from "styled-components";
import searchImg from "assets/Img/search.png"
import previous from "assets/Img/Previous.png";
import plus from "assets/Img/buttonplus.png";
import Button from "components/commons/Button";
import Tag from "components/commons/Tag";
import ResultList from "pages/analysis/sportsearch/ResultList";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { sportsAtom } from "recoil/sportList";
import { useEffect, useState } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33000/api",
  withCredentials: true
});

const Container = styled.div`
  width: 95%;
  padding: 10px 20px;
`;

const PreviousButton = styled.button`
  margin-top: 3px;
  grid-row: 1;
  width: 20px;
  height: 20px;
  background-image: url(${previous});
  background-size: cover;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const SearchInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 250px;
  height: 45px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  text-align: center;
  padding: 0 10px;
`;

const Search = styled.img`
  margin: auto;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const SportSearch = function() {
  const navigate = useNavigate();

  const [sportsList, setSportsList] = useRecoilState(sportsAtom);
  const [sportsTag, setSportsTag] = useState('전체'); // 초기값은 전체로
  const [search, setSearch] = useState("");

  const sportsDB = async function(){
    try {
      const response = await instance.get('/sports');
      setSportsList(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  useEffect(() => {
    sportsDB();
  }, []);

  // 태그에 맞게 운동 리스트들이 나오도록 함
  const hadleTagfilter = (tag) => {
    setSportsTag(tag);
    
  };

  // 검색기능 추가 ---
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterSportsList = sportsList.filter((sports) => {
    const TagResult = sportsTag === '전체' || sports.category === sportsTag;
    const SearchResult = sports.name.includes(search);
    return TagResult && SearchResult;
  });

  return (
    <Container>
      <PreviousButton onClick={() => navigate("/analysis")} />
      <SearchInput>
        <Search src={searchImg} />
        <Input type="text" placeholder="찾으시는 운동을 검색해주세요" onChange={handleSearch}/>
      </SearchInput>
      <CategoryList>
        <Tag tagtitle="전체" width="80px" height="36px" br="13px" onClick={() => hadleTagfilter('전체')}/>
        <Tag tagtitle="근력" width="80px" height="36px" br="13px" onClick={() => hadleTagfilter('근력')}/>
        <Tag tagtitle="유산소" width="80px" height="36px" br="13px" onClick={() => hadleTagfilter('유산소')}/>
        <Tag tagtitle="기타" width="80px" height="36px" br="13px" onClick={() => hadleTagfilter('기타')}/>
      </CategoryList>
      
      <ResultList sportsList={filterSportsList}/>

      <Button
        name="선택하기"
        img={plus}
        width="180px"
        display="block"
        ml="auto"
        mt="30px"
        onClick={() => navigate("/analysis/add/time")}
      />
    </Container>
  );
};


export default SportSearch;