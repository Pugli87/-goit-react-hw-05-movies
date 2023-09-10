import styled from 'styled-components'

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
    width: 30%;
  }
  @media (min-width: 1024px) {
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

  @media (min-width: 650px) {
    margin-left: 10px;
    align-items: flex-start; 
    width: 70%;
  }
`;

export const Title = styled.h2`
  //width: 80%;
  text-align: start;
`;

export const Paragraph = styled.p`
text-align: justify;
  margin-bottom: 10px;
  `;
  
  export const H3 = styled.h3`
  g
  `;
  
  export const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 650px) {
    justify-content: flex-start;
  }
  `;
  export const H4 = styled.h4`
  text-align: start;
  `;
  
  export const Li = styled.li`
  //text-align: start;
  margin-right: 10px;
`;


