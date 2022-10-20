import React from "react";
import { Container, Spinner } from "./LoaderScreen.style";

const LoaderScreen = React.memo(
  () => {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  },
  () => true
);

export default LoaderScreen;
