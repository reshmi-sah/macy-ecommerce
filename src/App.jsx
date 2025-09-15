import { Routes, Route } from 'react-router-dom';

import Shopsection from "./ecommerce/Shopsection";
import ShopCategory from "./ecommerce/pages/ShopCategory";
import Shop from "./ecommerce/pages/Shop";
import Cart from "./ecommerce/pages/Cart";
import Login from "./ecommerce/pages/Login";
import men_banner from './ecommerce/ecommerce_images/macymenbanner4.jpg';
import woman_banner from './ecommerce/ecommerce_images/macywomanbanner1.jpg';
import kid_banner from './ecommerce/ecommerce_images/macykidbanner.jpg';
import Product from "./ecommerce/pages/Product";
import Ecohome from "./ecommerce/Ecohome";





function App() {
  return (
    
      <Routes>
        <Route path="/Shopsection" element={<Shopsection />} />
        <Route path="/" element={< Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} key="men" category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={woman_banner} key="woman" category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} key="kids" category="kids" />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
       <Route path="/product/:productId" element={<Product />} />
        <Route path="/ecohome" element={<Ecohome />} />
        


        

        


         

      </Routes>
  
  );
}

export default App;
