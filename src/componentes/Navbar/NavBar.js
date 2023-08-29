import Cartwidget from "../CarWindget/CartWindget"
import { NavLink, Link } from "react-router-dom"
// import React from "react"


function Navbar (){
     return(
        <nav className=" flex p2 justify-between bg-blue-300 shadow delicias font-serif">
            <Link to='/'>
    <h3 className="delicias font-serif">Delicias De Isa</h3>
   </Link>
            <div className="categories font-serif p-2  ">
       <NavLink to={ `/`} >Productos/</NavLink>
       <NavLink to={ '/category/Sal'}>Sal/</NavLink>
        <NavLink to={ '/category/Queso'}>Queso/</NavLink>
        <NavLink to={ `/category/Dulce`} >Dulce</NavLink>



          </div>
            <Cartwidget/>
        </nav>
     )
}


export default Navbar






// import CarWindget from "../CarWindget/CartWindget";
// import React from "react";
// import { NavLink, Link } from 'react-router-dom'


// const NavBar =() => {
//     return(
// <nav  className="flex justify-between p-4 bg-blue-400 ">
//   <Link to='/'>
//     <h3 className="delicias font-serif">Delicias De Isa</h3>
//   </Link>
// <div className="categories font-serif" >
//         <NavLink to={ `/`} >Productos/</NavLink>
//         <NavLink to={ `/category/Sal`}>Sal/</NavLink>
//         <NavLink to={ `/category/Queso`}>Queso/</NavLink>
//         <NavLink to={ `/category/Dulce`} >Dulce</NavLink>

//       </div>

//       <CarWindget/>
//       </nav>
    
// )

// }



// export default NavBar;