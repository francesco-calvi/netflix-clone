import React from "react";
import {
  Container,
  Input,
  SignInButton,
  NewUser,
  Link,
  ErrorMessage,
  PasswordInputContainer,
} from "./SignIn.style";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../../state/features/loaderSlice";
import { ReactComponent as HidePasswordIcon } from "../../assets/icons/eye-off.svg";
import { ReactComponent as ShowPasswordIcon } from "../../assets/icons/eye.svg";

const SignIn = React.memo(
  () => {
    const emailRef = React.useRef<HTMLInputElement>(null);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = React.useState<string>();
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const formatErrorMessage = React.useCallback((message: string) => {
      const substring = message.substring(
        message.indexOf("/") + 1,
        message.indexOf(")")
      );
      return substring.split("-").join(" ");
    }, []);

    const validatePassword = () => {
      // 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
      return passwordRef!.current!.value.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
      );
    };

    const register: React.MouseEventHandler<HTMLSpanElement> =
      React.useCallback(
        (e) => {
          e.preventDefault();

          const isValid = validatePassword();
          if (!isValid) {
            setErrorMessage(
              "min 8 letters, one numeric digit, one uppercase and one lowercase letter."
            );
          } else {
            createUserWithEmailAndPassword(
              auth,
              emailRef!.current!.value,
              passwordRef!.current!.value
            ).catch((error: any) => {
              dispatch(setIsLoading(false));
              setErrorMessage(formatErrorMessage(error.message));
            });
          }
        },
        [dispatch, formatErrorMessage]
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
      [dispatch, formatErrorMessage]
    );

    const setInputType = React.useCallback(() => {
      if (passwordRef.current) {
        passwordRef.current.type === "password"
          ? (passwordRef.current.type = "text")
          : (passwordRef.current.type = "password");
        setShowPassword(passwordRef.current.type === "text");
      }
    }, []);

    return (
      <Container>
        <form>
          <h1>Sign In</h1>
          <Input
            ref={emailRef}
            placeholder="Email"
            type="email"
            required
            onFocus={() => setErrorMessage("")}
          />
          <PasswordInputContainer>
            {(showPassword && <ShowPasswordIcon onClick={setInputType} />) || (
              <HidePasswordIcon onClick={setInputType} />
            )}
            <Input
              ref={passwordRef}
              placeholder="Password"
              type="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              onFocus={() => setErrorMessage("")}
            />
          </PasswordInputContainer>
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
