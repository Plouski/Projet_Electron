import React from 'react';
import styled from "styled-components";

const InputComponent = ({ type, name, value, isRequired, isDisabled, onChange }) => {
  return (
    <InputStyled>
      <input 
        name={name} 
        value={value} 
        required={isRequired} 
        // placeholder={placeholder}
        type={type}
        disabled={isDisabled}
        onChange={onChange}  
      />
      </InputStyled>
  );
}

const InputStyled = styled.div`
  padding: 15px;
`;

export default InputComponent;
