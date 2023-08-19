import carrito from './assets/carrito de compras.png'
// import cart from "./assets/cart.svg"

import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CarWindget=() =>  {
    const { totalQuantity} =useContext(CartContext)
    

    return(
        <Link to ='/cart' className='Cartwidget' style={{ display: totalQuantity > 0 ? ' block':'none'}}>
<img  src={carrito} alt="carrito de compras.png"className=" w-14" />0

       {totalQuantity}
        </Link>
                


    
        
    )

}

export default CarWindget;