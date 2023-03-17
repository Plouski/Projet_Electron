import { RouterProvider } from "react-router-dom";
import Footer from "./components/base/footer";
import Header from "./components/base/header";
import ContainerComponent from "./components/UI/container";
import router from "./config/router";

export default function App() {
  return (
    <>
    <ContainerComponent>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ContainerComponent>
    </>
  );
}
