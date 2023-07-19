import CarWindget from "../CarWindget/CartWindget";
// import ItemCount from "../ItemCount/ItemCount";
import { NavLink, Link } from 'react-router-dom'


const NavBar =() =>{
    return(
<nav  className="flex justify-between p-4 bg-blue-400 ">
  <Link to='/'>
    <h3>Ecommerce</h3>
  </Link>
<div className="categories" >
        <NavLink to={ `/category/Productos`} className={({isActive}) => isActive ? 'ActiveOption':'Optio'}>Productos</NavLink>
        <NavLink to={ `/category/Queso`} className={({isActive}) => isActive ? 'ActiveOption':'Optio'}>Queso</NavLink>
        <NavLink to={ `/category/Dulce`} className={({isActive}) => isActive ? 'ActiveOption':'Optio'}>Dulce</NavLink>

      </div>

      <CarWindget/>
      </nav>
    
)

}

export default NavBar;