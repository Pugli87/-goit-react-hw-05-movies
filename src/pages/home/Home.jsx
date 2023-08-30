// Home.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  fetchPopularMovies,
} from '../../components/moviesApi/moviesApi';
import {
  Title,
  Contain,
  Ul,
  Li,
  Img,
  Cont,
  P,
} from '../../components/styled-component/HomeStyles';

export function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = () => {
    fetchPopularMovies()
      .then(results => {
        setPopularMovies(results);
        console.log(results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Contain>
        <Title>Trending today</Title>
        <Ul>
          {popularMovies.map(movie => (
            <Li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
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
              </NavLink>
            </Li>
          ))}
        </Ul>
      </Contain>
    </>
  );
}
