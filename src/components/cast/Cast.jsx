import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  baseImgURL,
  defaultImg,
  movieByCast,
} from '../../components/moviesApi/moviesApi';
import { ContP, Img, Li, P, Ul } from 'styled-component/CastStyles';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getCastData = async () => {
      try {
        const castData = await movieByCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      }
    };
    getCastData();
  }, [movieId]);

  return (
    <div>
      <h2 hidden>Cast</h2>
      <Ul>
        {cast.map(person => (
          <Li key={person.id}>
            <Img
              src={
                person.profile_path
                  ? baseImgURL + person.profile_path
                  : defaultImg
              }
              alt={person.name}
            />
            <ContP>
              <P>{person.name}</P>
              <P>Character: {person.character}</P>
            </ContP>
          </Li>
        ))}
      </Ul>
    </div>
  );
};
export default Cast;
