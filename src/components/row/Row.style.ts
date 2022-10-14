import styled from "styled-components";

export const Container = styled.div`
  color: white;
  margin-left: 20px;
`;

export const Title = styled.h2``;

export const Movies = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  gap: 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieCard = styled.img<{ isLargeRow?: boolean }>`
  height: ${(props) => (props.isLargeRow ? "300px" : "150px")};
  width: ${(props) => (props.isLargeRow ? "200px" : "250px")};
  object-fit: cover;
  background-color: #141414;
  transition: transform 450ms ease-in-out;
  aspect-ratio: ${(props) => (props.isLargeRow ? "1 / 1" : "16 / 9")};

  &:hover {
    transform: ${(props) => (props.isLargeRow ? "scale(1.09)" : "scale(1.08)")};
    opacity: 1;
  }
`;
