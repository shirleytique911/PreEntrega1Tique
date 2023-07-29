import  Item from "../Item/Item"
import { Link } from "react-router-dom";

const ItemList = ({Products }) => {
    return(
        <div className='Lista'>
                <h2>Lista de productos</h2>
                <Link to={`/item/${Products}`} className='Option'></Link>       

{
Products.map((prod) =>( <Item key={prod.id} {...prod}/>
))}
</div>
        );
};

export default ItemList;