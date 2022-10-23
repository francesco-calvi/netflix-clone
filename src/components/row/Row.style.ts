import styled from "styled-components";

export const Container = styled.div`
  color: white;

  & > * {
    padding: 10px 20px;
  }
`;

export const Movies = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieCard = styled.div<{ isLargeRow?: boolean }>`
  transition: transform 450ms ease-in-out;

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
