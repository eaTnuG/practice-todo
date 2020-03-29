import React from "react";
import styled from "styled-components";

const Item = ({ todo: { type, label, status }, onClick }) => {
  return (
    <Wrapper onClick={onClick} completed={status === "done"}>
      <Type>{type}</Type>
      <Label>{label}</Label>
      <Status>{status}</Status>
    </Wrapper>
  );
};

export default Item;
const Wrapper = styled.div`
  width: 100%;
  height: 20%;
  background: ${({ completed }) => (completed ? "brown" : "white")};
  border: 1px solid black;
  margin: 3% 0;
  display: flex;
  align-item: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 10px;
  flex-wrap: nowrap;
  color: ${({ completed }) => (completed ? "white" : "black")};
`;

const Type = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Label = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Status = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
