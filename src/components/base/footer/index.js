import React from "react";
import styled from "styled-components";

function Footer (props) {
  return (
    <>
      {props.children}
	    <Bottom />
    </>
  );
};

const Bottom = styled.div`
    padding-bottom: 100px;
    background-image: linear-gradient(black, green);
`;

export default Footer;