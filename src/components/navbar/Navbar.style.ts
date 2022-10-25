import styled from "styled-components";

export const Container = styled.nav<{ showBg: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 4%;
  height: 68px;
  box-sizing: border-box;
  z-index: 2;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => (props.showBg ? "#111" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 90px;
  object-fit: contain;
  cursor: pointer;
`;

export const Avatar = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 2px;
`;
