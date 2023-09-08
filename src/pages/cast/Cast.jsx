import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  movieByCast,
} from '../../components/moviesApi/moviesApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  movieByCast(615656);
  const getCastMovie = () => {
    movieByCast(movieId)
      .then(data => {
        setCast(data.cast);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCastMovie();
  }, [movieId]);

  return (
    <ul>
      {cast?.map(person => (
        <li key={person.id}>
          <img
            src={
              person.profile_path
                ? baseImgURL + person.profile_path
                : defaultImg
            }
            alt={person.name}
          />
          <span>{person.name}</span>
          <span>Character: </span>
          <p>{person.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
