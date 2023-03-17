import { createBrowserRouter } from "react-router-dom";
import Fichier from "../pages/fichier";
import Home from "../pages/home";
import Message from "../pages/message";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
