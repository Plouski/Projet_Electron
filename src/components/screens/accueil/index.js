import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../UI/button";
import Image from "../../UI/image";
import ParagrapheComponent from "../../UI/paragraphe";
import SeparatorComponent from "../../UI/separator";
import TitleComponent from "../../UI/title";

const Accueil = () => {
  const navigate = useNavigate();
  return (
    <>
        <TitleComponent 
            title="Bienvenue au cryptage !" 
            Level="h1" />
        <TitleComponent 
            title="C'est quoi le cryptage ?" 
            Level="h2" />
        <ParagrapheComponent> 
            C'est un chiffrement qui est un procédé de cryptographie consistant à protéger des données 
            qui sont alors incompréhensibles pour celui qui ne dispose pas de la clef du chiffrement.
        </ParagrapheComponent>
        <TitleComponent 
            title="Pourquoi le chiffrement ?" 
            Level="h2" />
        <ParagrapheComponent>
            C'est pour s'assurer que les informations du système informatique qui ne peuvent être ni volées ni lues 
            par quelqu'un qui souhaite les utiliser à des fins malveillantes.
        </ParagrapheComponent>
        <TitleComponent 
            title="Il y a des exemples qu'on peut chiffrer qui sont les suivants :" 
            Level="h3" />
        <ButtonComponent>
            <button onClick={() => navigate("/fichier")}>
                Chiffrer un fichier
            </button>
        </ButtonComponent>
        <ButtonComponent>
            <button onClick={() => navigate("/message")}>
                Chiffrer un message
            </button>    
        </ButtonComponent>
        <SeparatorComponent />
        <Image image="https://images.frandroid.com/wp-content/uploads/2016/01/cryptage.jpg" />
    </>
  );
};
export default Accueil;
