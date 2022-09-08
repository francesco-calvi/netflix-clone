import React from "react";
import { useSelector } from "react-redux";
import Nav from "../../components/navbar/Nav";
import { selectUser } from "../../features/userSlice";
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

const ProfileScreen = () => {
  const user = useSelector(selectUser);
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
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
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
