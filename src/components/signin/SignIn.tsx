import React from "react";
import { Container, Input, SignInButton, NewUser, Link } from "./SignIn.style";

const SignIn = () => {
  return (
    <Container>
      <form>
        <h1>Sign In</h1>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <SignInButton type="submit" value="Sign In" />
        <NewUser>
          <span>New to Netflix? </span>
          <Link>Sign up now.</Link>
        </NewUser>
      </form>
    </Container>
  );
};

export default SignIn;
