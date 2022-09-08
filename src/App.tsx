import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/profile/ProfileScreen";

const Wrapper = styled.div`
  background-color: #111;
`;

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);

  return (
    <Wrapper>
      {!user.uid ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      )}
    </Wrapper>
  );
};

export default App;
