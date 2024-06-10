import './assets/style/index.scss'
import { Route, Routes } from "react-router-dom";
import { Catalog } from "./pages/Catalog";
import { Clients } from "./pages/Clients";
import { Header } from "./pages/Header/Header";

export const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/users' element={<Clients />} />
      </Routes>
    </>
  );
}
