import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
  padding: 10px;
  margin: 0 auto;
  list-style: none;
  //display: grid;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 140px);
  gap: 10px;

  @media (min-width: 650px) {
    //grid-template-columns: repeat(auto-fit, 200px);
  }

  @media (min-width: 1280px) {
    //grid-template-columns: repeat(auto-fit, 240px);
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  flex-basis: calc((100% - 10px) / 2);

  @media (min-width: 650px) {
    flex-basis: calc((100% - 20px) / 3);
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% - 30px) / 4);
  }
`;

export const Nav = styled(NavLink)`
  height: 140px;
  border-radius: 15px;

  @media (min-width: 650px) {
    height: 200px;
  }
  
  @media (min-width: 1024px) {
    height: 230px;
  }
`;


export const Img = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 15px ;

  @media (min-width: 650px) {
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 230px;
  }
`;

export const Cont = styled.div`
  padding: 0 10px ;
  display: flex;
  position: relative;
  bottom: 35px;
  height: 35px;
  border-radius: 0 0 15px 15px ;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const P = styled.p`
  margin: 0 auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
  font-size: 11px;
`;  

