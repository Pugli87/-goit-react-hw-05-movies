import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  max-width: 1280px;
  margin: 0 auto;
  
  @media (min-width: 280px) {
    max-width: 767px;
  }

  @media (min-width: 768px) {
    max-width: 1279px;

  }
`;
