import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.85);
  padding: 40px 60px;
  border-radius: 5px;

  & > form {
    display: grid;
    flex-direction: column;
    text-align: start;
  }

  & > form > h1 {
    margin-bottom: 25px;
  }
`;

export const Input = styled.input`
  outline-width: 0;
  height: 40px;
  margin-bottom: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px 15px;
  width: -webkit-fill-available;
`;

export const SignInButton = styled.input`
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  border-radius: 5px;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

export const NewUser = styled.h4`
  text-align: left;
  margin-top: 20px;
  & > span:not(:last-child) {
    color: gray;
  }
`;

export const Link = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.p`
  height: 20px;
  font-size: 13px;
  color: #e50914;
  letter-spacing: 0.1rem;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const PasswordInputContainer = styled.div`
  position: relative;
  & svg {
    position: absolute;
    width: 20px;
    right: 15px;
    top: 15px;
  }
`;
