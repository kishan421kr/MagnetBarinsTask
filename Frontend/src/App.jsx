
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/cart";
import CheckOut from "./Pages/checkout";

const App=()=>{
  return(<>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="product" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  </>)
}

export default App