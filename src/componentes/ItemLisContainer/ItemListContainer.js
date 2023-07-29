import  {useState, useEffect}  from 'react'
import  {getProducts, getProductsByCategory }  from '../utilis/product'
import  ItemList from '../ItemList/ItemList'

import {useParams} from 'react-router-dom'

const ItemListContainer =({ greeting }) => {
const [Products, setProducts] = useState([])

const { categoryId } = useParams()


useEffect(() => {


const asyncFunc = categoryId ? getProductsByCategory : getProducts

asyncFunc(categoryId)
.then(response => {
    setProducts(response)
})
.catch(error =>{
    console.error(error)
})
},[categoryId])


return (
    <div>
        <h1>{greeting}</h1>
        
        <ItemList Products={Products}/>
    </div>
)



}



export default ItemListContainer;