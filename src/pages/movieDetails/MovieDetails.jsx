// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovieById } from 'components/moviesApi/moviesApi';

// export function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetchMovieById(id)
//       .then(data => {
//         setMovie(data);
//         console.log(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchPopularMovies } from 'components/moviesApi/moviesApi';
import { Section } from 'styled-component/SectionStyles';

export default function MovieDetails() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);

  const getMovies = () => {
    fetchPopularMovies(movieId)
      .then(results => {
        setMovie(results);
        console.log(results);
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
      <div className="flex items-center">
        <button type="button">
          <i className="ri-arrow-left-line"></i>
          <Link to="/">Go Back</Link>
        </button>
      </div>
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </Section>
  );
}
