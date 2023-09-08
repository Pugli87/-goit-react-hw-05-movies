import styled from 'styled-components'

export const Contain = styled.div`
  padding: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid;

  @media (max-width: 449px) {
    min-width: 280px;
    flex-direction: column;
  }

  @media (min-width: 450px) {
    max-width: 1279px;
    flex-direction: row;
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
  width: 20%;
  @media (min-width: 280px) {
    width: 100%;
  }
  @media (min-width: 450px) {
    width: 20%;
  }

`;

export const Img = styled.img`
  //margin: 0 auto;
  border-radius: 15px;
  height: 100%;
`;

export const ContText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 80%;
  align-items: center;
  @media (min-width: 767px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  //width: 80%;
  text-align: start;
`;

export const Paragraph = styled.p`
  text-align: start;
`;

export const H3 = styled.h3`
g
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  $:


`;
export const H4 = styled.h4`
  text-align: start;
`;

export const Li = styled.li`
  //text-align: start;
  margin-right: 10px
`;


