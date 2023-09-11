import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  min-width: 280px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;

  @media (min-width: 650px) {
    max-width: 768px;
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    max-width: 1280px;
  }
`;

export const Button = styled.button`
padding: 5px 10px;
cursor: pointer;
border: none;
background: transparent;

&:hover{
  border-radius: 5px;
  color: #fff;
  background-color: rgb(2, 95, 189);
}
`;

export const ContImg = styled.div`
  margin-bottom: 20px;

  @media (min-width: 650px) {
    margin-bottom: 0;
    width: 40%;
  }
`;

export const Img = styled.img`
  //margin: 0 auto;
  width: 100%;
  border-radius: 15px;

  @media (min-width: 650px) {
    height: 100%;
  }
`;

export const ContText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (min-width: 650px) {
    margin-left: 10px;
    width: 60%;
    align-items: start;
  }
`;

export const Title = styled.h2`
  //width: 80%;
  text-align: start;
`;

export const Paragraph = styled.p`
text-align: justify;
  margin-bottom: 10px ;
`;

export const H3 = styled.h3`
  margin-bottom: 10px;

`;

export const ContDetails = styled.div`
  min-width: 280px;
  margin: 0 auto;
  padding: 10px;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;

  @media (min-width: 650px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1280px;
}
`;
export const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 650px) {
    justify-content: flex-start;
  }
`;

export const H4 = styled.h4`
  margin-bottom: 10px;
`;

export const UlDetails =  styled.ul`
width: 100%;
display: flex;
justify-content: center;
`;

export const Li = styled.li`
  margin-right: 10px;
`;

export const Link = styled(NavLink)`
border-radius: 4px;
text-decoration: none;
color: black;

&.active {
    padding: 5px 15px;
    text-decoration: underline;
    color: white;
    background-color: rgb(2, 95, 189);
  }

  @media (min-width: 650px) {
    //padding: 2px 10px;
    max-width: 767px;
  }
  
  @media (min-width: 1024px) {
    //padding: 4px 16px;
  }
`;
