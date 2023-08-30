// Home.js
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../components/moviesApi/moviesApi'; // Importa la función desde el archivo api.js

export function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies()
      .then(results => {
        setPopularMovies(results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <div>
        <h1>Popular Movies</h1>
        <ul>
          {popularMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
