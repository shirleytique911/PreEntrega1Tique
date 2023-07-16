
// import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./componentes/Navbar/NavBar";
import ItemListContainer from "./componentes/ItemLisContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";


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
    <NavBar/>
     
 <ItemListContainer greeting ={'Bienvenidos'} />
 <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>
 </div>

  );
}



export default App;
