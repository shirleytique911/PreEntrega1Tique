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
     <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Delicias de Isa! "/>}/>
     <Route path='/category/:category' element={<ItemListContainer/>}/>

     <Route path='/category/item/:itemId' element={<ItemListContainer/>}/>
     <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>




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
