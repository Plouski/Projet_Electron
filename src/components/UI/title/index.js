import React from 'react';
import styled from "styled-components";

const TitleComponent = ({title, Level}) => {

  return (
    <Titre>
      <Level>
        {title}
      </Level>
    </Titre>
  );
}

const Titre = styled.div`
  color: #00561B;
`;

export default TitleComponent;
