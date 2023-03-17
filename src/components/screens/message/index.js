import React, {useState} from 'react';
import CryptoJS from "crypto-js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SeparatorComponent from '../../UI/separator';
import TitleComponent from '../../UI/title';
import ParagrapheComponent from '../../UI/paragraphe';
import ButtonComponent from '../../UI/button';
import LabelComponent from '../../UI/label';

function MessageComponent () {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [screen, setScreen] = useState("encrypt");
  const [encrptedData, setEncrptedData] = useState("");
  const [decrptedData, setDecrptedData] = useState("");

  //Clé secrete
  const secretPass = "XkhZG4fW2t2W";

  //Chiffrement du texte
  const encryptData = () => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(text),
      secretPass
    ).toString();

    setEncrptedData(data);
  };

  //Déchiffrement du texte
    const decryptData = () => {
    const bytes = CryptoJS.AES.decrypt(text, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    setDecrptedData(data);
  };

  
  const switchScreen = (type) => {
    setText("");
    setEncrptedData("");
    setDecrptedData("");
    setScreen(type);
  };

  //Envoi du texte
  const handleClick = () => {
    if (!text) 
    {
      alert('Erreur ! :( Remplissez bien votre message.')
      // return true;
    }
    // else {
    //   return false;
    // }
    if (screen === "encrypt") encryptData();
    else decryptData();
  };

  //Affichage
  return(
    <>
      <TitleComponent
        title="Chiffrer un message" 
        Level="h1" />
      <ParagrapheComponent>
        Le chiffrement du message permet de brouiller le texte.<br />
        Le texte, devenu illisible, ne peut alors être déchiffré (décrypté) qu'avec une clé secrète.
      </ParagrapheComponent>
      <SeparatorComponent/>
      <button 
        onClick={() => {switchScreen("encrypt");}}>
        Cryptage
      </button>
      <button 
        onClick={() => {switchScreen("decrypt");}}>
        Decryptage
      </button>
      <SeparatorComponent />
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={({ target }) => {
          setText(target.value);
        }}
        name="text"
        type="text"
      />
      <SeparatorComponent />
      <ButtonComponent>
      <button onClick={handleClick}>
        {screen === "encrypt" ? "Crypter" : "Decrypter"}
      </button>
      </ButtonComponent>
      {encrptedData || decrptedData ? (
      <>
        <LabelComponent>
          {screen === "encrypt" ? "Crypter" : "Decrypter"} Message:
        </LabelComponent>
        <ParagrapheComponent>
          {screen === "encrypt" ? encrptedData : decrptedData}
        </ParagrapheComponent>
      </>
      ) : null}
      <BottomRight>
        <ButtonComponent>
          <button onClick={() => navigate("/")}>
            Retour à l'accueil
          </button>    
        </ButtonComponent> 
        <ButtonComponent>
          <button onClick={() => navigate("/fichier")}>
            Chiffrer un fichier
          </button>    
        </ButtonComponent> 
      </BottomRight>
      </>
  );  
}

const BottomRight = styled.div`
  position:fixed;
  right:1%;
`;

export default MessageComponent;