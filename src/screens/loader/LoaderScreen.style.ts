import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 1px 3px 2px #e50914;
`;
