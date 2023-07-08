import CarWindget from "../CarWindget/CartWindget";import ItemCount from "../ItemCount/ItemCount";
//  'Carwindget'


const NavBar =() =>{
    return(
<nav  className="flex justify-between p-6 bg-blue-400 ">
<div >
        <h1 >Bienvenidos</h1>
        
        <button >link</button>
      <button >link</button>
      <button >link</button>
      </div>

      <CarWindget/>
      </nav>
    
);

}

export default NavBar;