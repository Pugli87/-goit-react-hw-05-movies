import React, { useEffect, useState } from 'react';
import { useParams, /*Outlet,*/ Link, NavLink } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  movieById,
} from 'components/moviesApi/moviesApi';
import { Section } from 'styled-component/SectionStyles';
import {
  ContImg,
  ContText,
  Contain,
  Img,
  Li,
  Paragraph,
  H4,
  Title,
  Ul,
  Wrapper,
  H3,
  Button,
} from 'styled-component/MovieDetails';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = () => {
    movieById(movieId)
      .then(data => {
        setMovie(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <Contain>
        <div>
          <Button type="Button">
            <Link to="/">&lArr; Go Back</Link>
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
            <p>User Score: {movie?.vote_average}</p>
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
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              {' '}
              <NavLink
                className="NavLink-desktop bg-gray-800"
                to={`/movies/${movieId}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        {/* ) : null} */}
      </Contain>
    </Section>
  );
}
