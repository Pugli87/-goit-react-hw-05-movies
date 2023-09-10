import styled from 'styled-components';

export const Contain = styled.div`
  padding: 10px;
  min-width: 320px;
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
  
  @media (min-width: 650px) {
    padding: 20px 40px;
    padding-top: 0;
    max-width: 767px;
  }
  
  @media (min-width: 1024px) {
    padding: 20px 100px;
    padding-top: 0;
    max-width: 1280px;
  }
`;

export const Cont = styled.div`
  padding: 10px;
  padding-top: 0;

  @media (min-width: 650px) {
    padding: 20px ;
  }
`;

