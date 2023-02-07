import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutUsPage from "./pages/aboutusPage/AboutUsPage";
import CatalogPage from "./pages/catalogPage/CatalogPage";
import "./styles/global.css";
import Header from "./components/header/Header";
import ProductsPage from "./pages/productsPage/ProductsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import UsersPage from "./pages/usersPage/UsersPage";
import AddProductsPage from "./pages/addProductsPage/AddProductsPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/catalog" element={<CatalogPage/>}/>
          <Route path="/catalog/:product" element={<ProductsPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/addProducts" element={<AddProductsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;