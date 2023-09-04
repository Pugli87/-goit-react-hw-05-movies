import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;


export const Input = styled.input`
  padding: 8px;
  width: 240px;
  margin-top: 10px;
  border: 1px solid rgb(2, 95, 189);
  background-color: transparent;
  border-radius: 5px;
  &:focus {
    outline: 1px solid rgb(2, 95, 189);
  }
`;
  
export const Button = styled.button`
  padding: 5px 10px;
  position: relative;
  top: 4px;
  right: 40px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
  
export const Svg = styled.svg`
  width: 15px;
  height: 15px;

`;


