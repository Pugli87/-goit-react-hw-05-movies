import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = lazy(() => import("../components/header/Header"));
const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const MovieDetails = lazy(() => import("../pages/movieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/cast/Cast"));
const Reviews = lazy(() => import("../components/reviews/Reviews"));
const Error404 = lazy(() => import("../pages/error404/Error404"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/movieId:" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </>
  );
};
