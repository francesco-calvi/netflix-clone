import styled, { keyframes } from "styled-components";

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

export const Spinner = styled.div<{ size: number; color?: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  box-shadow: 1px 3px 2px ${({ color }) => (color ? color : "#e50914")};
`;

export const SpinnerContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
