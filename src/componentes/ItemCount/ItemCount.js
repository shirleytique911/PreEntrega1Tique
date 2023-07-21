import { useState } from 'react'

const ItemCount =({stock,initial,onAdd}) =>{
    const [ quantity ,  setQuantity] =useState(initial)

    const incremet =() =>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }

    }
    
    
    const  decrement =() =>{
        if(quantity >1){
            setQuantity(quantity -1)
        }
        
    }
    

    return(
        
<div className='Counter flex justify-center'>
        <div className='Controls'>
        <button className="Button" onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button  className="Button"onClick={incremet}>+</button>

        
        </div>
       <div>

       <button className="Button flex justify-center border-none outline-0 p-3 text-lime-500 bg-black text-center w-full cursor-pointer text-lg" onClick={() => onAdd(quantity)} disabled ={!stock}>

       </button>
    
    
    </div>
    </div>
       )
}

export default ItemCount;