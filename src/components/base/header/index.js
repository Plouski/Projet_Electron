import React from "react";
import styled from "styled-components";


function Header (props) {
  return (
    <>
	    <Navbar  />
	    {props.children}
    </>
  );
};

const Navbar = styled.div`
  background-image: url('https://media.lesechos.com/api/v1/images/view/5bd3025e3e4546556f07b71f/1280x720/2211254-cryptage-et-tatouage-pour-proteger-les-donnees-de-sante-web-tete-0302346061172.jpg');
  height: 50px;
`;

export default Header;