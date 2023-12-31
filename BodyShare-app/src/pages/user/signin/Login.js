import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from "recoil/userRecoil";
import { useForm } from 'react-hook-form';
import { sportsAtom } from "recoil/sportList";
import { foodAtom } from "recoil/foodList";
import { useState } from "react";
import { isDarkAtom } from "recoil/themeRecoil";
import useCustomAxios from "components/commons/CustomAxios"

const Form = styled.form`
  grid-row: 3;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto auto auto;
`;

const Inputdiv = styled.div`
  grid-row: 1;
  width: 360px;
  height: 146.47px;
  margin: 0 auto 20px auto;
`;

const Input = styled.input`
  width: 340px;
  height: 60.75px;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 16px;
  padding-left: 15px;
`;

const StyledLink = styled(Link)`
  grid-row: 2;
  width: 355px;
  height: 30px;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  margin: 10px auto;
  text-decoration: underline;
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};

  &:visited{
  color: ${(props) => (props.isDarkMode ? 'white' : 'black')};
  }
`;

const Logindiv = styled.div`
  grid-row: 3;
  width: 390px;
  height: 90px;
  display: grid;
  grid-template-rows: auto auto;
  margin: 0 auto 0 auto;
  text-align: center;
  justify-content: center;
  align-content: end;
  gap: 10px;
`;

const LoingError = styled.p`
  grid-row: 1;
  color: red;
  height: 20px;
`;

const LoginButton = styled.button`
  grid-row: 2;
  background-color: #556fff;
  width: 355px;
  height: 60px;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  border: 1px solid rgba(135, 135, 135, 0.3);
  
  &:hover {
    cursor: pointer;
  }
`;

const ErrorP = styled.p`
  color: red;
  font-size: 10px;
`;

const Login = function () {
  const instance = useCustomAxios();
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(isDarkAtom);

  const [loginError, setLoginError] = useState("");

  const [userNo, setUserNo] = useRecoilState(userAtom);
  const [sports, setSports] = useRecoilState(sportsAtom);
  const [food, setFood] = useRecoilState(foodAtom);

  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

  const loadDB = async function () {
    try {
      const response = await instance.get('/sports');
      setSports(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

    try {
      const response = await instance.get('/food');
      setFood(response.data)
    } catch (error) {
      // 에러 처리
      console.error(error);
    }
    navigate("/home");
  };

  const onSubmit = async function (formData) {
    const { userId, password } = formData;

    try {
      const response = await instance.post('/users/signin', { userId, password });

      if (response.data.login) {
        // recoil에 userNo 담기
        setUserNo(response.data.userNo);
        loadDB();
      } else {
        // 로그인 실패
        setLoginError("아이디, 비밀번호를 확인하세요");
        setTimeout(hideMessage, 3000);
      }
    } catch (error) {
      // 에러 처리
      console.error(error);
    }

  };

  const hideMessage = () => {
    setLoginError(""); // 메시지를 초기화하여 숨깁니다.
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Inputdiv>
        <Input
          type="text"
          name="userId"
          placeholder="아이디"
          {...register('userId', {
            required: "아이디를 입력하세요",
          })}
        />
        {errors.userId && (
          <ErrorP>{errors.userId.message}</ErrorP>
        )}
        <br></br>
        <br></br>
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          {...register('password', {
            required: "비밀번호를 입력하세요",
          })}
        />
        {errors.password && (
          <ErrorP>{errors.password.message}</ErrorP>
        )}
      </Inputdiv>

      <StyledLink to="/signup" isDarkMode={isDarkMode}>회원 가입</StyledLink>

      <Logindiv>
        {loginError && <LoingError>{loginError}</LoingError>}
        <LoginButton type="submit">로그인</LoginButton>
      </Logindiv>
    </Form>
  );
};

export default Login;