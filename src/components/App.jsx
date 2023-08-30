import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './header/Header';
import { Home } from 'pages/home/Home';
import { Movies } from 'pages/movies/Movies';
import { MovieDetails } from 'pages/movieDetails/MovieDetails';
import { Error404 } from 'pages/error404/Error404';

export const App = () => {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/movieId:" element={<MovieDetails />} />
          <Route path="/*" element={<Error404 />}>
            <Route path="cast" element={'<Cast />'} />
            <Route path="reviews" element={'<Reviews />'} />
          </Route>
        </Routes>
    </>
  );
};
