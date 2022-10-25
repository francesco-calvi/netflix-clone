import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
    center no-repeat;
  background-size: cover;
`;

export const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 40px;
  width: 150px;
  object-fit: contain;
`;

export const SignInButton = styled.button`
  position: fixed;
  right: 40px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  font-weight: 600;
  cursor: pointer;
  border: none;
  z-index: 1;
`;

export const Gradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

export const Body = styled.div`
  color: #fff;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  & > h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  & > h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const Input = styled.input`
  padding: 10px;
  outline-width: 0;
  height: 30px;
  width: 30%;
  border: none;
  max-width: 600px;
`;

export const FormContainer = styled.div`
  margin-top: 20px;

  & > form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const SubmitButton = styled.input`
  border: none;
  padding: 16px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #e50914;
  cursor: pointer;
  font-weight: 600;
`;
