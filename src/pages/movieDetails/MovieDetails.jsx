import React, { useEffect, useState } from 'react';
import { useParams, /*Outlet,*/ Link } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  movieById,
} from 'components/moviesApi/moviesApi';
import { Section } from 'styled-component/SectionStyles';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = () => {
    movieById(movieId)
      .then(results => {
        setMovie(results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Section>
      <div>
        <button type="button">
          <Link to="/">Go Back</Link>
        </button>
      </div>
      <div>
        <img
          src={
            movie?.backdrop_path
              ? baseImgURL + movie?.backdrop_path
              : defaultImg
          }
          alt={movie?.title || movie?.name}
        />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </Section>
  );
}
