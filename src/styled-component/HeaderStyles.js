import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyles = styled.header`

  //background-color: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  //box-shadow: 0 0 3px rgb(1, 54, 107);
  border-bottom: 1px solid rgb(1, 54, 107)
`;

export const Logo = styled.div`
  display: flex;
  width: 100px;
  height: 45px;
  padding: 8px;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: rgb(2, 95, 189);
  }
`;
