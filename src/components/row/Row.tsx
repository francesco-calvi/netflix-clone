import React from "react";
import axios from "../../axios";
import { Container, Title, MovieCard, Movies } from "./Row.style";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = React.useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  React.useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    })();
  }, [fetchUrl]);

  return (
    <Container>
      <Title>{title}</Title>
      <Movies>
        {movies.map(
          (movie: any) =>
            ((isLargeRow && !!movie.poster_path) || !!movie.backdrop_path) && (
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
  );
};

export default Row;
