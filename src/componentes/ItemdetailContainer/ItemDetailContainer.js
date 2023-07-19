import { useState,useEffect } from "react";
import { getProducstById } from '../utilis/product';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer =()=>{
    const [products,setProducts] =useState(null)

    useEffect(() =>{
     getProducstById('1')
     .then(response =>{
        setProducts(response)
     })
     .catch(error =>{
        console.error(error)
     })
     }, [])




     return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...products} />
        </div>
     )

     }
     export default ItemDetailContainer

