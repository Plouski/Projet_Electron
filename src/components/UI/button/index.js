import React from 'react';
import styled from "styled-components";

const ButtonComponent = ({children}) => {

  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #00561B;
  border-radius: 5px;
  padding: 5px;
`;

export default ButtonComponent;
