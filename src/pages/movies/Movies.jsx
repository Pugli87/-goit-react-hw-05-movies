import { Input, Button } from '../../components/styled-component/MoviesStyled';

export function Movies() {
  const submit = () => {
    console.log('click');
  };

  return (
    <>
      <Input type="text" autoComplete="off" placeholder="Search movies" />
      <Button type="button" onClick={submit}>
        Search
      </Button>
    </>
  );
}
