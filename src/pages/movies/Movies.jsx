import { Input, Button } from '../../components/styled-component/MoviesStyled';
export function Movies() {
  return (
    <>
      <Input type="text" autoComplete="off" placeholder="Search movies" />
      <Button type="button">Search</Button>
    </>
  );
}
