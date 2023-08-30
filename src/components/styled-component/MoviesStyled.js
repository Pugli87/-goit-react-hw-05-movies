import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px;
  width: 240px;
  margin-top: 10px;
  margin-right: -33px;
  border: 1px solid rgb(2, 95, 189);
  color: white;
  box-shadow: 0 0 1px black;
  background-color: transparent;
  border-radius: 5px;
  &:focus {
    outline: 1px solid rgb(2, 95, 189);
  }
  `;
  
  export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 2px;
  border: none;
  box-shadow: 0 0 1px black;
  background: rgb(2, 95, 189);
`;

export const Svg = styled.svg`
  width: 10px;
  height: 10px;

`;

export const Cont = styled.div`
  padding: 20px;
`;
