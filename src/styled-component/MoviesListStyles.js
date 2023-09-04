import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Ul = styled.ul`
  margin: 0 auto;
  list-style: none;
  display: flex;
  justify-content: center;
  //flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 10px;
  `;
  

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
  
export const Nav = styled(NavLink)`
  height: 200px;
  border-radius: 15px;
  
`;


export const Img = styled.img`
height: 200px;
  border-radius: 15px ;
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

