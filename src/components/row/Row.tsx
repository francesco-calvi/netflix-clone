import React from "react";
import axios from "../../axios";
import { Movie } from "../../types";
import {
  Container,
  MovieCard,
  Slider,
  Handler,
  MoviesContainer,
} from "./Row.style";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
const Row: React.FC<Props> = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = React.useState<Movie[]>();
  const [start, setStart] = React.useState<boolean>(true);
  const [end, setEnd] = React.useState<boolean>(false);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const base_url = "https://image.tmdb.org/t/p/w500/";

  React.useEffect(() => {
    (async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    })();
  }, [fetchUrl]);

  const handleScroll = React.useCallback(() => {
    const slider = sliderRef?.current;
    if (slider) {
      const scrollLeft = slider.scrollLeft;
      setStart(scrollLeft === 0);
      setEnd(scrollLeft + slider.offsetWidth === slider.scrollWidth);
    }
  }, []);

  React.useEffect(() => {
    const slider = sliderRef?.current;
    slider?.addEventListener("scroll", handleScroll);

    return () => {
      slider?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scroll = React.useCallback((dir: string) => {
    const slider = sliderRef?.current;
    if (slider) {
      switch (dir) {
        case "left": {
          slider.scrollLeft -= slider.offsetWidth;
          break;
        }
        case "right": {
          slider.scrollLeft += slider.offsetWidth;
          break;
        }
      }
    }
  }, []);

  const renderSlider = React.useMemo(
    () => (
      <Slider ref={sliderRef}>
        {movies &&
          movies?.length > 0 &&
          movies.map(
            (movie) =>
              ((isLargeRow && !!movie.poster_path) ||
                !!movie.backdrop_path) && (
                <MovieCard isLargeRow={isLargeRow} key={movie.id}>
                  <img
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                </MovieCard>
              )
          )}
      </Slider>
    ),
    [movies, isLargeRow]
  );

  return (
    <Container>
      <h2>{title}</h2>
      <MoviesContainer isStart={start} isEnd={end}>
        <Handler className="back" onClick={() => scroll("left")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </Handler>
        <Handler className="next" onClick={() => scroll("right")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </Handler>
        {renderSlider}
      </MoviesContainer>
    </Container>
  );
};

export default React.memo(
  Row,
  (prev, next) =>
    prev.fetchUrl === next.fetchUrl &&
    prev.isLargeRow === next.isLargeRow &&
    prev.title === next.title
);
