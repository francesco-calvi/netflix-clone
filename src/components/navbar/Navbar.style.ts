import styled from "styled-components";

export const Container = styled.nav<{ showBg: boolean }>`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  height: 30px;
  z-index: 2;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  background-color: ${(props) => (props.showBg ? "#111" : "transparent")};
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  position: fixed;
  top: 10px;
  left: 0;
  width: 80px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  cursor: pointer;
  position: fixed;
  right: 20px;
  width: 30px;
`;
