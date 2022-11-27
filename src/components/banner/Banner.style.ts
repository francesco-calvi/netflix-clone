import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  color: white;
  object-fit: contain;
  margin-bottom: 50px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Contents = styled.div`
  padding: 0 4%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const Buttons = styled.div``;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const Description = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

export const FadeBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
