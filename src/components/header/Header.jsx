import { NavLink } from 'react-router-dom';
import { HeaderStyles } from '../styled-component/HeaderStyles';

export function Header() {
  return (
    <>
      <HeaderStyles>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </HeaderStyles>
    </>
  );
}
