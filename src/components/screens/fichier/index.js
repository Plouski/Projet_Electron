import React, { useState } from 'react';
import CryptoJS from "crypto-js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TitleComponent from '../../UI/title';
import ParagrapheComponent from '../../UI/paragraphe';
import SeparatorComponent from '../../UI/separator';
import ButtonComponent from '../../UI/button';
import ButtonProf from '../../UI/buttonProf';
import LabelComponent from '../../UI/label';
import InputComponent from '../../UI/input';
import DialogButton from '../../UI/dialogButton';

function Fichier () {
  const navigate = useNavigate();
  const [filePath, setFilePath] = useState("");
  const [screen, setScreen] = useState("encrypt");
  const [encrptedData, setEncrptedData] = useState("");
  const [decrptedData, setDecrptedData] = useState("");

  //Clé secret
  const secretPass = "XkhZG4fW2t2W";

  //Ouverture du fichier
  const openDialog = () => {
    window.dialog.open();
    window.dialog.getFilePath(setFilePath);
  }

  //Chiffrement du fichier
  const encryptData = () => {
    const data = CryptoJS.AES.encrypt(
      JSON.stringify(filePath),
      secretPass
    ).toString();

    setEncrptedData(data);
  };

  //Déchiffrement du fichier
  const decryptData = () => {
    const bytes = CryptoJS.AES.decrypt(filePath, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    setDecrptedData(data);
  };

  //2 choix possibles "Chiffrement" et "Déchiffrement"
  const switchScreen = (type) => {
    setFilePath("");
    setEncrptedData("");
    setDecrptedData("");
    setScreen(type);
  };

  //Envoi du fichier
  const handleClick = () => {
    if (!filePath) {
      alert('Erreur ! :( Ajoutez bien votre fichier.')
    };

    if (screen === "encrypt") encryptData();
    else decryptData();
  };

  //Affichage
  return (
    <>
      <TitleComponent 
        title="Chiffrer un fichier" 
        Level="h1" />
      <ParagrapheComponent>
        Le chiffrement des fichiers permet de protéger vos données par chiffrement.<br/>
        Seule une personne possédant la bonne clé de chiffrement (comme un mot de passe) peut déchiffrer et lire les données.
      </ParagrapheComponent>
      <SeparatorComponent />
      <ButtonProf 
        onClick={() => {switchScreen("encrypt");}}
        label="Cryptage" 
      />
      <ButtonProf 
        onClick={() => {switchScreen("decrypt");}}
        label="Decryptage" 
      />
      <SeparatorComponent />
      <DialogButton 
        onClick={openDialog} 
        label="Ouvrir un fichier" 
      />
      <InputComponent
        name="filePath"
        value={filePath}
        required="required"
        type="text"
        onChange={({ target }) => {
          setFilePath(target.value);
        }}
      />
      <ButtonComponent>
        <button onClick={handleClick}>
          {screen === "encrypt" ? "Crypter" : "Decrypter"}
        </button>
      </ButtonComponent>
      {encrptedData || decrptedData ? (
        <>
        <LabelComponent>
          {screen === "encrypt" ? "Crypter" : "Decrypter"} Message:
        </LabelComponent><br/>
        <ParagrapheComponent>
          {screen === "encrypt" ? encrptedData : decrptedData}
        </ParagrapheComponent>
        </>
    ) : null}
      <SeparatorComponent />
      <BottomRight>
        <ButtonProf onClick={() => navigate("/message")} label="Chiffrer un message" />
        <ButtonProf onClick={() => navigate("/")} label="Retour à l'accueil" />
      </BottomRight>
    </>
  );
}

const BottomRight = styled.div`
  position:fixed;
  right:1%;
`;

export default Fichier;