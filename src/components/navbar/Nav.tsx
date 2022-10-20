import React from "react";
import { Container, Contents, Logo, Avatar } from "./Navbar.style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSubscription } from "../../state/features/userSlice";

const Nav = React.memo(
  () => {
    const subscribed = useSelector(selectSubscription);
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
      !!subscribed && navigate("/");
    }, [navigate, subscribed]);

    const goToProfile = React.useCallback(() => {
      navigate("/profile");
    }, [navigate]);

    return (
      <Container showBg={show}>
        <Contents>
          <Logo onClick={goToHome} src="/assets/images/logo.png" alt="logo" />
          <Avatar
            onClick={goToProfile}
            className="nav__avatar"
            src="/assets/images/avatar.png"
            alt="avatar"
          />
        </Contents>
      </Container>
    );
  },
  () => true
);

export default Nav;
