import React from "react";
import axios from "../../axios";
import { Movie } from "../../types";
import { Container, Title, MovieCard, Movies } from "./Row.style";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = React.useState<Movie[]>();

  const base_url = "https://image.tmdb.org/t/p/original/";

  React.useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    })();
  }, [fetchUrl]);

  return movies ? (
    <Container>
      <Title>{title}</Title>
      <Movies>
        {movies?.length > 0 &&
          movies.map(
            (movie) =>
              ((isLargeRow && !!movie.poster_path) ||
                !!movie.backdrop_path) && (
                <MovieCard
                  isLargeRow={isLargeRow}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
              )
          )}
      </Movies>
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(
  Row,
  (prev, next) =>
    prev.fetchUrl === next.fetchUrl &&
    prev.isLargeRow === next.isLargeRow &&
    prev.title === next.title
);
