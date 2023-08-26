import styled from 'styled-components';

export const Input = styled.input`
  padding: 2px;
  width: 240px;
  margin-top: 10px;
  border: none;
  box-shadow: 0 0 1px black;
  &:focus {
    outline: 1px solid rgb(84, 147, 240);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 2px;
  margin-left: 2px;
  border: none;
  box-shadow: 0 0 1px black;
`;
