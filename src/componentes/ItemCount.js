

import { useState } from "react";

function ItemCount (props) {

    const [count,setCount] =useState(0)
    const  handleSumar =() =>{
        setCount(count +1)
    }

    const  handleComprar =() =>{
        alert(`comprar ${count} productos seleccionados`)
        props.onAdd()
    }

    const  handleRestar =() =>{
        setCount(count - 1)
    }

    return(
        
       <div>
        <p>Contador :{count}
        <button onClick={handleSumar}>+</button>
        <button onClick={handleComprar}>Unidades</button>
        <button onClick={handleRestar}>-</button>

        </p>
       </div>
    )
}

export default ItemCount;