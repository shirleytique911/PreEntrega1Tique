import CarWindget from "../CarWindget/CartWindget";
import { NavLink, Link } from 'react-router-dom'


const NavBar =() => {
    return(
<nav  className="flex justify-between p-4 bg-blue-400 ">
  <Link to='/products'>
    <h3 className="delicias font-serif">Delicias De Isa</h3>
  </Link>
<div className="categories font-serif" >
        <NavLink to={ `/category/Products`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Productos/</NavLink>
        <NavLink to={ `/category/Queso`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Queso/</NavLink>
        <NavLink to={ `/category/Dulce`} className={({isActive}) => isActive ? 'ActiveOption':'Option'}>Dulce</NavLink>

      </div>

      <CarWindget/>
      </nav>
    
)

}

export default NavBar;