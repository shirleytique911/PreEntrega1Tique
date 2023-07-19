import CarWindget from "../CarWindget/CartWindget";import ItemCount from "../ItemCount/ItemCount";
//  'Carwindget'


const NavBar =() =>{
    return(
<nav  className="flex justify-between p-4 bg-blue-400 ">
<div >
        <h1 >Bienvenidos</h1>
        
        <button >Productos-</button>
      <button >DE QUESO-</button>
      <button >DE Dulce</button>
      </div>

      <CarWindget/>
      </nav>
    
);

}

export default NavBar;