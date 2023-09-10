import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyles = styled.header`
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0 1px 1px rgb(1, 54, 107);
  border-bottom: 1px solid rgb(1, 54, 107)

  @media (min-width: 650px) {
    padding: 10px 40px;
    max-width: 767px;
  }
  
  @media (min-width: 1024px) {
    padding: 10px 40px;
    max-width: 1280px;
  }
  `;
  
  export const Logo = styled.div`
  display: flex;
  width: 100px;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex
`;

export const Link = styled(NavLink)`
  padding: 1px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(2, 95, 189);
  }

  @media (min-width: 650px) {
    padding: 5px 10px;
    max-width: 767px;
  }
  
  @media (min-width: 1024px) {
    padding: 8px 16px;
  }
`;
