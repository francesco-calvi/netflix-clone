import React from "react";
import { Container, Input, SignInButton, NewUser, Link } from "./SignIn.style";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../state/features/loaderSlice";

const SignIn = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const validateInputs = React.useCallback(
    () =>
      !!emailRef?.current &&
      !!passwordRef?.current &&
      emailRef.current.value !== "" &&
      passwordRef.current.value !== "",

    [emailRef, passwordRef]
  );

  const register = (e: any) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    if (!validateInputs()) return;

    createUserWithEmailAndPassword(
      auth,
      emailRef!.current!.value,
      passwordRef!.current!.value
    ).catch((error: any) => {
      alert(error.message);
      dispatch(setIsLoading(false));
    });
  };

  const signIn = (e: any) => {
    dispatch(setIsLoading(true));
    e.preventDefault();
    if (!validateInputs()) return;

    signInWithEmailAndPassword(
      auth,
      emailRef!.current!.value,
      passwordRef!.current!.value
    ).catch((error: any) => {
      alert(error.message);
      dispatch(setIsLoading(false));
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
