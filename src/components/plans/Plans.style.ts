import styled, { css } from "styled-components";

export const Plan = styled.div<{
  isCurrentPlan?: boolean;
  checkoutRequestFired: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  opacity: ${({ checkoutRequestFired }) => (checkoutRequestFired ? 0.6 : 1)};

  & > button {
    &:hover {
      ${({ checkoutRequestFired, isCurrentPlan }) =>
        checkoutRequestFired || isCurrentPlan
          ? css`
              cursor: default;
            `
          : css`
              cursor: pointer;
              opacity: 0.8;
            `};
    }

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
  width: 140px;
  display: grid;
  place-items: center;
`;
