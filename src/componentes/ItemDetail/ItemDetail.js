import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link,  } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({precio, unidades, category, product, ciudad,img,id }) =>{
const [ quantityAdded, setQuantityAdded] = useState (0)

const { addItem} =useContext (CartContext)

const  handleOnAdd =(quantity) => {
    setQuantityAdded(quantity)

    const item = {
        id, product,precio
    }
    addItem(item,quantity)
}

    return(
        <article className="CardItem flex my-30 mx-80 mr-80  justify-around flex-wrap py-12 text-center font-serif">
        <header className="Header flex my-30 mx-80 mr-80  justify-around flex-wrap py-12 ">
           
            <h2 className="ItemHeader">
                {product}
            </h2>
            </header>
            <picture>
                <img src={img} alt={product}className="ItemImg  w-4/5  h-64 rounded-xl  "/>
            </picture>
            <section>
            <p className="Info">
                   Articulo : {product} 
                </p>
            <p className="Info">
                   Ciudad: {ciudad} 
                </p>
                <p className="Info">
                   Precio: ${precio} 
                </p>
                <p className="Info">
                    Stock disponible :{unidades}
                </p>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    id: {id}
                </p>

            </section>
            

            <footer className='ItemFooter flex justify-center  outline-0 p-3 text-black  text-center w-full cursor-pointer text-lg'>
          {
            quantityAdded > 0 ? (
                      <Link to= '/cart'  className= 'Option'>Terminar Compra</Link>
            ): (<ItemCount initial={1} stock={unidades} onAdd={handleOnAdd}/>

                 
            )
            }

    </footer> 

        

            </article>


   )
}  

export default ItemDetail;

    
