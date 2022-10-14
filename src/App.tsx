import React from "react";
import HomeScreen from "./screens/home/HomeScreen";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser, setSubscription } from "./state/features/userSlice";
import ProfileScreen from "./screens/profile/ProfileScreen";
import db from "./firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { selectLoading, setIsLoading } from "./state/features/loaderSlice";
import LoaderScreen from "./screens/loader/LoaderScreen";

const Wrapper = styled.div`
  background-color: #111;
`;

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const getSubscription = React.useCallback(
    async (uid: string | undefined) => {
      if (uid) {
        try {
          const customersRef = doc(db, "customers", uid);
          const subscriptionsRef = collection(customersRef, "subscriptions");
          const querySnapshot = await getDocs(subscriptionsRef);
          const subscription = querySnapshot.docs[querySnapshot.size - 1];
          if (subscription) {
            dispatch(
              setSubscription({
                role: subscription.data().role,
                current_period_end:
                  subscription.data().current_period_end.seconds,
                current_period_start:
                  subscription.data().current_period_start.seconds,
              })
            );
          }
        } catch (e) {
          console.error(e);
        }
      }
    },
    [dispatch]
  );

  React.useLayoutEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        await getSubscription(userAuth.uid);
        dispatch(setIsLoading(false));
      } else {
        dispatch(setIsLoading(false));
      }
    });

    return unsubscribe;
  }, [getSubscription, dispatch]);

  return (
    <Wrapper>
      {loading ? (
        <LoaderScreen />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={!user.uid ? <LoginScreen /> : <HomeScreen />}
            />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      )}
    </Wrapper>
  );
};

export default App;
