import {ItemCount, text} from '../ItemCount/ItemCount'
import  {product}  from '../utilis/product'
import { ItemList} from '../ItemList/ItemList'
import {customFecth } from '../utilis/customFetch'
import { useState, useEffect } from 'react'


const ItemListContainer =({greeting})=> {
 const [listaProduct,setListaProduct] = useState([])
 const [loading, setLoading] =useState (true)

 useEffect(() =>{
    setLoading(true)
    customFecth(product)
      .then(res =>{ 
        setLoading(false)
        setListaProduct(res)
    }) 
 }, [])


    return(
        <>
    <div>

        <h1>{greeting}</h1>
        {!loading
         ?
        <ItemList ListaProduct = {listaProduct}/>
        :
        <text>cargando...</text>

        }
    </div>
    </>
    )
}

export default ItemListContainer;