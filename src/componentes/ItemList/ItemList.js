import  Item from "../Item/Item"

const ItemList = ({products }) => {
    return(
        <div className='Lista'>
{products.map(prod => <Item key={prod.id} {...prod}/>)}
</div>
        )
}

export default ItemList