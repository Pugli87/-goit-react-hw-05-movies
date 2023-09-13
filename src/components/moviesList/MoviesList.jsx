import React from 'react';
import { baseImgURL, defaultImg } from '../moviesApi/moviesApi';
import {
  Ul,
  Li,
  Img,
  Cont,
  P,
  Nav,
} from '../../styled-component/MoviesListStyles';

const MovieList = ({ movies }) => {
  return (
    <Ul>
      {movies.map(
        movie => (
          // movie.backdrop_path !== null && ( // filtrar peliculas si no tienen imagen
          <Li key={movie.id}>
            <Nav to={`/movies/${movie.id}`}>
              <Img
                src={
                  movie?.backdrop_path
                    ? baseImgURL + movie?.backdrop_path
                    : defaultImg
                }
                alt={movie?.title || movie?.name}
              />
              <Cont>
                <P>{movie.title}</P>
              </Cont>
            </Nav>
          </Li>
        )
        // )
      )}
    </Ul>
  );
};

export default MovieList;
