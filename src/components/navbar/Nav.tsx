import React from "react";
import { Container, Contents, Logo, Avatar } from "./Navbar.style";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = React.useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const goToHome = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  const goToProfile = React.useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <Container showBg={show}>
      <Contents>
        <Logo
          onClick={goToHome}
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <Avatar
          onClick={goToProfile}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </Contents>
    </Container>
  );
};

export default Nav;
