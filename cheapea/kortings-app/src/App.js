import React from "react";
import 'remixicon/fonts/remixicon.css'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Main from './pages/Main';
import Bookmarks from './pages/Bookmarks';
import SingleProduct from './pages/SingleProduct';
import ListProduct from './pages/ListProduct';
import Offers from './offers.json';
import { categoryList } from "./Categories";
import NotFound from "./pages/NotFound";
import SearchProduct from "./pages/SearchProduct";

function App() {
  
  const convertProductToLink = (product) => {
    product = product.trim();
    var parsedProduct = product.normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
		.replace(/([^\w]+|\s+)/g, '-') // Replace space and other characters by hyphen
		.replace(/\-\-+/g, '-')	// Replaces multiple hyphens by one hyphen
		.replace(/(^-+|-+$)/g, ''); 
    
    parsedProduct = parsedProduct.toLowerCase(); 

    return parsedProduct;
  }

  const shops = ["jumbo", "aldi", "ah", "lidl", "plus", "ekoplaza", "dirk", "spar"]

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          {/* interaction with left hand side filters  */}
          {Offers.map((item) => { // Map all routes to the offers
           return <Route path={ "" + item.shop +"/product/" + convertProductToLink(item.product) + ""} element={<SingleProduct item={item} />} />
          })}

          {shops.map((shop, key) => { // Map all routes for shops
            return <Route key={key} path={shop} element={<Main shop={shop} />} />
          })}

          {shops.map((shop) => { // if you click on one blue category label + one yellow shop label, the url will change
            return categoryList.map((category, key) => {
              return <Route key={key} path={shop + "/" + category} element={<Main shop={shop} cat={category} />} />
            })
          })}

          {categoryList.map((category, key) => { // if you click on one blue category label, the url will change
              return <Route key={key} path={"alle-winkels/" + category} element={<Main cat={category} />} />
            })}
          
          <Route path="alle-winkels" element={<Main />} /> { /* Map all routes for all shops with everything */ }
          
          <Route path="bewaard" element={<Bookmarks />} />
          <Route path="zoek" element={<SearchProduct />} />
          {/* when you click on 'deel' the url in the pop-up */}
          <Route path="lijst/:id" element={<ListProduct />} />
          {/* when you type in a random url */}
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
