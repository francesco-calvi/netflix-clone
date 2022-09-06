import React from "react";
import HomeScreen from "./components/home/HomeScreen";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #111;
`;

function App() {
  return (
    <Wrapper>
      <HomeScreen />
    </Wrapper>
  );
}

export default App;
