import React from 'react';
import styled from "styled-components";

const LabelComponent = ({children}) => {

  return (
    <Label>
      {children}
    </Label>
  );
}

const Label = styled.div`
    font-weight: bold;
    color: white;
`;

export default LabelComponent;
