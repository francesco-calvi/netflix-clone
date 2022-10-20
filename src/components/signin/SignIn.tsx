import React from "react";
import {
  Container,
  Input,
  SignInButton,
  NewUser,
  Link,
  ErrorMessage,
} from "./SignIn.style";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../state/features/loaderSlice";

const SignIn = React.memo(
  () => {
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = React.useState<string>();

    const formatErrorMessage = React.useCallback((message: string) => {
      const substring = message.substring(
        message.indexOf("/") + 1,
        message.indexOf(")")
      );
      return substring.split("-").join(" ");
    }, []);

    const register: React.MouseEventHandler<HTMLSpanElement> =
      React.useCallback(
        (e) => {
          e.preventDefault();

          createUserWithEmailAndPassword(
            auth,
            emailRef!.current!.value,
            passwordRef!.current!.value
          ).catch((error: any) => {
            dispatch(setIsLoading(false));
            setErrorMessage(formatErrorMessage(error.message));
          });
        },
        [emailRef, passwordRef, dispatch, formatErrorMessage]
      );

    const signIn: React.MouseEventHandler<HTMLSpanElement> = React.useCallback(
      (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
          auth,
          emailRef!.current!.value,
          passwordRef!.current!.value
        ).catch((error: any) => {
          dispatch(setIsLoading(false));
          setErrorMessage(formatErrorMessage(error.message));
        });
      },
      [emailRef, passwordRef, dispatch, formatErrorMessage]
    );

    return (
      <Container>
        <form>
          <h1>Sign In</h1>
          <Input
            ref={emailRef}
            placeholder="Email"
            type="email"
            onFocus={() => setErrorMessage("")}
          />
          <Input
            ref={passwordRef}
            placeholder="Password"
            type="password"
            onFocus={() => setErrorMessage("")}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <SignInButton type="submit" value="Sign In" onClick={signIn} />
          <NewUser>
            <span>New to Netflix? </span>
            <Link onClick={register}>Sign up now.</Link>
          </NewUser>
        </form>
      </Container>
    );
  },
  () => true
);

export default SignIn;
