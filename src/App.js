import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemLisContainer/ItemListContainer";
import  ItemDetailContainer from "./componentes/ItemdetailContainer/ItemDetailContainer";

function App() {
  return (
<>
    <div className="App">
      <BrowserRouter>
    <NavBar/>
     <Routes>
     <Route path='/Products' element={<ItemListContainer/>}/>
     <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

     <Route path='/category/:Id' element={<ItemListContainer/>}/>
     <Route path='/Products/:id' element={<ItemDetailContainer/>}/>


     <Route path='/item/ItemId' element={<ItemDetailContainer/>}/>

     <Route path='*' element={<h1>PRODUCTOS</h1>}/>

</Routes>
</BrowserRouter>

 </div>


<footer className='bg-lime-500 text-center font-serif'>
  <h2>CONTACTANOS</h2>

</footer>
</>
 

  );

}



export default App;
