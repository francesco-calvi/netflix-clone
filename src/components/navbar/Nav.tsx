import React from "react";
import { Container, Contents, Logo, Avatar } from "./Navbar.style";

const Nav = () => {
  const [show, handleShow] = React.useState(false);
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

  return (
    <Container showBg={show}>
      <Contents>
        <Logo
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <Avatar
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </Contents>
    </Container>
  );
};

export default Nav;
