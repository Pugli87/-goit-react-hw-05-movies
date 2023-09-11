import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  movieById,
} from 'components/moviesApi/moviesApi';
import {
  ContImg,
  ContText,
  Img,
  Li,
  Paragraph,
  H4,
  Title,
  Ul,
  Wrapper,
  H3,
  Button,
  Link,
  ContDetails,
  UlDetails,
} from 'styled-component/MovieDetailsStyles';
import { Cont } from 'styled-component/ContainStyles';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = useCallback(() => {
    movieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Cont>
      <div>
        <Button type="Button">
          <Link to="/movies">&lArr; Go Back</Link>
        </Button>
      </div>
      <Wrapper>
        <ContImg>
          <Img
            src={
              movie?.backdrop_path
                ? baseImgURL + movie?.backdrop_path
                : defaultImg
            }
            alt={movie?.title || movie?.name}
          />
        </ContImg>
        <ContText>
          <Title>{movie.title}</Title>
          <Paragraph>User Score: {movie?.vote_average}</Paragraph>
          <H3>Overview</H3>
          <Paragraph>{movie.overview}</Paragraph>
          <H4>Genres: </H4>
          <Ul>
            {movie.genres.map(genre => (
              <Li key={genre.id}>
                <Paragraph>{genre.name} </Paragraph>
              </Li>
            ))}
          </Ul>
        </ContText>
      </Wrapper>
      {/* {movie.poster_path ? ( */}
      <ContDetails>
        <H4>Additional information</H4>
        <UlDetails>
          <Li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </Li>
          <Li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </Li>
        </UlDetails>
      </ContDetails>
      <Outlet />
      {/* ) : null} */}
    </Cont>
  );
}
