import React from "react";
import Nav from "../../components/navbar/Nav";
import Banner from "../../components/banner/Banner";
import requests from "../../axios/requests";
import Row from "../../components/row/Row";
import { Container } from "./HomeScreen.style";
import { useSelector } from "react-redux";
import { selectSubscription } from "../../state/features/userSlice";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  // const navigate = useNavigate();
  // const subscribed = useSelector(selectSubscription);
  // React.useEffect(() => {
  //   !subscribed && navigate("/profile");
  // }, [subscribed]);
  return (
    <Container>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </Container>
  );
};

export default HomeScreen;
