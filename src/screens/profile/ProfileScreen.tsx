import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../components/navbar/Nav";
import { logout, selectUser } from "../../state/features/userSlice";
import { auth } from "../../firebase";
import {
  Body,
  Container,
  Info,
  Details,
  SignoutButton,
  PlansContainer,
} from "./ProfileScreen.style";
import Plans from "../../components/plans/Plans";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    !user.uid && navigate("/");
  }, [user.uid, navigate]);

  const callbackSignOut = React.useCallback(() => {
    auth.signOut().then(() => {
      dispatch(logout());
      navigate("/");
    });
  }, [navigate, dispatch]);

  return (
    <Container>
      <Nav />
      <Body>
        <h1>Edit Profile</h1>
        <Info>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <Details>
            <h2>{user.email}</h2>
            <PlansContainer>
              <h3>Plans</h3>
              <Plans />
              <SignoutButton
                onClick={callbackSignOut}
                className="profileScreen__signOut"
              >
                Sign Out
              </SignoutButton>
            </PlansContainer>
          </Details>
        </Info>
      </Body>
    </Container>
  );
};

export default ProfileScreen;
