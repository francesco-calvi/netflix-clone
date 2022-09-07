import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";

const Wrapper = styled.div`
  background-color: #111;
`;

function App() {
  const user = null;
  return (
    <Wrapper>
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      )}
    </Wrapper>
  );
}

export default App;
