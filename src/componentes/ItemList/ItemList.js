import  Item from "../Item/Item"

const ItemList = ({Products }) => {
    return(
        <div className='Lista'>
                <h2>Lista de productos</h2>
{
Products.map(prod => <Item key={prod.id} {...prod}/>)}
</div>
        )
}

export default ItemList