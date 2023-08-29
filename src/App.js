import {BrowserRouter, Route, Routes} from "react-router-dom"

import Navbar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemLisContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemdetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart"
import { CartProvider } from "./context/CartContext";




function App() {
  return (
    <BrowserRouter>

<div className= "App">
  
  <CartProvider>
 <Navbar/>

 

<Routes>
<Route path='/' element={<ItemListContainer/>}/>
<Route path='/category/:categoryId' element={<ItemListContainer/>}/>
<Route path='/item/:itemId' element={<ItemDetailContainer />}/>
<Route path='/cart/:id' element={<Cart />}/>
<Route path='*' element={<h1>NOT FOUND</h1> }/>


 
 
    
  
   
 </Routes>   
 </CartProvider>
 
 </div>
 <footer className="p-2  bg-blue-800  text-white text[10] ">
  Delicias de Isa
 </footer>



</BrowserRouter>

  );

}



export default App;
