import  { useState, useEffect } from 'react';
import { getProductsById } from '../utilis/product';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [Products, setProducts] = useState(null) 

    const {itemId} =useParams()


    useEffect(() => {
     getProductsById(itemId)
     .then(response =>{
        setProducts(response)
     })
     .catch(error =>{
        console.error(error)
     })
     }, [itemId])




     return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...Products} />
        </div>
     )

     }
     export default ItemDetailContainer;

