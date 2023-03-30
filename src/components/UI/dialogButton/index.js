import React from 'react';
import styled from "styled-components";


const DialogButton = ({onClick, label}) => {
    return (
        <ButtonStyled onClick={onClick}>
            {label}
        </ButtonStyled>
    );  
}

const ButtonStyled = styled.button`
  border-radius: 5px;
  padding: 5px;
  color: green;
`;

export default DialogButton;