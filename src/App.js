import React from "react";
import styled from "styled-components";
import Container from "./Container";
import GlobalStyle from "./GlobalStyle";
const App = () => {
  return (
    <>
      <Wrapper>
        <Container />
      </Wrapper>
      <GlobalStyle />
    </>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
