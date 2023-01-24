import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutUsPage from "./pages/aboutusPage/AboutUsPage";
import CatalogList from "./pages/catalogList/CatalogList";
import "./styles/global.css";
import Header from "./components/header/Header";
import ProductsPage from "./pages/productsPage/ProductsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/catalog" element={<CatalogList/>}/>
          <Route path="/catalog/:product" element={<ProductsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

// http://localhost:3000   - megacom.kg/catalog/iphone
// http://localhost:3002  - megacombugaga.kg/catalog/iphone
/*
http://localhost:3000/catalog - CatalogList
http://localhost:3000/catalog/iphone - ProductsPage
http://localhost:3000/catalog/iPad   - ProductsPage
http://localhost:3000/catalog/apple-watch - ProductsPage
*/

export default App;