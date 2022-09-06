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
  max-height: ${(props) => (props.isLargeRow ? "250px" : "100px")};
  object-fit: contain;
  width: 100%;
  transition: transform 450ms;

  &:hover {
    transform: ${(props) => (props.isLargeRow ? "scale(1.09)" : "scale(1.08)")};
    opacity: 1;
  }
`;
