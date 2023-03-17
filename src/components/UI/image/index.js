import React from "react";
import styled from "styled-components";

const defaultImage =
"https://www.referencement-du-pro.com/wp-content/uploads/1638372046-code-error-404.jpeg"

// composant atomique, on peut le rappeler on veut
const Image = ({ image }) => {
  return <Picture src={image ? image : defaultImage} />;
};

const Picture = styled.img`
  width: 250px;
  height: 250px;
`;

export default Image;
