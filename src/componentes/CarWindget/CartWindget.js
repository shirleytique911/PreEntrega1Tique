import  carrito from './assets/carrito de compras.png'

 import { useContext } from 'react'
 import { CartContext } from '../../context/CartContext'
 import { Link } from 'react-router-dom'



function Cartwidget() {
    const { totalQuantity} = useContext (CartContext)
    return (
        <div>
            <Link to='/cart' className='Carwinget' style={{display: totalQuantity > 0 ?'block':' none'}}>
 <img  src={carrito} alt="carrito de compras.png"className=" w-12   " />0
 {totalQuantity}
 </Link>
        </div>
    )
}

export default Cartwidget




                


    
        
