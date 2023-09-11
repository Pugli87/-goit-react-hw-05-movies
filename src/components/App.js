import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Contain } from 'styled-component/ContainStyles';

const SharedLayout = lazy(() => import("./header/SharedLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const Movies = lazy(() => import("../pages/movies/Movies"));
const MovieDetails = lazy(() => import("../pages/movieDetails/MovieDetails"));
const Cast = lazy(() => import("../components/cast/Cast"));
const Reviews = lazy(() => import("../components/reviews/Reviews"));
const Error404 = lazy(() => import("../pages/error404/Error404"));

export const App = () => {
  return (
    <Contain>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <SharedLayout /> 
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route index element={<Home />} /> 
          {/* <Route path="goit-react-hw-05-movies" element={<Home />} /> */}
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Contain>
  )
};
