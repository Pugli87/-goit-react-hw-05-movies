// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   baseImgURL,
//   defaultImg,
//   movieByCast,
// } from '../../components/moviesApi/moviesApi';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState();
//   movieByCast(615656);
//   const getCastMovie = () => {
//     movieByCast(movieId)
//       .then(data => {
//         setCast(data.cast);
//         console.log(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };

//   useEffect(() => {
//     getCastMovie();
//   }, [movieId]);

//   return (
//     <ul>
//       {cast?.map(person => (
//         <li key={person.id}>
//           <img
//             src={
//               person.profile_path
//                 ? baseImgURL + person.profile_path
//                 : defaultImg
//             }
//             alt={person.name}
//           />
//           <span>{person.name}</span>
//           <span>Character: </span>
//           <p>{person.character}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Cast;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {
//   baseImgURL,
//   defaultImg,
//   movieByCast,
// } from '../../components/moviesApi/moviesApi';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const getCastData = async () => {
//       try {
//         const castData = await movieByCast(movieId);
//         setCast(castData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getCastData();
//   }, [movieId]);

//   return (
//     <div>
//       <h2>Cast</h2>
//       <ul>
//         {cast.map(person => (
//           <li key={person.id}>
//             <img
//               src={
//                 person.profile_path
//                   ? baseImgURL + person.profile_path
//                   : defaultImg
//               }
//               alt={person.name}
//             />
//             <p>{person.name}</p>
//             <p>Character: {person.character}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cast;

import React from 'react';

function Cast() {
  return <div>Cast</div>;
}

export default Cast;
