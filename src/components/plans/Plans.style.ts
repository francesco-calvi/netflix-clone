import styled from "styled-components";

export const Plan = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const SubscribeButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
