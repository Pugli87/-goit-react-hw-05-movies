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
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'c0ec3039a6ea9335ddc382eb1bd446f2',
        },
      })
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}
