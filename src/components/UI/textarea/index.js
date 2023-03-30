import React from 'react';
import styled from "styled-components";

const TextareaComponent = ({ type, name, text, onChange }) => {
  return (
    <TextareaStyled>
      <textarea 
      rows={4}
      cols={50}
      value={text}
      onChange={onChange}
      name={name}
      type= {type}
      />
      </TextareaStyled>
  );
}

const TextareaStyled = styled.div`
  background-color: red;
`;

export default TextareaComponent;
