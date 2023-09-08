// MovieList.js
import React from 'react';
//import { NavLink } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
} from '../moviesApi/moviesApi';
import { Ul, Li, Img, Cont, P, Nav } from '../../styled-component/MoviesListStyles';
import { Section } from 'styled-component/SectionStyles';

const MovieList = ({ movies }) => {
  return (
    <Section>
      <Ul>
        {movies.map(movie => (
          movie.backdrop_path !== null && <Li key={movie.id}>
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
        ))}
      </Ul>
    </Section>
  );
};

export default MovieList;
