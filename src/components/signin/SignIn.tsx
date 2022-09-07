import React from "react";
import { Container, Input, SignInButton, NewUser, Link } from "./SignIn.style";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignIn = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const validateInputs = React.useCallback(
    () =>
      !!emailRef?.current &&
      !!passwordRef?.current &&
      emailRef.current.value !== "" &&
      passwordRef.current.value !== "",

    [emailRef, passwordRef]
  );

  const register = (e: any) => {
    e.preventDefault();
    if (!validateInputs()) return;

    createUserWithEmailAndPassword(
      auth,
      emailRef!.current!.value,
      passwordRef!.current!.value
    )
      .then((authUser: object) => {
        console.log(authUser);
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  const signIn = (e: any) => {
    e.preventDefault();
    if (!validateInputs()) return;

    signInWithEmailAndPassword(
      auth,
      emailRef!.current!.value,
      passwordRef!.current!.value
    )
      .then((authUser: object) => {
        console.log(authUser);
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <form>
        <h1>Sign In</h1>
        <Input ref={emailRef} placeholder="Email" type="email" />
        <Input ref={passwordRef} placeholder="Password" type="password" />
        <SignInButton type="submit" value="Sign In" onClick={signIn} />
        <NewUser>
          <span>New to Netflix? </span>
          <Link onClick={register}>Sign up now.</Link>
        </NewUser>
      </form>
    </Container>
  );
};

export default SignIn;
