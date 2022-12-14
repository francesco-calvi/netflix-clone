import styled from "styled-components";

export const Container = styled.div`
  color: white;

  & > h2 {
    padding: 0 4%;
  }
`;

export const Movies = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 4%;
  margin: 20px 0;
`;

export const MovieCard = styled.div<{ isLargeRow?: boolean }>`
  transition: transform 450ms ease-in-out;
  border-radius: 4px;

  & > img {
    height: ${(props) => (props.isLargeRow ? "300px" : "150px")};
    width: ${(props) => (props.isLargeRow ? "200px" : "250px")};
    object-fit: cover;
    background-color: #141414;
    aspect-ratio: ${(props) => (props.isLargeRow ? "1 / 1" : "16 / 9")};
  }

  &:hover {
    transform: ${(props) => (props.isLargeRow ? "scale(1.09)" : "scale(1.08)")};
  }
`;

export const Handler = styled.div`
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  text-align: center;
  top: 0;
  width: 4%;
  z-index: 1;
  background: hsla(0, 0%, 8%, 0.5);
  padding: 0 5px;
  box-sizing: border-box;

  & > svg {
    fill: #fafbf9;
    width: 2.5vw;
    height: 2.5vw;
    display: none;
    opacity: 0.8;
    transition: transform 0.2s ease-out 0s;
    &:hover {
      transform: scale(1.25);
    }
  }

  &:hover {
    cursor: pointer;
    background: hsla(0, 0%, 8%, 0.6);
  }

  &.back {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    left: 0;
  }

  &.next {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    right: 0;
  }
`;

export const SliderWrapper = styled.div<{ isStart: boolean; isEnd: boolean }>`
  position: relative;

  & > .back {
    display: ${({ isStart }) => (isStart ? "none" : "flex")};
  }
  & > .next {
    display: ${({ isEnd }) => (isEnd ? "none" : "flex")};
  }

  &:hover {
    & > .back > svg {
      display: ${({ isStart }) => (isStart ? "none" : "block")};
    }
    & > .next > svg {
      display: ${({ isEnd }) => (isEnd ? "none" : "block")};
    }
  }
`;

export const Slider = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
