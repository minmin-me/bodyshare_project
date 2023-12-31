import styled from "styled-components";
import Card from "components/commons/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomAxios from "components/commons/CustomAxios"

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  max-height: 450px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 370px;
`;

const Not = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 300px;
  max-height: 450px;
  overflow-y: hidden;
`;

const Middle = function ({ searchItemList }) {
  const instance = useCustomAxios();
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const commuList = async function () {
    try {
      const response = await instance.get(`/community/byinterest/${searchItemList[0].no}`)
      setList(response.data);
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
  };

  useEffect(() => {
    commuList();
  }, [searchItemList]);

  return (
    <>
      <Group>
        {list ? list.length > 0 ? list.map((community, index) => (
          <Card
            key={index}
            img={`${process.env.REACT_APP_IMAGE_SERVER}/communitys/${community.profileImageUrl}`}
            title={community.communityName}
            contents={community.intro}
            tagtitle={community.sportsName}
            footer={`${community.userCount}명의 회원이 가입함`}
            onClick={() => navigate(`/community/commuIn/${community.communityNo}`)}
          />
        )) : <Not>{searchItemList[0].name}에 알맞은 커뮤니티가 존재하지 않습니다.</Not> : <Not>{searchItemList[0].name}에 알맞은 커뮤니티가 존재하지 않습니다.</Not>}
      </Group>
    </>
  );
};

export default Middle;