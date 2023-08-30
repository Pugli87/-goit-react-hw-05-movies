// Home.js
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  fetchPopularMovies,
} from '../../components/moviesApi/moviesApi'; // Importa la función desde el archivo api.js

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
      <h1>Trending today</h1>
      <div>
        <ul>
          {popularMovies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                <img
                  src={
                    movie?.backdrop_path
                      ? baseImgURL + movie?.backdrop_path
                      : defaultImg
                  }
                  alt={movie?.title || movie?.name}
                />
                <div>
                  <p>{movie.title}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
