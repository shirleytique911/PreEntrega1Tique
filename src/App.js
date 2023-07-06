
// import { ChakraProvider } from '@chakra-ui/react'
import Nav from "./Nav"
import CarWindget from "./CartWindget";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./componentes/ItemCount";
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
    <>
    <Nav/>
    <CarWindget/>
 <main class="p-6 w-16">
    <ItemListContainer greeting ="Bienvenidos" />
    
    </main>

    <ItemCount/>
 
    </>
    

   
  );
}



export default App;
