import React, { useState } from "react";
import styled from "styled-components";

import { TYPE, STATUS } from "./const";

const Input = ({ hanldeAddTodo }) => {
  const [type, setType] = useState(TYPE.STUDY);
  const [label, setLabel] = useState("");

  const handleChangeType = event => setType(event.target.value);

  const handleChangeLabel = event => setLabel(event.target.value);

  const handleSubmit = () => {
    hanldeAddTodo({ type, label, status: STATUS.YET });
    setLabel("");
    setType(TYPE.STUDY);
  };
  return (
    <Wrapper>
      <Container>
        <TypeSelector onChange={handleChangeType} defaultValue={TYPE.STUDY}>
          {Object.entries(TYPE).map(([key, value]) => (
            <Option value={value}>{value}</Option>
          ))}
        </TypeSelector>
        <LabelArea>
          <Label onChange={handleChangeLabel} value={label} />
        </LabelArea>
        <Button onClick={() => handleSubmit()}>추가하기</Button>
      </Container>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  background: white;
  border-bottom: 1px solid black;
  padding: 0 5%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  paddin: 10% 0;
  display: flex;
  align-items: center;
`;
const TypeSelector = styled.select`
  width: 10%;
  height: 40%;
  text-align-last: center;
`;

const Option = styled.option``;

const LabelArea = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.input`
  height: 35%;
  width: 80%;
`;

const Button = styled.button`
  width: 15%;
  height: 35%;
  border-radius: 10px;
`;
