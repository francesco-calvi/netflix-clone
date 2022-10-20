import React from "react";
import axios from "../../axios";
import requests from "../../axios/requests";
import { Movie } from "../../types";
import {
  Button,
  Buttons,
  Container,
  Contents,
  Title,
  Description,
  FadeBottom,
} from "./Banner.style";

const Banner = React.memo(
  () => {
    const [movie, setMovie] = React.useState<Movie>();

    React.useEffect(() => {
      (async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        if (request) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length - 1)
            ]
          );
        }
        return request;
      })();
    }, []);

    const truncate = (text: string, n: number) =>
      text?.length > n ? text.substring(0, n - 1) + "..." : text;

    return (
      <Container
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${
            movie
              ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
              : `/assets/images/bg-placeholder.jpg`
          })`,
          backgroundPosition: "center center",
        }}
      >
        <Contents>
          <Title>{movie?.name || movie?.original_name}</Title>
          {movie && (
            <Buttons>
              <Button>Play</Button>
              <Button className="banner_button">My List</Button>
            </Buttons>
          )}
          {movie?.overview && (
            <Description>{truncate(movie.overview, 150)}</Description>
          )}
        </Contents>

        <FadeBottom />
      </Container>
    );
  },
  () => true
);

export default Banner;
