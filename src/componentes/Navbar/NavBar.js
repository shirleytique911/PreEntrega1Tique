import CarWindget from "../CarWindget/CartWindget";
import React from "react";
import { NavLink, Link } from 'react-router-dom'


const NavBar =() => {
    return(
<nav  className="flex justify-between p-4 bg-blue-400 ">
  <Link to='/Products'>
    <h3 className="delicias font-serif">Delicias De Isa</h3>
  </Link>
<div className="categories font-serif" >
        <NavLink to={ `/Poducts/category/Products`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Productos/</NavLink>
        <NavLink to={ `/Products/category/Queso`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Queso/</NavLink>
        <NavLink to={ `/Products/category/Dulce`} >Dulce</NavLink>

      </div>

      <CarWindget/>
      </nav>
    
)

}

export default NavBar;