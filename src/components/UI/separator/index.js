import React from 'react';
import styled from "styled-components";

const SeparatorComponent = ({children}) => {

  return (
    <Separator>
      {children}
    </Separator>
  );
}

const Separator = styled.div`
  padding: 5px;
`;

export default SeparatorComponent;
