// Home.js
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../components/moviesApi/moviesApi';
import { Title } from '../../styled-component/HomeStyles';
import MovieList from '../../components/moviesList/MoviesList'; // Importa el componente MovieList

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = () => {
    fetchPopularMovies()
      .then(results => {
        setPopularMovies(results);
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
      <Title>Trending today</Title>
      <MovieList movies={popularMovies} />
    </>
  );
}
