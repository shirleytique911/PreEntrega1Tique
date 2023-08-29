import Item from "../Item/Item"





const ItemList = ({Products }) => {
    return(
        <div className='Lista grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 '>
                <h2>Lista de productos</h2>
              

{Products.map((prod) =>( <Item key={prod.id} {...prod}/>
))}
</div>
        );
};

export default ItemList;