import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  //display: none;
  //text-align: center;
`;

export const Form = styled.form`
  width: 240px;
  display: flex; 
`;

export const Input = styled.input`
  //margin: 0 auto;
  padding: 8px;
  width: 240px;
  border: 1px solid rgb(2, 95, 189);
  background-color: transparent;
  border-radius: 5px;
  &:focus {
    outline: 1px solid rgb(2, 95, 189);
  }
`;
  
export const Button = styled.button`

position: absolute;
  padding: 7px 10px;
  position: relative;
  top: 2px;
  right: 36px;
  cursor: pointer;
  border: none;
  background: transparent;
`;
  
export const Svg = styled.svg`
  width: 15px;
  height: 15px;
`;


