import React from 'react';
import styled from "styled-components";

const ButtonProf = ({label, onClick}) => {

  return (
    <ButtonStyled onClick={onClick}>
      {label}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background-color: #00561B;
  border-radius: 5px;
  padding: 5px;
  color: white;
`;

export default ButtonProf;
