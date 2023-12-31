import styled from "styled-components";

const Titlej = styled.div`
  border-radius: 15px 0px 0px 15px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 60px;
  text-align: center;
  line-height: 45px;
  color: black;
`;

const Bodydetail = styled.div`
  display: grid;
  grid-template-columns: 60px auto 50px;
  justify-content: center;
  margin-right: 15px;
`;

const BInput = styled.input`
  width: 50px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  padding-left: 10px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BodyP = styled.div`
  border-radius: 0px 15px 15px 0px;
  background-color: #FFFFFF;
  border: 1px solid rgba(135, 135, 135, 0.3);
  font-size: 13px;
  width: 50px;
  text-align: center;
  line-height: 45px;
  color: black;
`;

const Warn = styled.p`
  margin-top: 7px;
  font-size: 11px;
  color: red;
  margin-left: 15px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  width: 260px;
`;

const Weight = function ({ weight, register, errors }) {

  return (
    <>
      <Bodydetail>
        <Titlej>몸무게</Titlej>
        <BInput
          {...register("weight", {
            required: "몸무게를 작성해주세요",
            pattern: {
              value: /^\d{2,3}(\.\d{0,1})?$/,
              message: "2~3자리 숫자, 소수점 포함 3~4자리 숫자"
            }
          })}
          defaultValue={weight}
          placeholder={weight}
        />
        <BodyP>kg</BodyP>
        <Warn>{errors.weight?.message}</Warn>
      </Bodydetail>
    </>
  )
};

export default Weight;