import React from "react";
import axios from "../../axios";
import requests from "../../axios/requests";
import {
  Button,
  Buttons,
  Container,
  Contents,
  Title,
  Description,
  FadeBottom,
} from "./Banner.style";

const Banner = () => {
  const [movie, setMovie] = React.useState<any>();
  // TODO: add movie type
  /*
  {
    "backdrop_path": "/gk1enrMtCVABqJd4ujVwIIeswTT.jpg",
    "first_air_date": "2021-09-03",
    "genre_ids": [
        99
    ],
    "id": 132719,
    "name": "Money Heist: From Tokyo to Berlin",
    "origin_country": [
        "ES"
    ],
    "original_language": "es",
    "original_name": "La Casa de Papel: de Tokio a Berlín",
    "overview": "The filmmakers and actors behind \"Money Heist\" characters like Tokyo and the Professor talk about the emotional and artistic process of filming Money Heist.",
    "popularity": 341.325,
    "poster_path": "/g0wLsOFpvK5nX5hsIAwXHrpnFLI.jpg",
    "vote_average": 7.7,
    "vote_count": 97
}
  */
  React.useEffect(() => {
    (async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    })();
  }, []);

  const truncate = (text: string, n: number) =>
    text?.length > n ? text.substr(0, n - 1) + "..." : text;

  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <Contents>
        <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
        <Buttons>
          <Button>Play</Button>
          <Button className="banner_button">My List</Button>
        </Buttons>
        <Description>{truncate(movie?.overview, 150)}</Description>
      </Contents>
      <FadeBottom />
    </Container>
  );
};

export default Banner;
