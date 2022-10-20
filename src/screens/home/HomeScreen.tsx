import React from "react";
import Nav from "../../components/navbar/Nav";
import Banner from "../../components/banner/Banner";
import requests from "../../axios/requests";
import Row from "../../components/row/Row";
import { Container } from "./HomeScreen.style";
import { useDispatch, useSelector } from "react-redux";
import { selectSubscription } from "../../state/features/userSlice";
import { useNavigate } from "react-router-dom";
import { Subscription } from "../../types";

const HomeScreen = React.memo(
  () => {
    const navigate = useNavigate();
    const subscribed: Subscription | null = useSelector(selectSubscription);
    const dispatch = useDispatch();

    React.useEffect(() => {
      !subscribed && navigate("/profile");
    }, [subscribed, navigate, dispatch]);

    return subscribed ? (
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
    ) : (
      <></>
    );
  },
  () => true
);

export default HomeScreen;
