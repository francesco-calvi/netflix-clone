import React from "react";
import SignIn from "../../components/signin/SignIn";
import {
  Container,
  Logo,
  SignInButton,
  Gradient,
  Body,
  Input,
  SubmitButton,
  FormContainer,
} from "./LoginScreen.style";

const LoginScreen = () => {
  const [signIn, setSignIn] = React.useState<boolean>(false);

  return (
    <Container>
      <Logo
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
      />
      <SignInButton onClick={() => setSignIn(true)}>Sign In</SignInButton>
      <Gradient />

      <Body>
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <FormContainer>
              <form>
                <Input type="email" placeholder="Email Address" />
                <SubmitButton
                  type="submit"
                  value="GET STARTED"
                  onClick={(e) => {
                    e.preventDefault();
                    setSignIn(true);
                  }}
                />
              </form>
            </FormContainer>
          </>
        )}
      </Body>
    </Container>
  );
};

export default LoginScreen;
