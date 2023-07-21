import  Item from "../Item/Item"
import { products } from "../utilis/product"


const ItemList = ({products}) =>{

    return(
        <div className="ListGroup">
{products.map(prod=> <Item key ={prod.id} {...prod}/>)}
</div>
        )
}

export  {ItemList}