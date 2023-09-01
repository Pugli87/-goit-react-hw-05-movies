import styled from 'styled-components';

export const Title = styled.h1`
  padding: 10px 0
`;

export const Ul = styled.ul`
  margin: 0 auto;
  list-style: none;
  /display: flex;
  justify-content: center;
  /flex-wrap: wrap;
  /gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 10px;
`;

export const Li = styled.li`
  border-radius: 15px;
`;

export const Img = styled.img`
  height: 100%;
  border-radius: 15px ;
`;
  
export const Cont = styled.div`
  position: relative;
  top: -30px;
  border-radius: 0 0 15px 15px ;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const P = styled.p`
  height: 30px;
  color: white;
  border-radius: 15px;
  text-align: center;
  font-size: 1.5 vw;

`;  

