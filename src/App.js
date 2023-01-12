import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutUsPage from "./pages/aboutusPage/AboutUsPage";
import Catalog from "./pages/catalog/Catalog";
import Iphone from "./pages/iphone/Iphone";
import Ipad from "./pages/ipad/Ipad";
import AppleWatch from "./pages/appleWatch/AppleWatch";
import CatalogList from "./pages/catalogList/CatalogList";
import "./styles/global.css";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/catalog" element={<Catalog/>}>
              <Route index element={<CatalogList/>}/>
              <Route path="iphone" element={<Iphone/>}/>
              <Route path="iPad" element={<Ipad/>}/>
              <Route path="apple-watch" element={<AppleWatch/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

// http://localhost:3000   - megacom.kg/catalog/iphone
// http://localhost:3002  - megacombugaga.kg/catalog/iphone
/*
http://localhost:3000/catalog - Catalog, CatalogList
http://localhost:3000/catalog/iphone - Catalog, Iphone
http://localhost:3000/catalog/iPad   - Catalog, Ipad
http://localhost:3000/catalog/apple-watch - Catalog, appleWatch
*/

export default App;