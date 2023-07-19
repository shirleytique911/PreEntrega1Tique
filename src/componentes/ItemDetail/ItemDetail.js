import ItemCount from "../ItemCount/ItemCount"
import ItemDetailContainer from "../ItemdetailContainer/ItemDetailContainer";

const ItemDetail =({id, product,img,category,precio,unidades,ciudad}) =>{
    return(
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {product}
            </h2>
            </header>
            <picture>
                <img src={img} alt={product}className="ItemImg"/>
            </picture>
            <section>
            <p className="Info">
                   Articulo{product} 
                </p>
            <p className="Info">
                   Ciudad{ciudad} 
                </p>
                <p className="Info">
                   Precio: ${precio} 
                </p>
                <p className="Info">
                    stock disponible:{unidades}
                </p>
                <p className="Info">
                    categoria: {category}
                </p>

            </section>
                <footer className='ItemFooter'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada',quantity)}/>

                    </footer> 
        

            </article>



)
}

export default ItemDetail

    
