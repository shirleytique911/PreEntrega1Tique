
// import { ChakraProvider } from '@chakra-ui/react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemLisContainer/ItemListContainer";
import  ItemDetailContainer from "./componentes/ItemdetailContainer/ItemDetailContainer";

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     <ChakraProvider>
//       <TheRestOfYourApplication />
//     </ChakraProvider>
//   )
// }


function App() {
  return (


    <div className="App">
      <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>NOT FOUND</h1>}/>
{/* //  <ItemListContainer greeting ={'Bienvenidos'} /> */}

</Routes>
</BrowserRouter>

 </div>

  );

}



export default App;
