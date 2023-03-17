import React from 'react';
import styled from "styled-components";

const ParagrapheComponent = ({children}) => {

  return (
    <Paragraphe>
      {children}
    </Paragraphe>
  );
}

const Paragraphe = styled.div`
  color:white;
  padding-left: 15%;
  padding-right: 15%;
`;

export default ParagrapheComponent;
