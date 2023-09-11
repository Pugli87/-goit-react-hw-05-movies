import { movieByReviews } from 'components/moviesApi/moviesApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cont } from 'styled-component/ContainStyles';
import { H3, Li, P, Ul } from 'styled-component/ReviewsStyled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const getReviewsData = async () => {
    try {
      const reviewsData = await movieByReviews(movieId);
      console.log(reviewsData);
      setReviews(reviewsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReviewsData();
  }, [movieId]);

  if (reviews?.length === 0) {
    return <p>No hay Reviews disponibles.</p>;
  }

  return (
    <Cont>
      <h2 hidden>Reviews</h2>
      <Ul>
        {reviews.map(review => (
          <Li key={review.id}>
            <H3>{review.author}</H3>
            <P>{review.content}</P>
          </Li>
        ))}
      </Ul>
    </Cont>
  );
}
