import styled, { css } from "styled-components";

export const Plan = styled.div<{ isCurrentPlan?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  opacity: 0.8;

  &:hover {
    opacity: ${({ isCurrentPlan }) => (isCurrentPlan ? 0.8 : 1)};
  }

  & > button {
    ${({ isCurrentPlan }) =>
      isCurrentPlan &&
      css`
        background-color: gray;
        cursor: default;
      `}
  }
`;

export const SubscribeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: #e50914;
`;
