import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";






const CartItem = ({id,product,img,  precio, quantity }) => {
    const { removeItem} = useContext(CartContext);
   
  
    let precioUnitario = precio.toLocaleString("es-CO",{ style: "currency", currency: "COP", minimumFractionDigits: 0,  maximumFractionDigits: 0, })
  
    let subtotal = precio * quantity;
  
  
    return (

    <div>
        <picture>
                    <img src={img} alt={product}className="ItemImg w-4/5  h-64 rounded-xl"/>
                </picture>
    
          <h1>{product}</h1>
        
            <div className="item-details">
              <p>Precio: {precioUnitario}</p>
              <p>Cantidad: {quantity}</p>
              <p>Total: {subtotal.toLocaleString("es-CO",{ style: "currency", currency: "COP", minimumFractionDigits: 0,  maximumFractionDigits: 0, })}</p>
            </div>{" "}
       
       
       
          <button variant="outline-danger" onClick={() => removeItem(id)}>
            <Link to={`/cart`}> Eliminar </Link>
          </button>
       
          </div>
    )
  }


  export default CartItem