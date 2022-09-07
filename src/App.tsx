import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { auth } from "./firebase";

const Wrapper = styled.div`
  background-color: #111;
`;

const App: React.FC = () => {
  const user = null;

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
      } else {
        // Logged out
      }
      return unsubscribe;
    });
  }, []);

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
};

export default App;
