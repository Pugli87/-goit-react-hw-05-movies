// Home.js
import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../components/moviesApi/moviesApi';
import { Title } from '../../styled-component/HomeStyles';
import { Section } from 'styled-component/SectionStyles';
import MovieList from '../../components/moviesList/MoviesList'; // Importa el componente MovieList

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  const getMovies = () => {
    fetchPopularMovies('popular')
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
    <Section>
      <Title>Trending today</Title>
      <MovieList movies={popularMovies} /> {/* Usa el componente MovieList */}
    </Section>
  );
}
