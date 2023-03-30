import { createBrowserRouter } from "react-router-dom";
import Accueil from "../components/screens/accueil";
import Fichier from "../components/screens/fichier";
import Message from "../components/screens/message";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />
  },
  {
    path: "/fichier",
    element: <Fichier />
  },
  {
    path: "/message",
    element: <Message />
  },
]);

export default router;
