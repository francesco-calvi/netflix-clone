import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  color: white;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  & > h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

export const Info = styled.div`
  display: flex;

  & > img {
    height: 100px;
  }
`;

export const Details = styled.div`
  color: white;
  margin-left: 25px;
  flex: 1;

  & > h2 {
    background-color: gray;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

export const SignoutButton = styled.div`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export const PlansContainer = styled.div`
  margin-top: 20px;

  & > h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;
