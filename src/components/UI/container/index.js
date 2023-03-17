import React from 'react';
import styled from "styled-components";

const ContainerComponent = ({children}) => {

  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  background-color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  text-align: center;
  margin :auto;
`;
export default ContainerComponent;
